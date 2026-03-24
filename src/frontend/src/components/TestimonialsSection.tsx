import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah M.",
    initials: "SM",
    color: "bg-navy",
    rating: 5,
    quote:
      "Top10bi completely changed how I shop. The curation is spot-on — every item I've ordered exceeded my expectations in quality.",
    title: "Fashion Enthusiast",
  },
  {
    name: "James K.",
    initials: "JK",
    color: "bg-gold",
    rating: 5,
    quote:
      "Fast shipping, amazing deals, and the product quality is honestly better than anything I've found elsewhere. My go-to store now.",
    title: "Tech Reviewer",
  },
  {
    name: "Priya L.",
    initials: "PL",
    color: "bg-navy-light",
    rating: 5,
    quote:
      "The Limited Time Deals section is where I always start. Scored my leather watch at -20% off. Looks like a $400 watch, paid $160!",
    title: "Lifestyle Blogger",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy uppercase tracking-wide">
            Customer Stories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#F9F9F9] border border-[#EAEAEA] p-7 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div
                className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-base mb-4 flex-shrink-0`}
              >
                {t.initials}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: star index is stable
                  <Star key={s} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#4A4A4A] text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Name */}
              <div>
                <p className="font-bold text-navy text-sm">{t.name}</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
