import { ShoppingCart, Star, Tag } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

const featuredDeals = [
  {
    id: 1,
    name: "Pro Wireless Headphones — Studio Quality",
    image: "/assets/generated/product-headphones.dim_400x400.jpg",
    original: 249,
    sale: 139,
    off: 44,
    rating: 4.8,
    reviews: 4521,
    tag: "Limited Time",
  },
  {
    id: 2,
    name: "Smart Gaming Mouse — 16000 DPI",
    image: "/assets/generated/product-gaming-mouse.dim_400x400.jpg",
    original: 99,
    sale: 59,
    off: 40,
    rating: 4.6,
    reviews: 2198,
    tag: "Deal of Day",
  },
  {
    id: 3,
    name: "Premium Coffee Maker — Programmable",
    image: "/assets/generated/product-coffee-maker.dim_400x400.jpg",
    original: 179,
    sale: 109,
    off: 39,
    rating: 4.5,
    reviews: 1876,
    tag: "Flash Deal",
  },
  {
    id: 4,
    name: "Smartwatch Fitness Tracker — GPS",
    image: "/assets/generated/product-smartwatch.dim_400x400.jpg",
    original: 279,
    sale: 169,
    off: 39,
    rating: 4.7,
    reviews: 3214,
    tag: "Best Deal",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={
            s <= Math.round(rating)
              ? "fill-[oklch(0.75_0.18_60)] text-[oklch(0.75_0.18_60)]"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

export default function DealsSection() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-foreground">
              Featured Deals
              <span className="inline-block ml-2 h-1 w-16 bg-deal-red align-middle rounded-full" />
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Exclusive savings on top products
            </p>
          </div>
          <a
            href="/"
            className="text-price-orange text-sm font-semibold hover:underline"
            data-ocid="deals.link"
          >
            View all deals →
          </a>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          data-ocid="deals.list"
        >
          {featuredDeals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-border rounded hover:shadow-card-hover transition-all group"
              data-ocid={`deals.item.${i + 1}`}
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full aspect-square object-cover rounded-t"
                />
                <span className="absolute top-2 left-2 bg-deal-red text-white text-xs font-extrabold px-2 py-1 rounded">
                  -{deal.off}%
                </span>
                <span className="absolute top-2 right-2 bg-foreground/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Tag size={9} /> {deal.tag}
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold leading-tight line-clamp-2 mb-2 group-hover:text-price-orange transition-colors">
                  {deal.name}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  <StarRating rating={deal.rating} />
                  <span className="text-xs text-muted-foreground">
                    ({deal.reviews.toLocaleString()})
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-price-orange font-extrabold text-xl">
                    ${deal.sale}
                  </span>
                  <span className="text-muted-foreground text-sm line-through">
                    ${deal.original}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => toast.success(`${deal.name} added to cart!`)}
                  className="w-full bg-orange hover:bg-orange-dark text-gray-900 text-sm font-bold py-2 rounded transition-colors flex items-center justify-center gap-2"
                  data-ocid={`deals.button.${i + 1}`}
                >
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
