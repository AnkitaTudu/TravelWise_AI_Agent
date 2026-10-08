import { destinations } from "../../data/destinations";


interface TravelInsightsProps {
  destination: string;
  liveCrowd?: {
    level: string;
    reason: string;
  } | null;
  liveAQI?: {
    value: number;
    status: string;
  } | null;
}


 export default function TravelInsights({
  destination,
  liveCrowd,
  liveAQI
}: TravelInsightsProps){


  const foundDestination = destinations.find(
    (d) => d.slug.toLowerCase() === destination.toLowerCase()
  );


  const insights = foundDestination || {

    airQuality: {
      value: "N/A",
      status: "Unknown",
    },

    crowd: {
      level: "Unknown",
      bestTime: "Check local conditions",
    },

    safety: {
      score: "N/A",
      status: "Unknown",
    },

  };



  return (

    <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-4
      mt-6
    ">


      {/* AQI */}

      <div className="
        bg-[#FCFBF8]
        border
        border-[#E8E5DF]
        rounded-2xl
        p-5
      ">

        <div className="flex items-center gap-2 mb-3">

          <span className="text-xl">
            🌿
          </span>

          <h3 className="font-700 text-[#1F2937]">
            Air Quality
          </h3>

        </div>


        <p className="
          text-3xl
          font-800
          text-[#2E7D32]
        ">
          {liveAQI?.value ?? insights.airQuality.value}
        </p>


        <p className="
          text-sm
          font-600
          text-[#2E7D32]
        ">
          {liveAQI?.status ?? insights.airQuality.status}
        </p>


        <p className="
          text-xs
          text-[#9CA3AF]
          mt-2
        ">
          Outdoor activities are safe.
        </p>


      </div>




      {/* Crowd */}

      <div className="
        bg-[#FCFBF8]
        border
        border-[#E8E5DF]
        rounded-2xl
        p-5
      ">


        <div className="flex items-center gap-2 mb-3">

          <span className="text-xl">
            👥
          </span>

          <h3 className="font-700 text-[#1F2937]">
            Crowd Level
          </h3>

        </div>



        <p className="
          text-3xl
          font-800
          text-[#D97A52]
        ">
          {liveCrowd?.level ?? insights.crowd.level}
        </p>



        <p className="
          text-sm
          text-[#6B7280]
        ">
          {liveCrowd?.reason ?? `Best time: ${insights.crowd.bestTime}`}
        </p>


      </div>





      {/* Safety */}

      <div className="
        bg-[#FCFBF8]
        border
        border-[#E8E5DF]
        rounded-2xl
        p-5
      ">


        <div className="flex items-center gap-2 mb-3">

          <span className="text-xl">
            🛡
          </span>


          <h3 className="font-700 text-[#1F2937]">
            Safety Score
          </h3>


        </div>



        <p className="
          text-3xl
          font-800
          text-[#2E7D32]
        ">
          {insights.safety.score}/10
        </p>



        <p className="
          text-sm
          font-600
          text-[#2E7D32]
        ">
          {insights.safety.status}
        </p>


      </div>



    </div>

  );

}