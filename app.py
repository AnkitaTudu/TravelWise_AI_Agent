from flask import Flask, request, jsonify
from flask_cors import CORS

from agent import travel_agent

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "TravelWise Backend Running 🚀"
@app.route("/generate-trip", methods=["POST"])
def generate_trip():

    data = request.json
    print(data)

    destination = data.get("destination")
    print(f"Generating trip for destination: {destination}")
    print("Destination received:", data["destination"])
    result = travel_agent(destination)

    return jsonify(result)


@app.route("/test-weather/<city>")
def test_weather(city):
    return jsonify(travel_agent(city))

if __name__ == "__main__":
    app.run(debug=True)