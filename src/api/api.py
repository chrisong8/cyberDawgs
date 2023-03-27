# api with flask goes here
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

# research how to pass in user's message, don't wanna use url params
@app.route('/test', methods=['GET', 'POST'])
def testfn():
    # GET request: 
    if request.method == 'GET':
        message = {'reply': 'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers
    # POST request
    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        # pass in to nlp?
        return 'Success', 200

if __name__ == '__main__':
    app.run()