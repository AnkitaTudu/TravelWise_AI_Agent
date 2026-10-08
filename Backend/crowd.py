def calculate_crowd(destination, month):

    destination = destination.lower()
    month = month.lower()

    # If range comes from curated page
    month = month.split("to")[0].strip()

    peak_seasons = {

        "goa": [
            "november",
            "december",
            "january",
            "february"
        ],

        "jaipur": [
            "october",
            "november",
            "december",
            "january"
        ],

        "kerala": [
            "november",
            "december",
            "january",
            "february"
        ],

        "manali": [
            "december",
            "january",
            "february"
        ],

        "ladakh": [
            "june",
            "july",
            "august"
        ]

    }


    if destination in peak_seasons:

        if month in peak_seasons[destination]:

            return {
                "level": "High",
                "reason": "Peak tourist season"
            }


    return {
        "level": "Moderate",
        "reason": "Balanced tourist activity"
    }