import { ArrowLeft, Download, Share2, Sparkles } from "lucide-react";
import { destinations } from "../../data/destinations";
import type { PlanData } from "../AiTripPlanner";


interface HeroProps {
  plan: PlanData;
  onBack: () => void;
}


export default function Hero({ plan, onBack }: HeroProps) {

  const foundDestination = destinations.find(
    (d) => d.slug.toLowerCase() === plan.destination.toLowerCase()
  );


  const destinationData = foundDestination || {
    name: plan.destination,
    description: `${plan.destination} is a beautiful destination to explore.`,
    heroImage: "/default-image.jpg",
  };


  return (
    <div className="relative h-72 lg:h-96 overflow-hidden bg-[#1a1a16]">

      <img
        src={destinationData.heroImage}
        alt={destinationData.name}
        className="w-full h-full object-cover opacity-70"
      />


      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />


      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">

        <div className="max-w-4xl mx-auto w-full">


          <button
            onClick={onBack}
            className="
            flex items-center gap-2 
            text-white/70 
            hover:text-white 
            text-xs 
            font-500 
            mb-3 
            transition-colors"
          >
            <ArrowLeft size={13} />
            Back to planner
          </button>


          <div className="flex items-center gap-2 mb-1">

            <Sparkles
              size={14}
              className="text-[#D8B36A] fill-[#D8B36A]"
            />

            <span className="text-xs text-[#D8B36A] font-600 tracking-wide">
              AI Generated Itinerary
            </span>

          </div>



          <h1 className="text-3xl lg:text-4xl font-800 text-white">

            {destinationData.name} · {plan.days} Days

          </h1>


          <p className="text-white/60 text-sm mt-1">

            {plan.companions} · {plan.month} · {plan.budget}/day

          </p>


          <p className="text-white/75 text-sm mt-3 max-w-2xl">

            {destinationData.description}

          </p>


        </div>

      </div>



      <div className="absolute top-4 right-4 flex gap-2">


        <button
          className="
          flex items-center gap-1.5 
          px-3 py-1.5 
          rounded-lg 
          bg-white/10 
          backdrop-blur-sm 
          text-white 
          text-xs 
          font-600 
          border 
          border-white/20 
          hover:bg-white/20 
          transition-all"
        >

          <Share2 size={12} />
          Share

        </button>



        <button
          className="
          flex items-center gap-1.5 
          px-3 py-1.5 
          rounded-lg 
          bg-white/10 
          backdrop-blur-sm 
          text-white 
          text-xs 
          font-600 
          border 
          border-white/20 
          hover:bg-white/20 
          transition-all"
        >

          <Download size={12} />
          Save PDF

        </button>


      </div>


    </div>
  );
}