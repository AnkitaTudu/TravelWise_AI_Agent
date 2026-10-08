from flask import Flask, request, jsonify
from flask_cors import CORS

from agent import travel_agent
from weather import get_weather, get_air_quality
from crowd import calculate_crowd


app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "TravelWise Backend Running 🚀"



# ================= AI TRIP GENERATION =================

@app.route("/generate-trip", methods=["POST"])
def generate_trip():

    data = request.json

    print(data)

    destination = data.get("destination")

    print(f"Generating trip for destination: {destination}")

    result = travel_agent(destination)

    return jsonify(result)




# ================= WEATHER API =================

@app.route("/weather/<city>", methods=["GET"])
def get_weather_data(city):

    result = travel_agent(city)

    return jsonify(result)




# ================= DESTINATION LIVE INSIGHTS =================
@app.route("/destination-insights/<city>", methods=["GET"])
def destination_insights(city):

    weather = get_weather(city)
    month = request.args.get("month", "January")

    if weather is None:
        return jsonify({
            "error": "City not found"
        })


    aqi = get_air_quality(
        weather["latitude"],
        weather["longitude"]
    )
    crowd = calculate_crowd(city, month)


    return jsonify({

        "temperature": weather["temperature"],

        "condition": weather["condition"],

        "aqi": aqi,
        "crowd": crowd,

    })





# ================= TEST ROUTE =================

@app.route("/test-weather/<city>")
def test_weather(city):

    return jsonify(
        travel_agent(city)
    )




if __name__ == "__main__":

    print(app.url_map)

    app.run(debug=True)