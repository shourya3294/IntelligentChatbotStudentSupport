from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

RASA_SERVER_URL = "http://localhost:5005/webhooks/rest/webhook"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def get_bot_response():
    user_msg = request.json.get("message")
    response = requests.post(RASA_SERVER_URL, json={"sender": "user", "message": user_msg})
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(port=5000, debug=True)
