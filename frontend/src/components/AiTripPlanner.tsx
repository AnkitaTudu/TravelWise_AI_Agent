import { useState, useEffect } from 'react';
import { generateTrip } from "../api/travelApi";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

const companionTypes = ['Solo', 'Couple', 'Family', 'Friends', 'Group'];

interface AiTripPlannerProps {
  onPlanGenerated: (plan: PlanData) => void;
}

export interface PlanData {
  destination: string;
  days: number;
  budget: string;
  companions: string;
  month: string;
}

export default function AiTripPlanner({ onPlanGenerated }: AiTripPlannerProps) {
  console.log("Planner rendered");
  console.log("Before return");
  const [step, setStep] = useState(0);
  const location = useLocation();
  const cameFromDestination = Boolean(location.state?.destination);
  useEffect(() => {
  if (location.state?.destination) {
    setChatMessages([
      {
        role: "ai",
        text: `${location.state.destination} is a brilliant choice! 🌿 How many days are you planning to spend there?`,
      },
    ]);

    setStep(1);
  }
}, [location.state]);
  const [destination, setDestination] = useState(
  location.state?.destination || ""
);
  const quickPicks = [
  "Goa",
  "Kerala",
  "Jaipur",
  "Ladakh",
  "Meghalaya",
  "Spiti Valley",
];
  const [days, setDays] = useState(5);
  const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const [month, setMonth] = useState("");
  const [budget, setBudget] = useState('');
  const [companions, setCompanions] = useState('');
  const [generating, setGenerating] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    {
      role: 'ai',
      text: 'Hi there! 👋 I\'m your TravelWise AI. Tell me — which part of India are you dreaming of exploring?',
    },
  ]);
  const navigate = useNavigate();

 
  const handleNext = async () => {
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
        { role: 'ai', text: `Great! Which month are you planning to travel?` },
      ]);
      setStep(3);
    } else if (step === 3 && month) {
      setChatMessages((m) => [
        ...m,
        { role: 'user', text: month },
        { role: 'ai', text: `Love it! And finally — who are you travelling with?` },
      ]);
      setStep(4);
   } else if (step === 4 && companions) {
  const planToSend = {
    destination,
    days,
    budget,
    month,
    companions,
  };

  setChatMessages((m) => [
    ...m,
    { role: "user", text: planToSend.companions },
    {
      role: "ai",
      text: "Perfect! I have everything I need to craft your dream itinerary. Generating your personalised plan now...",
    },
  ]);

  setGenerating(true);

  try {
    const result = await generateTrip(planToSend);

    console.log(result);

    onPlanGenerated(planToSend);

  } catch (error) {
    console.error("Backend Error:", error);
    alert("Failed to connect to backend.");
  } finally {
    setGenerating(false);
  }
    }
  };

  const steps = [
    { label: 'Destination', icon: MapPin },
    { label: 'Duration', icon: Calendar },
    { label: 'Budget', icon: Wallet },
    { label: 'Month', icon: Calendar },
    { label: 'Companions', icon: Users },
  ];

  const budgetOptions = ['₹2,000–4,000', '₹4,000–7,000', '₹7,000–12,000', '₹12,000+'];

  return (

    <div className="min-h-screen bg-[#F7F6F3] flex flex-col">
      {/* Header */}
      <header className="bg-[#FCFBF8] border-b border-[#E8E5DF]">
        <div className="max-w-3xl mx-auto px-6 py-4">
         <div className="flex items-center gap-3">

  <button
    onClick={() => {
      if (cameFromDestination) {
        navigate(`/destination/${location.state.destination.toLowerCase()}`);
      } else {
        navigate("/");
      }
    }}
    className="w-9 h-9 rounded-xl border border-[#E8E5DF] bg-white hover:bg-[#F7F6F3] flex items-center justify-center transition"
  >
    <ArrowLeft size={18} />
  </button>

  <div className="flex items-start gap-3 min-w-0"></div>
        </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-3xl mx-auto px-6 pb-3">
          <div className="flex items-center gap-1 min-w-0">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-1 flex-1 min-w-0">
                  <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-600 whitespace-nowrap transition-all duration-300 ${
                    i <= step
                      ? 'bg-[#D97A52] text-white'
                      : 'text-[#9CA3AF]'
                  }`}>
                    <Icon size={11} className="flex-shrink-0" />
                    <span className="hidden sm:inline">{s.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-px flex-1 min-w-[8px] transition-all duration-500 ${i < step ? 'bg-[#D97A52]' : 'bg-[#E8E5DF]'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </header>

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
              </div >
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
  <div className="space-y-4">

    <div className="flex gap-3">
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter') handleNext();
          }}
          placeholder="Where would you like to go? (e.g. Goa)"
          className="flex-1 px-4 py-3 rounded-xl border border-[#E8E5DF] bg-white text-sm text-[#1F2937] outline-none focus:border-[#D97A52]"
      />
      <button
        onClick={handleNext}
        disabled={!destination.trim()}
        aria-label="Continue"
        className="flex items-center justify-center px-4 rounded-xl bg-[#D97A52] text-white hover:bg-[#C06840] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <Send size={16} />
      </button>
    </div>

    <div className="flex flex-wrap gap-2">
      {quickPicks.map((place) => (
        <button
          key={place}
          onClick={() => {
    setDestination(place);
}}
          className="px-3 py-1.5 rounded-full bg-[#F7F6F3] border border-[#E8E5DF] text-sm hover:bg-[#D97A52] hover:text-white transition-all"
        >
          {place}
        </button>
      ))}
    </div>

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
    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
      {months.map((m) => (
        <button
          key={m}
          onClick={() => setMonth(m)}
          className={`px-4 py-2 rounded-xl text-sm font-600 border transition-all ${
            month === m
              ? "bg-[#D97A52] border-[#D97A52] text-white"
              : "bg-[#F7F6F3] border-[#E8E5DF] text-[#6B7280] hover:border-[#D97A52] hover:text-[#D97A52]"
          }`}
        >
          {m}
        </button>
      ))}
    </div>

    <button
      onClick={handleNext}
      disabled={!month}
      className="w-full flex items-center justify-center gap-2 py-3 bg-[#D97A52] text-white rounded-xl font-600 text-sm"
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
                  Generate Travel Plan
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
