import type { PlanData } from "./AiTripPlanner";

import Hero from "./GeneratedPlan/Hero";
import BudgetCard from "./GeneratedPlan/BudgetCard";
import WeatherTimeline from "./GeneratedPlan/WeatherTimeline";
import TravelInsights from "./GeneratedPlan/TravelInsights";
import EmergencySection from "./GeneratedPlan/EmergencySection";
import FoodSection from "./GeneratedPlan/FoodSection";
import ItinerarySection from "./GeneratedPlan/ItinerarySection";


interface GeneratedPlanProps {
  plan: PlanData;
  onBack: () => void;
}



const days = [
  {
    day: 1,
    title: "Arrival & First Impressions",

    morning: {
      time: "9:00 AM",
      activity: "Check into your accommodation and freshen up",
      detail:
        "Head out and explore nearby places to get familiar with the destination.",
      type: "rest",
    },

    afternoon: {
      time: "1:00 PM",
      activity: "Explore local market and surroundings",
      detail:
        "Discover local culture, shops and famous nearby locations.",
      type: "explore",
    },

    evening: {
      time: "6:00 PM",
      activity: "Sunset viewpoint and dinner",
      detail:
        "Enjoy scenic views and try local cuisine.",
      type: "dine",
    },
  },


  {
    day: 2,
    title: "Culture & Adventure",

    morning: {
      time: "7:30 AM",
      activity: "Nature exploration",
      detail:
        "Visit beautiful natural attractions and capture memories.",
      type: "adventure",
    },

    afternoon: {
      time: "12:00 PM",
      activity: "Local food experience",
      detail:
        "Taste regional dishes and explore local lifestyle.",
      type: "dine",
    },

    evening: {
      time: "5:30 PM",
      activity: "Cultural experience",
      detail:
        "Experience local traditions and activities.",
      type: "culture",
    },
  },


  {
    day: 3,
    title: "Hidden Gems",

    morning: {
      time: "6:00 AM",
      activity: "Adventure activity",
      detail:
        "Explore hidden spots and scenic locations.",
      type: "adventure",
    },

    afternoon: {
      time: "2:00 PM",
      activity: "Relaxation time",
      detail:
        "Enjoy peaceful surroundings and local experiences.",
      type: "rest",
    },

    evening: {
      time: "7:00 PM",
      activity: "Farewell dinner",
      detail:
        "End your trip with a memorable dining experience.",
      type: "dine",
    },
  },

];



export default function GeneratedPlan({
  plan,
  onBack,
}: GeneratedPlanProps) {


  return (

    <div className="min-h-screen bg-[#F7F6F3]">


      {/* Hero */}

      <Hero
        plan={plan}
        onBack={onBack}
      />



      <div
        className="
        max-w-4xl
        mx-auto
        px-6
        py-10
        space-y-8
        "
      >


        {/* Budget */}

        <BudgetCard
          plan={plan}
        />



        {/* Weather */}

        <WeatherTimeline />



        {/* AI Insights */}

        <TravelInsights
          destination={plan.destination}
        />



        {/* AI Itinerary */}

        <ItinerarySection
          days={days.slice(
            0,
            Math.min(plan.days,3)
          )}
        />



        {/* Food */}

        <FoodSection
          destination={plan.destination}
        />



        {/* Emergency */}

        <EmergencySection
          destination={plan.destination}
        />



      </div>


    </div>

  );

}