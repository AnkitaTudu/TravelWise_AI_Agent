# -----------------------------
# TravelWise AI Agent - MDP Model
# -----------------------------

# States
STATES = [
    "Sunny",
    "Cloudy",
    "Rainy",
    "Storm",
    "Snow"
]

# Possible Actions
ACTIONS = [
    "Travel",
    "Carry Umbrella",
    "Wear Jacket",
    "Delay Trip",
    "Cancel Trip"
]

# Reward Matrix
# Reward = How good an action is in a particular state

REWARD_MATRIX = {

    "Sunny": {
        "Travel": 10,
        "Carry Umbrella": 1,
        "Wear Jacket": -2,
        "Delay Trip": -5,
        "Cancel Trip": -10
    },

    "Cloudy": {
        "Travel": 8,
        "Carry Umbrella": 4,
        "Wear Jacket": 2,
        "Delay Trip": 1,
        "Cancel Trip": -4
    },

    "Rainy": {
        "Travel": -5,
        "Carry Umbrella": 10,
        "Wear Jacket": 6,
        "Delay Trip": 5,
        "Cancel Trip": 2
    },

    "Storm": {
        "Travel": -20,
        "Carry Umbrella": 2,
        "Wear Jacket": 4,
        "Delay Trip": 8,
        "Cancel Trip": 12
    },

    "Snow": {
        "Travel": -8,
        "Carry Umbrella": 2,
        "Wear Jacket": 10,
        "Delay Trip": 5,
        "Cancel Trip": 4
    }
}

# Transition Probability Matrix (Simple Prototype)
TRANSITION_MATRIX = {

    "Sunny": {
        "Sunny": 0.7,
        "Cloudy": 0.2,
        "Rainy": 0.1
    },

    "Cloudy": {
        "Cloudy": 0.5,
        "Sunny": 0.2,
        "Rainy": 0.3
    },

    "Rainy": {
        "Rainy": 0.6,
        "Cloudy": 0.2,
        "Storm": 0.2
    },

    "Storm": {
        "Storm": 0.5,
        "Rainy": 0.3,
        "Cloudy": 0.2
    },

    "Snow": {
        "Snow": 0.7,
        "Cloudy": 0.2,
        "Sunny": 0.1
    }
}


def get_best_action(state):
    """
    Returns the best action for the given state
    based on the highest reward.
    """

    rewards = REWARD_MATRIX[state]

    best_action = max(rewards, key=rewards.get)

    return best_action, rewards[best_action]