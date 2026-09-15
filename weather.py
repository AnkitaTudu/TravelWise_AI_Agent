import requests
from config import OPENWEATHER_API_KEY

BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


def get_weather(city):
    """
    Fetch current weather data from OpenWeather API
    """

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
            "humidity": data["main"]["humidity"],
            "wind": data["wind"]["speed"],
            "condition": data["weather"][0]["main"]
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