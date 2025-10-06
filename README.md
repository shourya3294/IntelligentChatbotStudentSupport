# Intelligent Chatbot for Student Support

A web-based chatbot built to handle student queries related to courses, exams, and placements.

### Features
- Intent recognition & dialogue management using Rasa/Dialogflow.
- Custom actions for dynamic responses.
- Web interface built with Flask.
- Easy deployment.

### Tech Used
- Python
- Rasa
- Flask
- HTML/CSS/JavaScript

### How to Run
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/Intelligent-Chatbot-Student-Support.git
   cd Intelligent-Chatbot-Student-Support
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start Rasa server:
   ```bash
   rasa train
   rasa run
   rasa run actions
   ```
4. Start Flask app:
   ```bash
   python web_app/app.py
   ```
5. Visit: `http://localhost:5000`

### License
MIT
