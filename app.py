import gradio as gr
from agent import travel_agent


def analyze(city):

    result = travel_agent(city)

    if "error" in result:
        return (
            "City not found!",
            "-",
            "-",
            "-",
            "-",
            "-",
            "Please enter a valid city name."
        )

    return (
        result["city"],
        f"{result['temperature']} °C",
        result["condition"],
        f"{result['humidity']} %",
        f"{result['wind']} m/s",
        result["title"],
        result["advice"]
    )


demo = gr.Interface(
    fn=analyze,

    inputs=gr.Textbox(
        label="📍 Destination",
        placeholder="Enter a city name..."
    ),

    outputs=[
        gr.Textbox(label="🏙 City"),
        gr.Textbox(label="🌡 Temperature"),
        gr.Textbox(label="☁ Weather"),
        gr.Textbox(label="💧 Humidity"),
        gr.Textbox(label="🌬 Wind Speed"),
        gr.Textbox(label="✈ Travel Recommendation"),
        gr.Textbox(label="💡 Advice")
    ],

    title="🌤 TravelWise",
    description="Smart weather-based travel assistant powered by real-time weather data.",

    theme=gr.themes.Soft(
        primary_hue="blue",
        secondary_hue="sky",
        neutral_hue="slate"
    )
)

demo.launch(inbrowser=True)