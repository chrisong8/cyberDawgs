import pandas as pd
import ast
import tiktoken
from scipy import spatial
import openai
import os

openai.api_key = "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"
EMBEDDING_MODEL = "text-embedding-ada-002"
GPT_MODEL = "gpt-3.5-turbo"
BATCH_SIZE = 1000

embedded_df = pd.read_csv("data/embedded_text.csv")
embedded_df['embedding'] = embedded_df['embedding'].apply(ast.literal_eval)

# search function
# Note: adapted from https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb

def strings_ranked_by_relatedness(
    query,
    df,
    relatedness_fn=lambda x, y: 1 - spatial.distance.cosine(x, y),
    top_n = 100
):
    """Returns a list of strings and relatednesses, sorted from most related to least."""
    query_embedding_response = openai.Embedding.create(
        model=EMBEDDING_MODEL,
        input=query,
    )
    query_embedding = query_embedding_response["data"][0]["embedding"]
    strings_and_relatednesses = [
        (row["text"], relatedness_fn(query_embedding, row["embedding"]))
        for i, row in df.iterrows()
    ]
    strings_and_relatednesses.sort(key=lambda x: x[1], reverse=True)
    strings, relatednesses = zip(*strings_and_relatednesses)
    return strings[:top_n], relatednesses[:top_n]



def num_tokens(text, model = GPT_MODEL):
    """Return the number of tokens in a string."""
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))

def query_message(query, df, model, token_budget):
    """Return a message for GPT, with relevant source texts pulled from a dataframe."""
    strings, relatednesses = strings_ranked_by_relatedness(query, df)
    introduction = 'Use the below articles on the NIST CSF and adjacent topics to answer the subsequent question. If the answer cannot be found in the articles, write "I could not find an answer."'
    question = f"\n\nQuestion: {query}"
    message = introduction
    for string in strings:
        next_article = f'\n\nArticle section:\n"""\n{string}\n"""'
        if (
            num_tokens(message + next_article + question)
            > token_budget
        ):
            break
        else:
            message += next_article
    return message + question

def ask(query, df = embedded_df, model = GPT_MODEL, token_budget = 4096 - 500,
    print_message = False):
    """Answers a query using GPT and a dataframe of relevant texts and embeddings."""
    message = query_message(query, df, model=model, token_budget=token_budget)
    if print_message:
        print(message)
    messages = [
        {"role": "system", "content": "You answer questions about the NIST Cybersecurity Framework as a ChatBot named Nova."},
        {"role": "user", "content": message},
    ]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0
    )
    response_message = response["choices"][0]["message"]["content"]
    return response_message