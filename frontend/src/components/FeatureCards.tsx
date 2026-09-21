import {
  CloudSun,
  Brain,
  Backpack,
  Compass,
  Wallet,
  UtensilsCrossed,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: CloudSun,
    title: 'Real-Time Weather',
    desc: 'Live conditions and 15-day forecasts for every destination in India.',
    color: '#D8B36A',
    bg: '#FDF8EE',
  },
  {
    icon: Brain,
    title: 'AI Trip Planner',
    desc: 'Get a personalised day-by-day itinerary crafted by our AI engine in seconds.',
    color: '#D97A52',
    bg: '#FDF4EF',
  },
  {
    icon: Backpack,
    title: 'Packing Suggestions',
    desc: 'Smart checklists tailored to your destination, season, and travel style.',
    color: '#6D8F72',
    bg: '#F0F5F1',
  },
  {
    icon: Compass,
    title: 'Nearby Attractions',
    desc: 'Discover hidden gems and local favourites around your chosen destination.',
    color: '#8B7BC8',
    bg: '#F3F1FB',
  },
  {
    icon: Wallet,
    title: 'Budget Estimator',
    desc: 'Accurate cost breakdowns for accommodation, travel, food, and activities.',
    color: '#D97A52',
    bg: '#FDF4EF',
  },
  {
    icon: UtensilsCrossed,
    title: 'Local Food Guide',
    desc: 'Curated dishes and restaurants so you eat like a local, not a tourist.',
    color: '#D8B36A',
    bg: '#FDF8EE',
  },
  {
    icon: ShieldCheck,
    title: 'Travel Safety Score',
    desc: 'Real-time safety index with advisories, crowd levels and health alerts.',
    color: '#6D8F72',
    bg: '#F0F5F1',
  },
];

export default function FeatureCards() {
  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm font-600 text-[#D97A52] tracking-widest uppercase mb-3">
            Everything you need
          </p>
          <h2 className="text-3xl lg:text-5xl font-700 text-[#1F2937] leading-tight max-w-lg">
            Your entire trip,<br />
            <span className="text-[#6B7280] font-400">handled intelligently.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isWide = i === 1;
            return (
              <div
                key={f.title}
                className={`group relative rounded-2xl p-6 lg:p-7 border border-[#E8E5DF] bg-[#FCFBF8] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: f.bg }}
                >
                  <Icon size={20} style={{ color: f.color }} strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-700 text-[#1F2937] mb-2">{f.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-400">{f.desc}</p>

                {/* Subtle hover accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: f.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
