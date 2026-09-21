import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations";
import TravelSafetyCard from "../components/TravelSafetyCard";

export default function Destination() {
  const { city } = useParams();

  const destination = destinations.find(
    (d) => d.slug.toLowerCase() === city?.toLowerCase()
  );

  if (!destination) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Destination not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3]">

      {/* ================= HERO ================= */}

      <section className="relative h-[500px] overflow-hidden">

        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
       

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-12 left-10 lg:left-20 text-white max-w-3xl">
          <div className="inline-flex items-center ...">
Powered by TravelWise AI Engine
</div>

          

          <h1 className="text-4xl lg:text-6xl font-bold mt-3">
            {destination.name}
          </h1>
          <p className="mt-3 text-lg text-white/80 italic">
  Curated journeys, powered by TravelWise AI.
</p>


          <p className="mt-5 text-lg leading-7 opacity-95">
            {destination.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">

  <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 border border-white/20">
    <span>📍</span>
    <span className="text-sm font-medium">
      {destination.state}
    </span>
  </div>

  <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 border border-white/20">
    <span>🏖️</span>
    <span className="text-sm font-medium">
      {destination.type}
    </span>
  </div>

  <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 border border-white/20">
    <span>🗓️</span>
    <span className="text-sm font-medium">
      {destination.duration}
    </span>
  </div>

  <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 border border-white/20">
    <span>🌤️</span>
    <span className="text-sm font-medium">
      Best: {destination.bestTime}
    </span>
  </div>

</div>


        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

        

  {/* ================= LEFT ================= */}

  <div className="lg:col-span-2 space-y-6">

    {/* About */}

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <h2 className="text-3xl font-bold mb-5">
        About {destination.name}
      </h2>

      <p className="text-gray-600 leading-8">
        {destination.description}
      </p>

    </div>

    {/* Local Famous Food */}

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <h2 className="text-3xl font-bold mb-6">
        Local Famous Food
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {destination.food.map((food) => (

  <div
    key={food.name}
    className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition duration-300"
  >

    <img
      src={food.image}
      alt={food.name}
      className="w-full h-40 object-cover"
    />

    <div className="p-4">

      <h3 className="font-semibold text-lg">
        {food.name}
      </h3>

    </div>

  </div>

))}

      </div>

    </div>

    {/* Top Attractions */}

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <h2 className="text-3xl font-bold mb-6">
        Top Attractions
      </h2>

      <div className="space-y-4">

  {destination.attractions.map((place) => (

    <div
      key={place}
      className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition"
    >

      <div className="w-12 h-12 rounded-xl bg-[#E8F3EE] flex items-center justify-center text-2xl">
        📍
      </div>

      <div>
        <h3 className="font-semibold text-lg text-[#1F2937]">
          {place}
        </h3>

        <p className="text-sm text-gray-500">
          Popular Tourist Attraction
        </p>
      </div>

    </div>

  ))}

</div>

    </div>

    {/* Where To Stay */}

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-3xl font-bold mb-6">
        Where to Stay
      </h2>

      <div className="space-y-5">

        {destination.hotels.map((hotel) => (

          <div
            key={hotel.name}
            className="flex justify-between items-center border rounded-2xl p-4 hover:shadow-lg transition"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {hotel.name}
              </h3>

              <span className="text-sm text-gray-500">
                {hotel.type}
              </span>

            </div>

            <div className="text-right">

              <p className="font-bold text-orange-500">
                {hotel.price}
              </p>

              <p className="text-sm">
                ⭐ {hotel.rating}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* Photo Gallery */}

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-3xl font-bold mb-6">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {destination.gallery.map((image, index) => (

  <img
    key={index}
    src={image}
    alt={`${destination.name} ${index + 1}`}
    className="rounded-2xl h-56 w-full object-cover hover:scale-105 transition duration-300"
  />

))}

      </div>

    </div>

    {/* Location Map */}

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-3xl font-bold mb-6">
        Location Map
      </h2>

      <div className="h-80 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">

        <div className="text-center">

          <p className="text-5xl mb-3">
            📍
          </p>

          <h3 className="font-semibold text-lg">
            Interactive Map
          </h3>

          <p className="text-gray-500 mt-2">
            Google Maps integration coming soon.
          </p>

        </div>

      </div>

    </div>

    {/* Travel Advisory */}

    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm">

  <div className="flex items-start gap-4">

    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
      <span className="text-amber-700 text-xl font-bold">i</span>
    </div>

    <div>

      <h3 className="text-xl font-semibold text-amber-900">
        Travel Advisory
      </h3>

      <p className="mt-2 text-gray-700 leading-7">
        Travel safely. Watch your belongings in crowded areas,
        follow local guidelines, and avoid isolated places at night.
        During monsoon season, some beaches and water activities may
        remain closed.
      </p>

    </div>

  </div>

</div>

  </div>

  {/* ================= RIGHT ================= */}

       <div className="space-y-6">

  {/* Weather */}

  <div className="bg-[#1F2937] text-white rounded-2xl p-6">

    <p className="uppercase tracking-widest text-xs text-gray-400">
      Current Weather
    </p>

    <h2 className="text-5xl font-bold mt-5">
      31°
    </h2>

    <p className="text-gray-300 mt-2">
      Sunny
    </p>

    <div className="grid grid-cols-3 gap-4 mt-10">

      <div className="text-center">
        <h3 className="font-bold text-xl">78%</h3>
        <p className="text-xs text-gray-400">
          Humidity
        </p>
      </div>

      <div className="text-center">
        <h3 className="font-bold text-xl">
          18 km/h
        </h3>
        <p className="text-xs text-gray-400">
          Wind
        </p>
      </div>

      <div className="text-center">
        <h3 className="font-bold text-xl">
          29°
        </h3>
        <p className="text-xs text-gray-400">
          Feels Like
        </p>
      </div>

    </div>

  </div>

  {/* Best Time */}

  <div className="bg-white rounded-2xl p-6 shadow-sm">

    <h3 className="text-2xl font-bold mb-4">
      Best Time
    </h3>

    <p>{destination.bestTime}</p>

  </div>

  {/* Estimated Budget */}

  <div className="bg-white rounded-2xl p-6 shadow-sm">

    <h3 className="text-2xl font-bold mb-5">
      Estimated Budget
    </h3>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>Budget</span>
        <span>{destination.budget.budget}</span>
      </div>

      <div className="flex justify-between">
        <span>Mid Range</span>
        <span>{destination.budget.midRange}</span>
      </div>

      <div className="flex justify-between">
        <span>Luxury</span>
        <span>{destination.budget.luxury}</span>
      </div>

    </div>

  </div>

  {/* Travel Safety */}

  <TravelSafetyCard />

  {/* Packing Essentials */}

  <div className="bg-white rounded-2xl shadow-sm p-6">

    <h2 className="text-3xl font-bold mb-6">
      Packing Essentials
    </h2>

    <div className="space-y-4">

      {destination.packing.map((item) => (

        <label
          key={item}
          className="flex items-center gap-3 border-b pb-3"
        >

          <input type="checkbox" />

          <span>{item}</span>

        </label>

      ))}

    </div>

  </div>

  {/* Emergency Contacts */}

  <div className="bg-white rounded-2xl shadow-sm p-6">

    <h2 className="text-3xl font-bold mb-6">
      Emergency Contacts
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>Police</span>
        <span className="font-bold">
          {destination.emergency.police}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Ambulance</span>
        <span className="font-bold">
          {destination.emergency.ambulance}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Coast Guard</span>
        <span className="font-bold">
          {destination.emergency.coastGuard}
        </span>
      </div>

    </div>

  </div>

</div>

</div>

</div>
  );
}