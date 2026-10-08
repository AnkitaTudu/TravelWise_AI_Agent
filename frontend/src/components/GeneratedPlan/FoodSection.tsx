import { Star, Utensils } from "lucide-react";
import { destinations } from "../../data/destinations";


interface FoodSectionProps {
  destination: string;
}



export default function FoodSection({
  destination
}: FoodSectionProps) {


  const foundDestination = destinations.find(
    (d) => d.slug.toLowerCase() === destination.toLowerCase()
  );



  const foodItems = foundDestination?.food || [];



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


        <Utensils
          size={16}
          className="text-[#D97A52]"
        />


        Food Recommendations


      </h2>




      <div className="space-y-3">


        {foodItems.length > 0 ? (

          foodItems.map((food) => (

            <div
              key={food.name}
              className="
              flex
              items-center
              gap-4
              p-3
              rounded-xl
              hover:bg-[#F7F6F3]
              transition-colors
              "
            >


              <img

                src={food.image}

                alt={food.name}

                className="
                w-12
                h-12
                rounded-xl
                object-cover
                flex-shrink-0
                "

              />



              <div className="
                flex-1
                min-w-0
              ">


                <p className="
                  text-sm
                  font-700
                  text-[#1F2937]
                ">

                  {food.name}

                </p>



                <p className="
                  text-xs
                  text-[#9CA3AF]
                ">

                  Local Specialty

                </p>


              </div>





              <div className="
                flex
                items-center
                gap-1
                flex-shrink-0
              ">


                <Star

                  size={11}

                  className="
                  fill-[#D8B36A]
                  text-[#D8B36A]
                  "

                />


                <span className="
                  text-xs
                  font-700
                  text-[#1F2937]
                ">

                  4.8

                </span>


              </div>



            </div>


          ))


        ) : (


          <p className="
            text-sm
            text-[#9CA3AF]
          ">
            Local food recommendations will be available soon.
          </p>


        )}



      </div>



    </div>

  );

}