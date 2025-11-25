from flask import Flask, request, jsonify
import os
import requests

API_KEY = os.getenv("WEATHER_API_KEY")

app = Flask(__name__)

@app.route('/')
def index():
    return "🌤️ Weather App API is running. Use /weather?city=YourCity"

@app.route('/weather')
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({"error": "City parameter is required"}), 400

    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"
    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({"error": "Failed to get weather data"}), response.status_code

    return jsonify(response.json())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

