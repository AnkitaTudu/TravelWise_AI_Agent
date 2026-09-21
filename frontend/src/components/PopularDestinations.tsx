import { useState } from 'react';
import { Star, CloudSun, Calendar, Wallet, Utensils, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
//import { destinations } from "../data/destinations";

const destinations = [
  

  {
    name: 'Goa',
    region: 'West India',
    img: 'https://images.unsplash.com/photo-1624365700883-cc574778eff5?w=600&h=400&fit=crop&auto=format',
    alt: 'Golden sunset over Goa beach with crashing waves',
    rating: 4.8,
    reviews: '12.4k',
    weather: '28°C',
    condition: 'Sunny',
    bestSeason: 'Nov – Feb',
    budget: '₹4,000 – ₹8,000 / day',
    food: ['Prawn Curry', 'Fish Thali', 'Bebinca'],
    desc: 'Sun-drenched beaches, Portuguese heritage, and vibrant nightlife blend into one unforgettable coastal escape.',
    tag: 'Beach & Culture',
  },
  {
    name: 'Kerala',
    region: 'South India',
    img: 'https://images.unsplash.com/photo-1677475455506-1e429162f44f?w=600&h=400&fit=crop&auto=format',
    alt: 'Traditional houseboat on Kerala backwaters surrounded by palms',
    rating: 4.9,
    reviews: '18.2k',
    weather: '26°C',
    condition: 'Cloudy',
    bestSeason: 'Sep – Mar',
    budget: '₹3,500 – ₹7,000 / day',
    food: ['Sadya', 'Appam', 'Karimeen'],
    desc: 'Backwaters, spice gardens, Ayurvedic retreats, and misty hill stations — Kerala is sensory poetry.',
    tag: 'Nature & Wellness',
  },
  {
    name: 'Jaipur',
    region: 'Rajasthan',
    img: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&h=400&fit=crop&auto=format',
    alt: 'Majestic Rajput architecture and palaces of Jaipur in golden light',
    rating: 4.7,
    reviews: '9.8k',
    weather: '22°C',
    condition: 'Clear',
    bestSeason: 'Oct – Mar',
    budget: '₹3,000 – ₹6,000 / day',
    food: ['Dal Baati', 'Ghewar', 'Laal Maas'],
    desc: 'The Pink City dazzles with regal palaces, bustling bazaars, and centuries of Rajput grandeur.',
    tag: 'Heritage & Art',
  },
  {
    name: 'Spiti Valley',
    region: 'Himachal Pradesh',
    img: 'https://images.unsplash.com/photo-1741790973820-da99743d8a74?w=600&h=400&fit=crop&auto=format',
    alt: 'Dramatic mountain landscape of Spiti Valley with ancient monasteries',
    rating: 4.9,
    reviews: '6.1k',
    weather: '8°C',
    condition: 'Crisp',
    bestSeason: 'Jun – Sep',
    budget: '₹2,500 – ₹5,000 / day',
    food: ['Thenthuk', 'Momos', 'Butter Tea'],
    desc: 'A high-altitude cold desert where time moves slowly and the sky feels closer than anywhere else.',
    tag: 'Adventure & Offbeat',
  },
  {
    name: 'Andaman Islands',
    region: 'Bay of Bengal',
    img: 'https://images.unsplash.com/photo-1535262412227-85541e910204?w=600&h=400&fit=crop&auto=format',
    alt: 'Pristine turquoise waters and white sand beach of Andaman Islands',
    rating: 4.8,
    reviews: '8.5k',
    weather: '30°C',
    condition: 'Sunny',
    bestSeason: 'Oct – May',
    budget: '₹5,000 – ₹10,000 / day',
    food: ['Grilled Lobster', 'Fish Curry', 'Coconut Prawn'],
    desc: 'Crystalline waters, vibrant coral reefs, and pristine beaches that rival the Maldives.',
    tag: 'Islands & Diving',
  },
  {
    name: 'Kashmir Valley',
    region: 'Jammu & Kashmir',
    img: 'https://images.unsplash.com/photo-1662887957904-201296e951cb?w=600&h=400&fit=crop&auto=format',
    alt: 'Traditional shikara boats on serene Dal Lake with Himalayan backdrop',
    rating: 4.9,
    reviews: '14.7k',
    weather: '14°C',
    condition: 'Misty',
    bestSeason: 'Apr – Oct',
    budget: '₹4,500 – ₹9,000 / day',
    food: ['Rogan Josh', 'Dum Aloo', 'Wazwan'],
    desc: 'Shikara rides on Dal Lake, saffron fields, and snow-draped peaks — paradise redefined.',
    tag: 'Lakes & Valleys',
  },
];

interface PopularDestinationsProps {
  onNavigatePlanner: () => void;
}

export default function PopularDestinations({ onNavigatePlanner }: PopularDestinationsProps) {

  const [hovered, setHovered] = useState<number | null>(null);

  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 px-6 bg-[#F2F0EC]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16 flex-wrap gap-4">
          <div>
            <p className="text-sm font-600 text-[#6D8F72] tracking-widest uppercase mb-3">
              Curated for you
            </p>
            <h2 className="text-3xl lg:text-5xl font-700 text-[#1F2937] leading-tight">
              Popular destinations
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-600 text-[#D97A52] hover:gap-3 transition-all duration-200">
            View all <ChevronRight size={16} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((d, i) => (
            <div
              key={d.name}
              className="destination-card group rounded-2xl overflow-hidden bg-[#FCFBF8] border border-[#E8E5DF] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-400 cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
  if (d.name === "Goa") {
    navigate("/destination/goa");
  } else {
    onNavigatePlanner();
  }
}}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#E8E5DF]">
                <img
                  src={d.img}
                  alt={d.alt}
                  className="destination-img w-full h-full object-cover transition-transform duration-700 ease-out"
                />
                <div className="destination-overlay absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300" />

                {/* Tag badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-600 bg-white/90 backdrop-blur-sm text-[#1F2937] tracking-wide">
                    {d.tag}
                  </span>
                </div>

                {/* Weather chip */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                  <CloudSun size={11} className="text-white" />
                  <span className="text-[10px] font-600 text-white">{d.weather}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-700 text-[#1F2937]">{d.name}</h3>
                    <p className="text-xs text-[#9CA3AF] font-400">{d.region}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star size={13} className="fill-[#D8B36A] text-[#D8B36A]" />
                    <span className="text-sm font-600 text-[#1F2937]">{d.rating}</span>
                    <span className="text-xs text-[#9CA3AF]">({d.reviews})</span>
                  </div>
                </div>

                <p className="text-sm text-[#6B7280] leading-relaxed mb-4 line-clamp-2 font-400">
                  {d.desc}
                </p>

                {/* Info row */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#9CA3AF] mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{d.bestSeason}</span>
                  </div>
                  <span className="text-[#E8E5DF]">·</span>
                  <div className="flex items-center gap-1">
                    <Wallet size={11} />
                    <span className="font-500 text-[#6B7280]">{d.budget}</span>
                  </div>
                </div>

                {/* Food preview */}
                <div className="flex items-center gap-2 pt-3.5 border-t border-[#F0EDE8]">
                  <Utensils size={11} className="text-[#D97A52] flex-shrink-0" />
                  <div className="flex gap-1.5 flex-wrap">
                    {d.food.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-500 text-[#6B7280] px-2 py-0.5 rounded-full bg-[#F7F6F3]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
