import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function PromoBanners() {
  return (
    <section className="py-4 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Banner 1 — Orange */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[160px] sm:h-[200px] rounded overflow-hidden bg-gradient-to-r from-[oklch(0.65_0.18_60)] to-[oklch(0.5_0.15_50)] flex items-center px-7 cursor-pointer group"
          data-ocid="promo_banners.card"
        >
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          <div className="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute right-10 bottom-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/3" />
          <div className="relative z-10 text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white/80">
              New Arrivals
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-1">
              Electronics Sale
            </h3>
            <p className="text-sm text-white/90 mb-3">
              Up to 40% Off — Top brands waiting
            </p>
            <button
              type="button"
              className="flex items-center gap-2 bg-white text-gray-900 font-bold text-sm px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              data-ocid="promo_banners.primary_button"
            >
              Shop Now <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Banner 2 — Dark blue */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative h-[160px] sm:h-[200px] rounded overflow-hidden bg-gradient-to-r from-[oklch(0.18_0.06_260)] to-[oklch(0.28_0.08_250)] flex items-center px-7 cursor-pointer group"
          data-ocid="promo_banners.card"
        >
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          <div className="absolute right-0 top-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute right-10 bottom-0 w-32 h-32 bg-orange/10 rounded-full translate-y-1/3" />
          <div className="relative z-10 text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-1 text-orange">
              Fashion Week
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-1">
              500+ New Styles
            </h3>
            <p className="text-sm text-white/80 mb-3">
              Trending looks. Free shipping on all fashion.
            </p>
            <button
              type="button"
              className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-gray-900 font-bold text-sm px-4 py-2 rounded transition-colors"
              data-ocid="promo_banners.secondary_button"
            >
              Explore <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
