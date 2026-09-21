import { useState } from 'react';
import type { PlanData } from './AiTripPlanner';
import {
  Sparkles,
  Sun,
  Coffee,
  Moon,
  MapPin,
  Wallet,
  Backpack,
  Utensils,
  Phone,
  CloudSun,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Download,
  Share2,
} from 'lucide-react';

const itineraryData: Record<string, DayPlan[]> = {
  default: [
    {
      day: 1,
      title: 'Arrival & First Impressions',
      morning: {
        time: '9:00 AM',
        activity: 'Check into your accommodation and freshen up',
        detail: 'Head to a local café for a traditional breakfast — try local specialties to set the tone.',
        type: 'rest',
      },
      afternoon: {
        time: '1:00 PM',
        activity: 'Orientation walk through the main area',
        detail: 'Explore the neighbourhood, get your bearings, and visit a local market for snacks and supplies.',
        type: 'explore',
      },
      evening: {
        time: '6:00 PM',
        activity: 'Sunset viewpoint and welcome dinner',
        detail: 'Watch the golden hour from the best vantage point, then enjoy a slow dinner at a highly-rated local restaurant.',
        type: 'dine',
      },
    },
    {
      day: 2,
      title: 'Deep Dive Into Culture',
      morning: {
        time: '7:30 AM',
        activity: 'Early morning nature walk',
        detail: 'The best light happens before 9 AM. Pack light, bring water, and capture incredible photographs.',
        type: 'adventure',
      },
      afternoon: {
        time: '12:00 PM',
        activity: 'Local cuisine lunch and artisan market',
        detail: 'Taste 5–6 signature dishes at a thali-style restaurant, then browse handcraft stalls nearby.',
        type: 'dine',
      },
      evening: {
        time: '5:30 PM',
        activity: 'Cultural performance or local event',
        detail: 'Check for local festivals, music, or art events. Many destinations have evening programmes.',
        type: 'culture',
      },
    },
    {
      day: 3,
      title: 'Adventure & Hidden Gems',
      morning: {
        time: '6:00 AM',
        activity: 'Sunrise excursion to a scenic spot',
        detail: 'This is the day for the big experience — a trek, boat ride, or scenic drive depending on your destination.',
        type: 'adventure',
      },
      afternoon: {
        time: '2:00 PM',
        activity: 'Relaxation and local wellness',
        detail: 'Ayurvedic massage, a dip in a natural pool, or simply a hammock afternoon. You\'ve earned it.',
        type: 'rest',
      },
      evening: {
        time: '7:00 PM',
        activity: 'Rooftop dinner with panoramic views',
        detail: 'Book ahead for a table with a view. Order a local speciality and end the evening slowly.',
        type: 'dine',
      },
    },
  ],
};

interface DayPlan {
  day: number;
  title: string;
  morning: Slot;
  afternoon: Slot;
  evening: Slot;
}

interface Slot {
  time: string;
  activity: string;
  detail: string;
  type: string;
}

const slotTypeConfig = {
  rest: { color: '#6D8F72', bg: '#F0F5F1', label: 'Rest' },
  explore: { color: '#D8B36A', bg: '#FDF8EE', label: 'Explore' },
  dine: { color: '#D97A52', bg: '#FDF4EF', label: 'Dine' },
  adventure: { color: '#8B7BC8', bg: '#F3F1FB', label: 'Adventure' },
  culture: { color: '#3B82F6', bg: '#EFF6FF', label: 'Culture' },
};

interface GeneratedPlanProps {
  plan: PlanData;
  onBack: () => void;
}

export default function GeneratedPlan({ plan, onBack }: GeneratedPlanProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const days = itineraryData.default.slice(0, Math.min(plan.days, 3));

  const packingList = [
    'Light cotton clothing (multiple layers)',
    'Comfortable walking shoes',
    'Sunscreen SPF 50+',
    'Rain jacket or poncho',
    'Reusable water bottle',
    'Power bank & travel adapter',
    'First aid kit & prescription meds',
    'Offline maps downloaded',
  ];

  const emergencyContacts = [
    { label: 'Tourist Helpline', number: '1800-111-363', icon: Phone },
    { label: 'Police Emergency', number: '100', icon: Phone },
    { label: 'Ambulance', number: '108', icon: Phone },
    { label: 'Women Helpline', number: '1091', icon: Phone },
  ];

  const weather = [
    { day: 'Day 1', temp: '26°C', icon: Sun, condition: 'Sunny' },
    { day: 'Day 2', temp: '24°C', icon: CloudSun, condition: 'Partly cloudy' },
    { day: 'Day 3', temp: '27°C', icon: Sun, condition: 'Clear' },
  ];

  const foodRecs = [
    { name: 'Spice Garden', type: 'Local Cuisine', rating: 4.8, note: 'Authentic flavours, family run' },
    { name: 'The Riverside Café', type: 'Café & Breakfast', rating: 4.7, note: 'Best morning chai in town' },
    { name: 'Night Market Stalls', type: 'Street Food', rating: 4.9, note: 'Must-try: local snacks & sweets' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      {/* Hero banner */}
      <div className="relative h-48 lg:h-64 overflow-hidden bg-[#1a1a16]">
        <img
          src="https://images.unsplash.com/photo-1638641088375-ddf026f736f4?w=1400&h=400&fit=crop&auto=format"
          alt="Scenic travel destination"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
          <div className="max-w-4xl mx-auto w-full">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white/70 hover:text-white text-xs font-500 mb-3 transition-colors"
            >
              <ArrowLeft size={13} /> Back to planner
            </button>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={14} className="text-[#D8B36A] fill-[#D8B36A]" />
              <span className="text-xs text-[#D8B36A] font-600 tracking-wide">AI Generated Itinerary</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-800 text-white">
              {plan.destination} · {plan.days} Days
            </h1>
            <p className="text-white/60 text-sm mt-1">
              {plan.companions} · {plan.style} · {plan.budget}/day
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm text-white text-xs font-600 border border-white/20 hover:bg-white/20 transition-all">
            <Share2 size={12} /> Share
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm text-white text-xs font-600 border border-white/20 hover:bg-white/20 transition-all">
            <Download size={12} /> Save PDF
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        {/* Budget summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Daily Budget', value: plan.budget, icon: Wallet, color: '#D97A52' },
            { label: 'Total Days', value: `${plan.days} days`, icon: Sun, color: '#D8B36A' },
            { label: 'Travel Style', value: plan.style, icon: Star, color: '#6D8F72' },
            { label: 'Companions', value: plan.companions, icon: MapPin, color: '#8B7BC8' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="bg-[#FCFBF8] rounded-2xl border border-[#E8E5DF] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} style={{ color: item.color }} />
                  <span className="text-xs font-600 text-[#9CA3AF] uppercase tracking-wide">{item.label}</span>
                </div>
                <p className="text-sm font-700 text-[#1F2937]">{item.value}</p>
              </div>
            );
          })}
        </div>

        {/* Weather timeline */}
        <div className="bg-[#FCFBF8] rounded-2xl border border-[#E8E5DF] p-6">
          <h2 className="text-base font-700 text-[#1F2937] mb-4 flex items-center gap-2">
            <CloudSun size={16} className="text-[#D8B36A]" />
            Weather Timeline
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {weather.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.day} className="flex-shrink-0 text-center px-5 py-3 rounded-xl bg-[#F7F6F3] border border-[#F0EDE8]">
                  <p className="text-xs text-[#9CA3AF] mb-2">{w.day}</p>
                  <Icon size={20} className="text-[#D8B36A] mx-auto mb-1" />
                  <p className="text-lg font-700 text-[#1F2937]">{w.temp}</p>
                  <p className="text-[10px] text-[#9CA3AF]">{w.condition}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Itinerary timeline */}
        <div>
          <h2 className="text-xl font-700 text-[#1F2937] mb-5">Day-by-Day Itinerary</h2>
          <div className="space-y-3">
            {days.map((d, i) => (
              <div key={d.day} className="bg-[#FCFBF8] rounded-2xl border border-[#E8E5DF] overflow-hidden">
                <button
                  onClick={() => setExpandedDay(expandedDay === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F7F6F3] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FDF4EF] flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-800 text-[#D97A52]">{d.day}</span>
                    </div>
                    <div>
                      <p className="text-sm font-700 text-[#1F2937]">Day {d.day}</p>
                      <p className="text-xs text-[#9CA3AF]">{d.title}</p>
                    </div>
                  </div>
                  {expandedDay === i ? <ChevronUp size={16} className="text-[#9CA3AF]" /> : <ChevronDown size={16} className="text-[#9CA3AF]" />}
                </button>

                {expandedDay === i && (
                  <div className="px-5 pb-5 space-y-1 animate-fade-in">
                    {[
                      { slot: d.morning, Icon: Coffee, label: 'Morning' },
                      { slot: d.afternoon, Icon: Sun, label: 'Afternoon' },
                      { slot: d.evening, Icon: Moon, label: 'Evening' },
                    ].map(({ slot, Icon, label }) => {
                      const cfg = slotTypeConfig[slot.type as keyof typeof slotTypeConfig] || slotTypeConfig.explore;
                      return (
                        <div key={label} className="flex gap-3 p-3 rounded-xl bg-[#F7F6F3]">
                          <div className="flex-shrink-0 flex flex-col items-center gap-1">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: cfg.bg }}>
                              <Icon size={13} style={{ color: cfg.color }} />
                            </div>
                            <div className="w-px flex-1 bg-[#E8E5DF] min-h-[8px]" />
                          </div>
                          <div className="flex-1 min-w-0 pt-0.5">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-600 text-[#9CA3AF]">{slot.time}</span>
                              <span
                                className="text-[9px] font-700 px-1.5 py-0.5 rounded-full uppercase tracking-wide"
                                style={{ color: cfg.color, backgroundColor: cfg.bg }}
                              >
                                {cfg.label}
                              </span>
                            </div>
                            <p className="text-sm font-600 text-[#1F2937] mb-0.5">{slot.activity}</p>
                            <p className="text-xs text-[#6B7280] leading-relaxed">{slot.detail}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Food recommendations */}
        <div className="bg-[#FCFBF8] rounded-2xl border border-[#E8E5DF] p-6">
          <h2 className="text-base font-700 text-[#1F2937] mb-4 flex items-center gap-2">
            <Utensils size={16} className="text-[#D97A52]" />
            Food Recommendations
          </h2>
          <div className="space-y-3">
            {foodRecs.map((f) => (
              <div key={f.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F6F3] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#FDF4EF] flex items-center justify-center flex-shrink-0">
                  <Utensils size={14} className="text-[#D97A52]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-700 text-[#1F2937]">{f.name}</p>
                  <p className="text-xs text-[#9CA3AF]">{f.type} · {f.note}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Star size={11} className="fill-[#D8B36A] text-[#D8B36A]" />
                  <span className="text-xs font-700 text-[#1F2937]">{f.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two columns: packing + emergency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Packing checklist */}
          <div className="bg-[#FCFBF8] rounded-2xl border border-[#E8E5DF] p-6">
            <h2 className="text-base font-700 text-[#1F2937] mb-4 flex items-center gap-2">
              <Backpack size={16} className="text-[#6D8F72]" />
              Packing Checklist
            </h2>
            <div className="space-y-2">
              {packingList.map((item, i) => (
                <label key={item} className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-0.5 accent-[#6D8F72] flex-shrink-0" />
                  <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937] transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Emergency contacts */}
          <div className="bg-[#FCFBF8] rounded-2xl border border-[#E8E5DF] p-6">
            <h2 className="text-base font-700 text-[#1F2937] mb-4 flex items-center gap-2">
              <Phone size={16} className="text-[#D97A52]" />
              Emergency Contacts
            </h2>
            <div className="space-y-3">
              {emergencyContacts.map((c) => (
                <div key={c.label} className="flex items-center justify-between p-3 rounded-xl bg-[#F7F6F3]">
                  <span className="text-sm text-[#6B7280]">{c.label}</span>
                  <a
                    href={`tel:${c.number}`}
                    className="text-sm font-700 text-[#D97A52] hover:text-[#C06840] transition-colors"
                  >
                    {c.number}
                  </a>
                </div>
              ))}
            </div>

            {/* Travel advisory */}
            <div className="mt-4 p-3 rounded-xl bg-[#F0F5F1] border border-[#B8D4BB]">
              <p className="text-xs font-700 text-[#4E6B53] mb-1">Travel Advisory</p>
              <p className="text-xs text-[#6D8F72] leading-relaxed">
                Conditions are favourable for travel. Carry a valid ID, stay hydrated, and respect local customs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-6">
          <p className="text-sm text-[#9CA3AF] mb-4">Happy with your plan? Start planning your booking.</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#D97A52] text-white rounded-2xl font-700 text-sm hover:bg-[#C06840] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
            <Sparkles size={15} />
            Book This Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}
