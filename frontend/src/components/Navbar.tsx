import { useState, useEffect } from 'react';
import { Search, LogIn, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex flex-col items-start group"
          >
            <span className="text-xl lg:text-2xl font-800 tracking-tight text-[#1F2937] group-hover:text-[#D97A52] transition-colors duration-300">
              TravelWise
            </span>
            <span className="flex items-center gap-1 text-[10px] font-500 text-[#D8B36A] tracking-wide">
              <Sparkles size={8} className="fill-[#D8B36A]" />
              Powered by TravelWise AI Engine
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-500 transition-colors duration-200 ${
                currentView === 'home' ? 'text-[#D97A52]' : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => onNavigate('planner')}
              className={`text-sm font-500 transition-colors duration-200 ${
                currentView === 'planner' ? 'text-[#D97A52]' : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              AI Planner
            </button>
            <button className="text-sm font-500 text-[#6B7280] hover:text-[#1F2937] transition-colors duration-200">
              Destinations
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2.5 rounded-xl text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F0EDE8] transition-all duration-200">
              <Search size={18} />
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F2937] text-white text-sm font-600 hover:bg-[#374151] transition-all duration-200">
              <LogIn size={15} />
              Sign In
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#6B7280] hover:bg-[#F0EDE8]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2 pt-2 border-t border-[#E8E5DF]">
              {['Explore', 'AI Planner', 'Destinations'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item === 'AI Planner' ? 'planner' : 'home');
                    setMenuOpen(false);
                  }}
                  className="text-left px-2 py-2.5 text-sm font-500 text-[#6B7280] hover:text-[#1F2937]"
                >
                  {item}
                </button>
              ))}
              <button className="mt-2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F2937] text-white text-sm font-600">
                <LogIn size={15} />
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
