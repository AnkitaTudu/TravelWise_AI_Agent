import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    location: 'Kerala Backwaters',
    tagline: 'Where stillness meets eternity',
    region: 'South India',
    img: 'https://images.unsplash.com/photo-1661174607003-d9d36388c916?w=1920&h=1080&fit=crop&auto=format',
    alt: 'A traditional houseboat gliding through Kerala backwaters surrounded by lush palm trees',
  },
  {
    id: 2,
    location: 'Munnar Tea Gardens',
    tagline: 'A thousand shades of green',
    region: 'Kerala',
    img: 'https://images.unsplash.com/photo-1720591658325-90372cc7da02?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Misty tea gardens cascading down verdant hills in Munnar with morning fog',
  },
  {
    id: 3,
    location: 'Spiti Valley',
    tagline: 'The cold desert calls',
    region: 'Himachal Pradesh',
    img: 'https://images.unsplash.com/photo-1638641088375-ddf026f736f4?w=1920&h=1080&fit=crop&auto=format',
    alt: 'River running through Spiti Valley surrounded by dramatic snow-capped mountains',
  },
  {
    id: 4,
    location: 'Meghalaya',
    tagline: 'Abode of the clouds',
    region: 'Northeast India',
    img: 'https://images.unsplash.com/photo-1742107939655-4f8af7484dfa?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Mystical misty green hills and waterfalls of Meghalaya shrouded in cloud',
  },
  {
    id: 5,
    location: 'Kashmir Valley',
    tagline: 'Heaven on earth awakens',
    region: 'Jammu & Kashmir',
    img: 'https://images.unsplash.com/photo-1644979623604-14305c85b543?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Dal Lake in Kashmir with traditional shikaras at sunrise with misty mountains',
  },
];

interface HeroCarouselProps {
  onNavigatePlanner: () => void;
}

export default function HeroCarousel({ onNavigatePlanner }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 400);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => next(), 7000);
    return () => clearInterval(timer);
  }, [current, transitioning]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[640px] max-h-[900px] overflow-hidden bg-[#1a1a16]">
      {/* Carousel images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.img}
            alt={s.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Cinematic overlay */}
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div
          className={`transition-all duration-700 ease-out ${
            transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-600 tracking-widest text-white/70 uppercase">
              {slide.region}
            </span>
            <span className="w-8 h-px bg-white/40" />
            <span className="text-[11px] font-500 text-white/50 uppercase tracking-wider">India</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-800 text-white leading-[0.95] tracking-tight mb-4 max-w-3xl">
            {slide.location}
          </h1>

          <p className="text-lg lg:text-xl text-white/70 font-400 italic mb-8 max-w-md">
            {slide.tagline}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onNavigatePlanner}
              className="px-7 py-3.5 bg-[#D97A52] text-white text-sm font-600 rounded-xl hover:bg-[#C06840] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Plan this trip →
            </button>
            <button className="px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white text-sm font-500 rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20">
              Explore more
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 lg:right-16 flex items-center gap-3">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
