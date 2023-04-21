from flask import Flask, jsonify, request
import ask

app = Flask(__name__)

@app.route("/ask", methods=("POST"))
def ask():
    query = request.json['query']

    result = ask.ask(query)
    return jsonify(result=result)

if __name__ == '__main__':
    app.run()