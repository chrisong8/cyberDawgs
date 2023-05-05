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

# Serve the static files from the build folder
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()