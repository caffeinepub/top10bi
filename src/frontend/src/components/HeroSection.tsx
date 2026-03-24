import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    bg: "from-[oklch(0.62_0.18_55)] via-[oklch(0.55_0.18_50)] to-[oklch(0.4_0.15_45)]",
    badge: "⚡ MEGA SALE",
    title: "Up to 70% Off",
    subtitle: "Electronics & Gadgets",
    desc: "Top brands. Unbeatable prices. Limited time only.",
    cta: "Shop Now",
    ctaStyle: "bg-white text-gray-900 hover:bg-gray-100",
    accent: "text-white",
    shape1: "bg-white/10",
    shape2: "bg-white/5",
  },
  {
    id: 2,
    bg: "from-[oklch(0.15_0.05_260)] via-[oklch(0.2_0.06_250)] to-[oklch(0.28_0.07_240)]",
    badge: "👗 NEW SEASON",
    title: "Fashion Week",
    subtitle: "10,000+ New Styles",
    desc: "Trending looks from top designers. Free shipping on every order.",
    cta: "Explore Now",
    ctaStyle: "bg-orange hover:bg-orange-dark text-gray-900",
    accent: "text-orange",
    shape1: "bg-orange/10",
    shape2: "bg-orange/5",
  },
  {
    id: 3,
    bg: "from-[oklch(0.45_0.22_25)] via-[oklch(0.38_0.2_22)] to-[oklch(0.28_0.15_20)]",
    badge: "🔥 FLASH DEALS",
    title: "Today Only!",
    subtitle: "Don't Miss Out",
    desc: "Prices drop every hour. Thousands of deals across all categories.",
    cta: "See Deals",
    ctaStyle: "bg-white text-gray-900 hover:bg-gray-100",
    accent: "text-white",
    shape1: "bg-white/10",
    shape2: "bg-white/5",
  },
];

const menuItems = [
  { title: "Free Shipping", sub: "On orders over $35" },
  { title: "Easy Returns", sub: "30-day hassle-free returns" },
  { title: "FAQ", sub: "Frequently asked questions" },
  { title: "Shipping Policy", sub: "View our shipping terms" },
  { title: "Secure Payment", sub: "256-bit SSL encryption" },
  { title: "24/7 Support", sub: "Always here to help" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="flex h-[300px] sm:h-[380px] md:h-[440px]">
      {/* Left menu panel */}
      <div className="hidden md:flex flex-col bg-[#FFD5D5] w-[220px] lg:w-[260px] flex-shrink-0">
        {menuItems.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex items-center justify-between px-4 hover:bg-[#FFBEBE] transition-all group w-full text-left border-b border-[#AFAB68]/20 last:border-0"
            style={{ flex: 1 }}
            data-ocid="hero.menu_item"
          >
            <div className="overflow-hidden">
              <div className="font-bold text-sm leading-tight text-[#AFAB68]">
                {item.title}
              </div>
              <div
                className={`text-xs text-[#AFAB68]/80 overflow-hidden transition-all duration-300 ${
                  hoveredIndex === idx
                    ? "max-h-8 opacity-100 mt-0.5"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.sub}
              </div>
            </div>
            <ChevronDown
              size={16}
              className="flex-shrink-0 ml-2 transition-transform duration-500 text-[#AFAB68]"
              style={{
                transform:
                  hoveredIndex === idx ? "rotate(-90deg)" : "rotate(0deg)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Carousel — right portion */}
      <div className="relative overflow-hidden flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-r ${slide.bg} flex items-center`}
          >
            <div
              className={`absolute right-0 top-0 w-[500px] h-[500px] rounded-full ${slide.shape1} translate-x-1/3 -translate-y-1/3`}
            />
            <div
              className={`absolute right-20 bottom-0 w-[300px] h-[300px] rounded-full ${slide.shape2} translate-y-1/4`}
            />
            <div
              className={`absolute right-48 top-1/2 w-[200px] h-[200px] rounded-full ${slide.shape1} -translate-y-1/2`}
            />
            <div className="relative px-6 sm:px-10 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 bg-white/20 px-3 py-1 rounded-full">
                  {slide.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-1">
                  {slide.title}
                </h1>
                <p
                  className={`text-xl sm:text-2xl font-bold mb-2 ${slide.accent}`}
                >
                  {slide.subtitle}
                </p>
                <p className="text-sm sm:text-base text-white/80 mb-5 max-w-md">
                  {slide.desc}
                </p>
                <button
                  type="button"
                  className={`${slide.ctaStyle} font-bold px-7 py-3 rounded text-sm sm:text-base transition-all shadow-lg hover:shadow-xl`}
                  data-ocid="hero.primary_button"
                >
                  {slide.cta} →
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          data-ocid="hero.button"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          data-ocid="hero.button"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((s, i) => (
            <button
              type="button"
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-white w-6" : "bg-white/50"
              }`}
              data-ocid="hero.toggle"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
