import { Sparkles } from "lucide-react";


interface AIRecommendationProps {
  recommendation?: {
    title: string;
    advice: string;
    recommended_action: string;
    utility?: number;
  };
}


export default function AIRecommendation({
  recommendation
}: AIRecommendationProps) {


  if (!recommendation) {
    return null;
  }


  return (

    <div className="
      bg-[#FCFBF8]
      border
      border-[#E8E5DF]
      rounded-2xl
      p-6
    ">


      <div className="flex items-center gap-2 mb-3">

        <Sparkles
          size={18}
          className="text-[#D8B36A]"
        />

        <h2 className="
          text-base
          font-700
          text-[#1F2937]
        ">
          AI Travel Recommendation
        </h2>

      </div>



      <h3 className="
        text-xl
        font-800
        text-[#1F2937]
        mb-2
      ">
        {recommendation.title}
      </h3>



      <p className="
        text-sm
        text-[#6B7280]
        leading-relaxed
      ">
        {recommendation.advice}
      </p>



      {recommendation.utility && (

        <div className="mt-4">

          <span className="
            text-xs
            font-600
            text-[#6D8F72]
          ">
            Travel Utility Score: {recommendation.utility}
          </span>

        </div>

      )}


    </div>

  );
}