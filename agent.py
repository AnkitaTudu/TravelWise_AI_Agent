from weather import get_weather, detect_state
from mdp import get_best_action
from utility import calculate_utility


def travel_agent(city):

    # Step 1: Get weather
    weather = get_weather(city)

    if weather is None:
        return {
            "error": "City not found!"
        }

    # Step 2: Detect current state
    state = detect_state(weather)

    # Step 3: MDP Decision
    action, reward = get_best_action(state)

    # Step 4: Utility Calculation
    utility = calculate_utility(action)

    # Step 5: User-friendly recommendation
    if action == "Travel":
        title = "🟢 Great Day to Travel"
        advice = "Pleasant weather. Perfect for sightseeing and outdoor activities."

    elif action == "Carry Umbrella":
        title = "🟡 Travel with an Umbrella"
        advice = "Rain is expected. Carry an umbrella to stay prepared."

    elif action == "Wear Jacket":
        title = "🟡 Wear a Jacket"
        advice = "The weather is cold. Wear warm clothes before travelling."

    elif action == "Delay Trip":
        title = "🟠 Delay Your Trip"
        advice = "Weather conditions are not ideal. Consider travelling later."

    else:
        title = "🔴 Travel Not Recommended"
        advice = "Severe weather detected. Avoid travelling for your safety."

    return {

        "city": weather["city"],

        "temperature": weather["temperature"],

        "condition": weather["condition"],

        "humidity": weather["humidity"],

        "wind": weather["wind"],

        "state": state,

        "recommended_action": action,

        "title": title,

        "advice": advice,

        "reward": reward,

        "utility": utility

    }