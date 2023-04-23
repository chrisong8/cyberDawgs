from flask import Flask, jsonify, request
from flask_cors import CORS

import ask

app = Flask(__name__)
CORS(app)

@app.route("/api", methods=(["POST"]))
def ask_main():
    query = request.get_json()

    result = ask.ask(query)
    print("Bot answer: " + result)
    return result

if __name__ == '__main__':
    app.run()