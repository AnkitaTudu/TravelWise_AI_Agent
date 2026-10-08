import { Calendar, MapPin, Sun, Wallet } from "lucide-react";
import { destinations } from "../../data/destinations";
import type { PlanData } from "../AiTripPlanner";


interface BudgetCardProps {
  plan: PlanData;
}


export default function BudgetCard({ plan }: BudgetCardProps) {


  const foundDestination = destinations.find(
    (d) => d.slug.toLowerCase() === plan.destination.toLowerCase()
  );


  const budgetData = foundDestination?.budget || {
    budget: "₹2000-4000/day",
    midRange: "₹4000-7000/day",
    luxury: "₹8000+/day",
  };


  const cards = [

    {
      label: "Estimated Cost",
      value:
        plan.budget.includes("Budget")
          ? budgetData.budget
          : plan.budget.includes("Mid")
          ? budgetData.midRange
          : budgetData.luxury,

      icon: Wallet,
      color: "#D97A52",
    },


    {
      label: "Total Days",
      value: `${plan.days} days`,
      icon: Sun,
      color: "#D8B36A",
    },


    {
      label: "Month",
      value: plan.month,
      icon: Calendar,
      color: "#6D8F72",
    },


    {
      label: "Companions",
      value: plan.companions,
      icon: MapPin,
      color: "#8B7BC8",
    },

  ];



  return (

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

      {cards.map((item) => {

        const Icon = item.icon;


        return (

          <div
            key={item.label}
            className="
            bg-[#FCFBF8] 
            rounded-2xl 
            border 
            border-[#E8E5DF] 
            p-4"
          >


            <div className="flex items-center gap-2 mb-2">

              <Icon
                size={14}
                style={{ color: item.color }}
              />


              <span
                className="
                text-xs 
                font-600 
                text-[#9CA3AF] 
                uppercase 
                tracking-wide"
              >

                {item.label}

              </span>

            </div>



            <p className="text-sm font-700 text-[#1F2937]">

              {item.value}

            </p>


          </div>

        );

      })}

    </div>

  );

}