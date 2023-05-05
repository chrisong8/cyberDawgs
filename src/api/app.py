from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os

import ask

app = Flask(__name__, static_folder='../../build')
CORS(app)

# "server" for NLP model
@app.route("/api", methods=(["POST"]))
def ask_main():
    query = request.get_json()

    result = ask.ask(query)
    print("Bot answer: " + result)
    return result

if __name__ == '__main__':
    app.run()