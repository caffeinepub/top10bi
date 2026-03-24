import { motion } from "motion/react";

const categories = [
  { emoji: "📱", label: "Electronics" },
  { emoji: "👗", label: "Fashion" },
  { emoji: "🏠", label: "Home & Kitchen" },
  { emoji: "⚽", label: "Sports & Outdoors" },
  { emoji: "💄", label: "Beauty" },
  { emoji: "📚", label: "Books" },
  { emoji: "🧸", label: "Toys" },
  { emoji: "🚗", label: "Automotive" },
  { emoji: "🌱", label: "Garden" },
  { emoji: "🛒", label: "Grocery" },
  { emoji: "🐾", label: "Pet Supplies" },
  { emoji: "💊", label: "Health" },
  { emoji: "🎬", label: "Movies" },
  { emoji: "🎵", label: "Music" },
  { emoji: "🖥️", label: "Office" },
  { emoji: "🏭", label: "Industrial" },
];

export default function CategorySection() {
  return (
    <section className="bg-white py-4 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Browse by Category
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-16 lg:flex lg:flex-wrap gap-2">
          {categories.map(({ emoji, label }, i) => (
            <motion.button
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex flex-col items-center gap-1 p-2 rounded border border-transparent hover:border-orange hover:shadow-card cursor-pointer transition-all group min-w-[70px]"
              data-ocid="category.button"
            >
              <span className="text-2xl">{emoji}</span>
              <span className="text-[10px] sm:text-xs font-medium text-center leading-tight group-hover:text-price-orange">
                {label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
