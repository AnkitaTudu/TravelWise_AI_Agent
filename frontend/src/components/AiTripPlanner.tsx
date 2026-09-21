import { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Wallet,
  Calendar,
  Users,
  Heart,
  ArrowRight,
  Send,
  Loader,
} from 'lucide-react';

const travelStyles = ['Adventure', 'Relaxation', 'Cultural', 'Foodie', 'Photography', 'Spiritual'];
const companionTypes = ['Solo', 'Couple', 'Family', 'Friends', 'Group'];

interface AiTripPlannerProps {
  onPlanGenerated: (plan: PlanData) => void;
}

export interface PlanData {
  destination: string;
  days: number;
  budget: string;
  style: string;
  companions: string;
}

export default function AiTripPlanner({ onPlanGenerated }: AiTripPlannerProps) {
  const [step, setStep] = useState(0);
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState('');
  const [travelStyle, setTravelStyle] = useState('');
  const [companions, setCompanions] = useState('');
  const [generating, setGenerating] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    {
      role: 'ai',
      text: 'Hi there! 👋 I\'m your TravelWise AI. Tell me — which part of India are you dreaming of exploring?',
    },
  ]);

  const steps = [
    { label: 'Destination', icon: MapPin },
    { label: 'Duration', icon: Calendar },
    { label: 'Budget', icon: Wallet },
    { label: 'Style', icon: Heart },
    { label: 'Companions', icon: Users },
  ];

  const handleNext = () => {
    if (step === 0 && destination) {
      setChatMessages((m) => [
        ...m,
        { role: 'user', text: destination },
        { role: 'ai', text: `${destination} is a brilliant choice! 🌿 How many days are you planning to spend there?` },
      ]);
      setStep(1);
    } else if (step === 1) {
      setChatMessages((m) => [
        ...m,
        { role: 'user', text: `${days} days` },
        { role: 'ai', text: `A ${days}-day trip sounds perfect. What's your approximate daily budget per person?` },
      ]);
      setStep(2);
    } else if (step === 2 && budget) {
      setChatMessages((m) => [
        ...m,
        { role: 'user', text: budget },
        { role: 'ai', text: `Great! How would you describe your ideal travel style?` },
      ]);
      setStep(3);
    } else if (step === 3 && travelStyle) {
      setChatMessages((m) => [
        ...m,
        { role: 'user', text: travelStyle },
        { role: 'ai', text: `Love it! And finally — who are you travelling with?` },
      ]);
      setStep(4);
    } else if (step === 4 && companions) {
      setChatMessages((m) => [
        ...m,
        { role: 'user', text: companions },
        { role: 'ai', text: `Perfect! I have everything I need to craft your dream itinerary. Generating your personalised plan now...` },
      ]);
      setGenerating(true);
      setTimeout(() => {
        onPlanGenerated({ destination, days, budget, style: travelStyle, companions });
      }, 2800);
    }
  };

  const budgetOptions = ['₹2,000–4,000', '₹4,000–7,000', '₹7,000–12,000', '₹12,000+'];

  return (
    <div className="min-h-screen bg-[#F7F6F3] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFBF8] border-b border-[#E8E5DF] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#FDF4EF] flex items-center justify-center">
            <Sparkles size={16} className="text-[#D97A52]" />
          </div>
          <div>
            <h1 className="text-[15px] font-700 text-[#1F2937]">TravelWise AI Planner</h1>
            <p className="text-xs text-[#9CA3AF]">Personalised trip generation · Powered by TravelWise AI Engine</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-[#FCFBF8] border-b border-[#E8E5DF]">
        <div className="max-w-3xl mx-auto px-6 py-3">
          <div className="flex items-center gap-1">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-1 flex-1">
                  <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-600 transition-all duration-300 ${
                    i <= step
                      ? 'bg-[#D97A52] text-white'
                      : 'text-[#9CA3AF]'
                  }`}>
                    <Icon size={11} />
                    <span className="hidden sm:inline">{s.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-px flex-1 transition-all duration-500 ${i < step ? 'bg-[#D97A52]' : 'bg-[#E8E5DF]'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-4">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 animate-fade-in-up ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {msg.role === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-[#FDF4EF] border border-[#F0C4AE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles size={14} className="text-[#D97A52]" />
                </div>
              )}
              <div
                className={`max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'ai'
                    ? 'bg-[#FCFBF8] border border-[#E8E5DF] text-[#1F2937] rounded-tl-sm'
                    : 'bg-[#D97A52] text-white rounded-tr-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {generating && (
            <div className="flex gap-3 animate-fade-in">
              <div className="w-8 h-8 rounded-xl bg-[#FDF4EF] border border-[#F0C4AE] flex items-center justify-center flex-shrink-0">
                <Loader size={14} className="text-[#D97A52] animate-spin" />
              </div>
              <div className="bg-[#FCFBF8] border border-[#E8E5DF] px-4 py-3 rounded-2xl rounded-tl-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D97A52] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D97A52] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D97A52] animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-xs text-[#9CA3AF] ml-2">Crafting your itinerary…</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input area */}
      {!generating && (
        <div className="border-t border-[#E8E5DF] bg-[#FCFBF8] px-6 py-5">
          <div className="max-w-3xl mx-auto">
            {step === 0 && (
              <div className="flex gap-3">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Goa, Kerala, Spiti Valley..."
                  className="flex-1 px-4 py-3 rounded-xl border border-[#E8E5DF] bg-[#F7F6F3] text-sm text-[#1F2937] outline-none focus:ring-2 focus:ring-[#D97A52]/30 focus:border-[#D97A52] placeholder:text-[#9CA3AF] transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                />
                <button
                  onClick={handleNext}
                  disabled={!destination}
                  className="px-5 py-3 bg-[#D97A52] text-white rounded-xl hover:bg-[#C06840] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send size={16} />
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B7280]">Trip duration</span>
                  <span className="text-lg font-700 text-[#1F2937]">{days} days</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={21}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-[#D97A52]"
                />
                <div className="flex justify-between text-xs text-[#9CA3AF]">
                  <span>2 days</span>
                  <span>21 days</span>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D97A52] text-white rounded-xl font-600 text-sm hover:bg-[#C06840] transition-all duration-200"
                >
                  Continue <ArrowRight size={15} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`px-4 py-3 rounded-xl text-sm font-600 border transition-all duration-200 ${
                        budget === b
                          ? 'bg-[#D97A52] border-[#D97A52] text-white'
                          : 'bg-[#F7F6F3] border-[#E8E5DF] text-[#6B7280] hover:border-[#D97A52] hover:text-[#D97A52]'
                      }`}
                    >
                      {b} <span className="font-400 text-xs opacity-70">/day</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!budget}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D97A52] text-white rounded-xl font-600 text-sm hover:bg-[#C06840] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Continue <ArrowRight size={15} />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {travelStyles.map((s) => (
                    <button
                      key={s}
                      onClick={() => setTravelStyle(s)}
                      className={`px-4 py-2 rounded-full text-sm font-600 border transition-all duration-200 ${
                        travelStyle === s
                          ? 'bg-[#D97A52] border-[#D97A52] text-white'
                          : 'bg-[#F7F6F3] border-[#E8E5DF] text-[#6B7280] hover:border-[#D97A52] hover:text-[#D97A52]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!travelStyle}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D97A52] text-white rounded-xl font-600 text-sm hover:bg-[#C06840] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Continue <ArrowRight size={15} />
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {companionTypes.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCompanions(c)}
                      className={`px-4 py-2 rounded-full text-sm font-600 border transition-all duration-200 ${
                        companions === c
                          ? 'bg-[#D97A52] border-[#D97A52] text-white'
                          : 'bg-[#F7F6F3] border-[#E8E5DF] text-[#6B7280] hover:border-[#D97A52] hover:text-[#D97A52]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!companions}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D97A52] text-white rounded-xl font-600 text-sm hover:bg-[#C06840] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Sparkles size={15} />
                  Generate my AI trip plan
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
