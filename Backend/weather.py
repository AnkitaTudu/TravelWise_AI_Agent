import requests
from config import OPENWEATHER_API_KEY

BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
AQI_URL = "https://api.openweathermap.org/data/2.5/air_pollution"
WEATHER_LOCATIONS = {
    "kashmir valley": "Srinagar",
    "spiti valley": "Kaza",
    "andaman islands": "Port Blair"
}

def get_weather(city):
    """
    Fetch current weather data from OpenWeather API
    """

    city = WEATHER_LOCATIONS.get(city.lower(), city)

    params = {
        "q": city,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric"
    }

    try:
        response = requests.get(BASE_URL, params=params)

        if response.status_code != 200:
            print("API Error:", response.json())
            return None

        data = response.json()

        weather_data = {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "feels_like": data["main"]["feels_like"],
            "humidity": data["main"]["humidity"],
            "wind": data["wind"]["speed"],
            "condition": data["weather"][0]["main"],
            "latitude": data["coord"]["lat"],
            "longitude": data["coord"]["lon"],
        }

        return weather_data

    except Exception as e:
        print("Error:", e)
        return None


def detect_state(weather):
    """
    Convert weather condition into MDP state
    """

    condition = weather["condition"].lower()
    temp = weather["temperature"]

    if "thunderstorm" in condition:
        return "Storm"

    elif "snow" in condition:
        return "Snow"

    elif "rain" in condition or "drizzle" in condition:
        return "Rainy"

    elif "cloud" in condition:
        return "Cloudy"

    elif temp >= 25:
        return "Sunny"

    else:
        return "Cloudy"


def get_air_quality(lat, lon):
    """
    Fetch real-time AQI data from OpenWeather Air Pollution API
    """

    params = {
        "lat": lat,
        "lon": lon,
        "appid": OPENWEATHER_API_KEY
    }

    try:
        response = requests.get(AQI_URL, params=params)

        if response.status_code != 200:
            print("AQI API Error:", response.json())
            return None

        data = response.json()

        aqi_value = data["list"][0]["main"]["aqi"]

        aqi_status = {
            1: "Good",
            2: "Fair",
            3: "Moderate",
            4: "Poor",
            5: "Very Poor"
        }

        return {
            "value": aqi_value,
            "status": aqi_status.get(aqi_value, "Unknown")
        }

    except Exception as e:
        print("AQI Error:", e)
        return None