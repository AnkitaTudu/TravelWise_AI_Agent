import HeroCarousel from "../components/HeroCarousel";
import SearchBar from "../components/SearchBar";
import FeatureCards from "../components/FeatureCards";
import PopularDestinations from "../components/PopularDestinations";
import Footer from "../components/Footer";

type Props = {
  onNavigatePlanner: () => void;
};

export default function Home({ onNavigatePlanner }: Props) {
  return (
    <main className="animate-fade-in">
      <HeroCarousel onNavigatePlanner={onNavigatePlanner} />
      <SearchBar onNavigatePlanner={onNavigatePlanner} />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#E8E5DF]" />
      </div>

      <FeatureCards />

    
  

      <PopularDestinations onNavigatePlanner={onNavigatePlanner} />

      {/* AI CTA */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF4EF] border border-[#F0C4AE] mb-6">
            <span className="text-xs font-600 text-[#D97A52] tracking-wide">
              NEW · AI-Powered Planning
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-800 text-[#1F2937] leading-tight mb-5">
            Your perfect India trip,
            <br />
            <span className="text-gradient-warm">
              planned in 60 seconds.
            </span>
          </h2>

          <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-xl mx-auto font-400">
            Tell our AI where you want to go, your budget, and your style.
            Get a complete day-by-day itinerary, packing list, food guide,
            and more — instantly.
          </p>

          <button
            onClick={onNavigatePlanner}
            className="inline-flex items-center gap-2 px-9 py-4 bg-[#1F2937] text-white rounded-2xl font-700 text-base hover:bg-[#374151] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
          >
            Start Planning Free →
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}