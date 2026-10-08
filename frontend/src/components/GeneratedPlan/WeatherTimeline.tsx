import { CloudSun, Sun } from "lucide-react";


const weather = [
  {
    day: "Day 1",
    temp: "26°C",
    icon: Sun,
    condition: "Sunny",
  },
  {
    day: "Day 2",
    temp: "24°C",
    icon: CloudSun,
    condition: "Partly cloudy",
  },
  {
    day: "Day 3",
    temp: "27°C",
    icon: Sun,
    condition: "Clear",
  },
];


export default function WeatherTimeline() {


  return (

    <div className="
      bg-[#FCFBF8]
      rounded-2xl
      border
      border-[#E8E5DF]
      p-6
    ">


      <h2 className="
        text-base
        font-700
        text-[#1F2937]
        mb-4
        flex
        items-center
        gap-2
      ">

        <CloudSun
          size={16}
          className="text-[#D8B36A]"
        />

        Weather Timeline

      </h2>



      <div className="
        flex
        gap-3
        overflow-x-auto
        pb-1
      ">


        {weather.map((w) => {


          const Icon = w.icon;


          return (

            <div
              key={w.day}
              className="
              flex-shrink-0
              text-center
              px-5
              py-3
              rounded-xl
              bg-[#F7F6F3]
              border
              border-[#F0EDE8]
              "
            >


              <p className="
                text-xs
                text-[#9CA3AF]
                mb-2
              ">
                {w.day}
              </p>



              <Icon
                size={20}
                className="
                text-[#D8B36A]
                mx-auto
                mb-1
                "
              />



              <p className="
                text-lg
                font-700
                text-[#1F2937]
              ">
                {w.temp}
              </p>



              <p className="
                text-[10px]
                text-[#9CA3AF]
              ">
                {w.condition}
              </p>


            </div>

          );

        })}


      </div>


    </div>

  );

}