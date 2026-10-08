import {
  ChevronDown,
  ChevronUp,
  Coffee,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";


interface Slot {
  time: string;
  activity: string;
  detail: string;
  type: string;
}


interface DayPlan {
  day: number;
  title: string;
  morning: Slot;
  afternoon: Slot;
  evening: Slot;
}



interface ItinerarySectionProps {
  days?: DayPlan[];
}



const slotTypeConfig = {

  rest: {
    color: "#6D8F72",
    bg: "#F0F5F1",
    label: "Rest",
  },

  explore: {
    color: "#D8B36A",
    bg: "#FDF8EE",
    label: "Explore",
  },

  dine: {
    color: "#D97A52",
    bg: "#FDF4EF",
    label: "Dine",
  },

  adventure: {
    color: "#8B7BC8",
    bg: "#F3F1FB",
    label: "Adventure",
  },

  culture: {
    color: "#3B82F6",
    bg: "#EFF6FF",
    label: "Culture",
  },

};



export default function ItinerarySection({
  days = [],
}: ItinerarySectionProps) {


  const [expandedDay, setExpandedDay] = useState<number | null>(0);



  if (!days.length) {

    return (

      <div className="
        bg-[#FCFBF8]
        rounded-2xl
        border
        border-[#E8E5DF]
        p-6
      ">

        <h2 className="
          text-xl
          font-700
          text-[#1F2937]
          mb-3
        ">
          Day-by-Day Itinerary
        </h2>


        <p className="
          text-sm
          text-[#9CA3AF]
        ">
          Itinerary will be generated soon.
        </p>

      </div>

    );

  }



  return (

    <div>


      <h2 className="
        text-xl
        font-700
        text-[#1F2937]
        mb-5
      ">
        Day-by-Day Itinerary
      </h2>



      {days.map((d, i) => (

        <div
          key={d.day}
          className="
          bg-[#FCFBF8]
          rounded-2xl
          border
          border-[#E8E5DF]
          overflow-hidden
          mb-3
          "
        >


          <button

            onClick={() =>
              setExpandedDay(
                expandedDay === i ? null : i
              )
            }

            className="
            w-full
            flex
            items-center
            justify-between
            p-5
            text-left
            hover:bg-[#F7F6F3]
            transition-colors
            "

          >


            <div className="
              flex
              items-center
              gap-3
            ">


              <div className="
                w-9
                h-9
                rounded-xl
                bg-[#FDF4EF]
                flex
                items-center
                justify-center
              ">

                <span className="
                  text-sm
                  font-800
                  text-[#D97A52]
                ">
                  {d.day}
                </span>

              </div>



              <div>

                <p className="
                  text-sm
                  font-700
                  text-[#1F2937]
                ">
                  Day {d.day}
                </p>


                <p className="
                  text-xs
                  text-[#9CA3AF]
                ">
                  {d.title}
                </p>

              </div>


            </div>



            {expandedDay === i
              ?
              <ChevronUp size={16} className="text-[#9CA3AF}" />
              :
              <ChevronDown size={16} className="text-[#9CA3AF}" />
            }


          </button>





          {expandedDay === i && (

            <div className="
              px-5
              pb-5
              space-y-1
            ">



              {[
                {
                  slot: d.morning,
                  Icon: Coffee,
                  label: "Morning",
                },

                {
                  slot: d.afternoon,
                  Icon: Sun,
                  label: "Afternoon",
                },

                {
                  slot: d.evening,
                  Icon: Moon,
                  label: "Evening",
                },

              ].map(({slot, Icon, label}) => {


                const cfg =
                  slotTypeConfig[
                    slot.type as keyof typeof slotTypeConfig
                  ]
                  ??
                  slotTypeConfig.explore;



                return (

                  <div
                    key={label}
                    className="
                    flex
                    gap-3
                    p-3
                    rounded-xl
                    bg-[#F7F6F3]
                    "
                  >


                    <div className="
                      flex-shrink-0
                      flex
                      flex-col
                      items-center
                      gap-1
                    ">


                      <div
                        className="
                        w-7
                        h-7
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        "
                        style={{
                          backgroundColor: cfg.bg
                        }}
                      >

                        <Icon
                          size={13}
                          style={{
                            color: cfg.color
                          }}
                        />

                      </div>


                    </div>





                    <div className="
                      flex-1
                      min-w-0
                    ">


                      <div className="
                        flex
                        items-center
                        gap-2
                        mb-1
                      ">

                        <span className="
                          text-[10px]
                          font-600
                          text-[#9CA3AF]
                        ">
                          {slot.time}
                        </span>


                        <span
                          className="
                          text-[9px]
                          font-700
                          px-1.5
                          py-0.5
                          rounded-full
                          uppercase
                          "
                          style={{
                            color: cfg.color,
                            backgroundColor: cfg.bg
                          }}
                        >

                          {cfg.label}

                        </span>


                      </div>



                      <p className="
                        text-sm
                        font-600
                        text-[#1F2937]
                        mb-0.5
                      ">
                        {slot.activity}
                      </p>



                      <p className="
                        text-xs
                        text-[#6B7280]
                        leading-relaxed
                      ">
                        {slot.detail}
                      </p>


                    </div>


                  </div>

                );

              })}



            </div>

          )}


        </div>

      ))}


    </div>

  );

}