# ---------------------------------------
# TravelWise AI Agent - Utility Function
# ---------------------------------------

# Utility Scores for each action
# Scale: 1 (Low) to 10 (High)

UTILITY_MATRIX = {

    "Travel": {
        "Safety": 5,
        "Comfort": 8,
        "Cost": 7,
        "Convenience": 9
    },

    "Carry Umbrella": {
        "Safety": 10,
        "Comfort": 8,
        "Cost": 9,
        "Convenience": 8
    },

    "Wear Jacket": {
        "Safety": 9,
        "Comfort": 9,
        "Cost": 8,
        "Convenience": 8
    },

    "Delay Trip": {
        "Safety": 8,
        "Comfort": 6,
        "Cost": 5,
        "Convenience": 4
    },

    "Cancel Trip": {
        "Safety": 10,
        "Comfort": 4,
        "Cost": 2,
        "Convenience": 2
    }

}


def calculate_utility(action):

    values = UTILITY_MATRIX[action]

    utility_score = (
        0.4 * values["Safety"] +
        0.3 * values["Comfort"] +
        0.2 * values["Cost"] +
        0.1 * values["Convenience"]
    )

    return round(utility_score, 2)