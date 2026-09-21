import { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, MapPin, X } from 'lucide-react';

const suggestions = ['Goa', 'Kerala', 'Spiti Valley', 'Jaipur', 'Andaman', 'Ladakh', 'Coorg', 'Rishikesh'];

const placeholders = [
  'Where would you like to explore?',
  'Beaches of Goa...',
  'Misty hills of Kerala...',
  'Silence of Spiti Valley...',
  'Colours of Jaipur...',
  'Islands of Andaman...',
];

interface SearchBarProps {
  onNavigatePlanner: () => void;
}

export default function SearchBar({ onNavigatePlanner }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const target = placeholders[placeholderIndex];
    let i = displayText.length;

    if (isTyping) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayText(target.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayText(target.slice(0, i - 1)), 30);
        return () => clearTimeout(t);
      } else {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, placeholderIndex]);

  const handleSuggestion = (s: string) => {
    setQuery(s);
    inputRef.current?.focus();
  };

  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles size={14} className="text-[#D8B36A]" />
          <span className="text-sm font-500 text-[#D8B36A] tracking-wide">AI-Powered Discovery</span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-700 text-[#1F2937] text-center leading-tight mb-3">
          Discover India,{' '}
          <span className="text-gradient-warm">smarter.</span>
        </h2>
        <p className="text-center text-[#6B7280] text-base lg:text-lg mb-10 font-400">
          Tell us your dream destination. We'll handle everything else.
        </p>

        {/* Search input */}
        <div
          className={`relative rounded-2xl transition-all duration-300 ${
            focused
              ? 'shadow-[0_8px_40px_rgba(217,122,82,0.18)] ring-2 ring-[#D97A52]/30'
              : 'shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
          }`}
        >
          <div className="flex items-center bg-[#FCFBF8] rounded-2xl border border-[#E8E5DF] overflow-hidden">
            <div className="pl-5 pr-3 flex-shrink-0">
              <Search size={20} className={`transition-colors duration-200 ${focused ? 'text-[#D97A52]' : 'text-[#9CA3AF]'}`} />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
              placeholder={query ? '' : displayText}
              className="flex-1 py-5 text-[#1F2937] text-base font-400 bg-transparent outline-none placeholder:text-[#9CA3AF]"
              onKeyDown={(e) => e.key === 'Enter' && query && onNavigatePlanner()}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-3 text-[#9CA3AF] hover:text-[#6B7280]"
              >
                <X size={16} />
              </button>
            )}
            <div className="pr-2 flex-shrink-0">
              <button
                onClick={() => query && onNavigatePlanner()}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-600 transition-all duration-200 ${
                  query
                    ? 'bg-[#D97A52] text-white hover:bg-[#C06840]'
                    : 'bg-[#F0EDE8] text-[#9CA3AF]'
                }`}
              >
                <Sparkles size={14} />
                <span className="hidden sm:inline">Plan with AI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick suggestions */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <span className="text-xs text-[#9CA3AF] font-400 self-center mr-1">Trending:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSuggestion(s)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCFBF8] border border-[#E8E5DF] text-xs font-500 text-[#6B7280] hover:border-[#D97A52] hover:text-[#D97A52] hover:bg-[#FDF5F1] transition-all duration-200"
            >
              <MapPin size={10} />
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
