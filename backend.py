from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

courses = [
    {
        "name": "Python Fundamentals",
        "progress": "70%"
    },
    {
        "name": "Linux Basics",
        "progress": "40%"
    },
    {
        "name": "Odoo Development",
        "progress": "20%"
    }
]

@app.route('/courses')
def get_courses():
    return jsonify(courses)

@app.route('/')
def home():
    return "Backend Running Successfully"

if __name__ == '__main__':
    app.run(debug=True)