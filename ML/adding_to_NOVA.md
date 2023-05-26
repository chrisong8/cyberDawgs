# Steps For Adding Information to NOVA

## 1. Format information into a context-related string.

Previous contexts were formatted as follows:

Nist Related Information [link to notebook](dataset_creation.ipynb#nist_info)
```
"Nist Categorization Type: {nist_type}\n"
"{name} ({abbrev})" (if name and abbrev are provided)
"\n\n"
"{summary}\n" (if summary is provided)
"{guidance}\n" (if guidance is provided)
"Related to: {related_to}" (if related_to is provided)
```

Wikipedia Articles [link to notebook](dataset_creation.ipynb#wiki_info)
```
"{title}\n"
"{heading}"
"\n\n"
"{content}"
```

Meta Information [link to notebook](dataset_creation.ipynb#meta_info)
```
"Information about the chatbot NOVA: {title}"
"\n\n"
"Abstract: {abstract}"
"\n\n"
"{content}"
```

**NOTE:** It would be beneficial to store the new context string you have generated for future use.

## 2. Use OpenAI API to embed the files

Read in the previous information and store all context in a single list similar to code in the [Format and Encode Articles](dataset_creation.ipynb#format_encode) section in the `dataset_creation` notebook. Use the same steps outlined in this section to then embed the articles.

**NOTE:** You need to use all of the documents in order to obtain proper encoding. This is why it is important to store whatever contexts you add in the event someone wishes to add more information in the future.

**NOTE 2:** Because we have to encode all the contexts everytime and this process will use tokens, this should be done in batch processes if possible.

## 3. Save the new csv file

One the csv file is saved under the same path, the flask server (NOVA) should be able to recognize any new information encoded and use it to answer queries.