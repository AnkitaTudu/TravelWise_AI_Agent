import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-2">
              <span className="text-2xl font-800 tracking-tight">TravelWise</span>
            </div>
            <div className="flex items-center gap-1 mb-4">
              <Sparkles size={10} className="text-[#D8B36A] fill-[#D8B36A]" />
              <span className="text-[11px] text-[#D8B36A] font-500 tracking-wide">Powered by TravelWise AI Engine</span>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xs">
              Discover India smarter. AI-powered travel planning that feels human, personal, and effortless.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-700 tracking-widest uppercase text-[#6B7280] mb-4">Explore</h4>
            <div className="flex flex-col gap-2.5">
              {['Destinations', 'AI Trip Planner', 'Weather', 'Food Guide', 'Travel Safety'].map((l) => (
                <a key={l} href="#" className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-700 tracking-widest uppercase text-[#6B7280] mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              {['About', 'Contact'].map((l) => (
                <a key={l} href="#" className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#374151] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280] flex items-center gap-1.5">
            © 2026 TravelWise · Made with <Heart size={11} className="fill-[#D97A52] text-[#D97A52]" /> for curious travellers
          </p>
          <p className="text-xs text-[#6B7280]">Discover India Smarter.</p>
        </div>
      </div>
    </footer>
  );
}
