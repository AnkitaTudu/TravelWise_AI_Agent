import { Backpack, Phone, Sparkles } from "lucide-react";
import { destinations } from "../../data/destinations";


interface EmergencySectionProps {
  destination: string;
}



export default function EmergencySection({
  destination
}: EmergencySectionProps) {


  const foundDestination = destinations.find(
    (d) => d.slug.toLowerCase() === destination.toLowerCase()
  );


  const destinationData = foundDestination || {

    packing: [
      "Comfortable clothes",
      "Travel documents",
      "Power bank",
      "Water bottle",
      "Basic medicines",
    ],

    emergency: {
      police: "112",
      ambulance: "108",
      coastGuard: "1554",
    },

  };



  const emergencyContacts = [

    {
      label: "Police",
      number: destinationData.emergency.police,
    },

    {
      label: "Ambulance",
      number: destinationData.emergency.ambulance,
    },

    {
      label: "Coast Guard",
      number: destinationData.emergency.coastGuard,
    },

  ];



  return (

    <>

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-4
      ">


        {/* Packing */}

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

            <Backpack
              size={16}
              className="text-[#6D8F72]"
            />

            Packing Checklist

          </h2>



          <div className="space-y-2">


            {destinationData.packing.map((item) => (

              <label
                key={item}
                className="
                flex
                items-start
                gap-3
                cursor-pointer
                group
                "
              >

                <input
                  type="checkbox"
                  className="
                  mt-0.5
                  accent-[#6D8F72]
                  flex-shrink-0
                  "
                />


                <span className="
                  text-sm
                  text-[#6B7280]
                  group-hover:text-[#1F2937]
                  transition-colors
                ">
                  {item}
                </span>


              </label>

            ))}


          </div>


        </div>





        {/* Emergency */}

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


            <Phone
              size={16}
              className="text-[#D97A52]"
            />


            Emergency Contacts


          </h2>



          <div className="space-y-3">


            {emergencyContacts.map((contact)=>(

              <div
                key={contact.label}
                className="
                flex
                items-center
                justify-between
                p-3
                rounded-xl
                bg-[#F7F6F3]
                "
              >

                <span className="text-sm text-[#6B7280]">
                  {contact.label}
                </span>


                <a
                  href={`tel:${contact.number}`}
                  className="
                  text-sm
                  font-700
                  text-[#D97A52]
                  hover:text-[#C06840]
                  transition-colors
                  "
                >
                  {contact.number}
                </a>


              </div>


            ))}


          </div>





          {/* Advisory */}

          <div className="
            mt-4
            p-3
            rounded-xl
            bg-[#F0F5F1]
            border
            border-[#B8D4BB]
          ">

            <p className="
              text-xs
              font-700
              text-[#4E6B53]
              mb-1
            ">
              Travel Advisory
            </p>


            <p className="
              text-xs
              text-[#6D8F72]
              leading-relaxed
            ">
              Conditions are favourable for travel. Carry a valid ID,
              stay hydrated, and respect local customs.
            </p>


          </div>


        </div>


      </div>





      {/* CTA */}

      <div className="
        text-center
        py-6
      ">


        <p className="
          text-sm
          text-[#9CA3AF]
          mb-4
        ">
          Happy with your plan? Start planning your booking.
        </p>



        <button className="
          inline-flex
          items-center
          gap-2
          px-8
          py-4
          bg-[#D97A52]
          text-white
          rounded-2xl
          font-700
          text-sm
          hover:bg-[#C06840]
          hover:-translate-y-0.5
          hover:shadow-lg
          transition-all
        ">

          <Sparkles size={15} />

          Book This Itinerary

        </button>


      </div>


    </>

  );

}