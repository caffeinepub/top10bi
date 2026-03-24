import { MapPin, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useLocation } from "../context/LocationContext";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    image: "/assets/generated/product-headphones.dim_400x400.jpg",
    original: 89,
    sale: 67,
    off: 25,
    rating: 4.7,
    reviews: 2841,
    badge: "Best Seller",
    locations: ["All Locations", "New York", "Chicago", "Boston"],
  },
  {
    id: 2,
    name: "Men's Running Shoes — Lightweight",
    image: "/assets/generated/product-shoes.dim_400x400.jpg",
    original: 129,
    sale: 97,
    off: 25,
    rating: 4.5,
    reviews: 1692,
    badge: "Top Rated",
    locations: ["All Locations", "Los Angeles", "Dallas", "Seattle"],
  },
  {
    id: 3,
    name: "Analog Leather Dress Watch",
    image: "/assets/generated/product-watch.dim_400x400.jpg",
    original: 199,
    sale: 149,
    off: 25,
    rating: 4.6,
    reviews: 987,
    badge: "Top10bi's Choice",
    locations: ["All Locations", "New York", "Miami", "Houston"],
  },
  {
    id: 4,
    name: "Smart Anti-Theft Backpack",
    image: "/assets/generated/product-backpack.dim_400x400.jpg",
    original: 70,
    sale: 49,
    off: 30,
    rating: 4.4,
    reviews: 3210,
    badge: "Best Seller",
    locations: ["All Locations", "Chicago", "Boston", "Dallas"],
  },
  {
    id: 5,
    name: "20,000mAh Portable Charger",
    image: "/assets/generated/product-charger.dim_400x400.jpg",
    original: 45,
    sale: 32,
    off: 29,
    rating: 4.8,
    reviews: 5421,
    badge: "Best Seller",
    locations: ["All Locations", "Los Angeles", "Seattle", "Miami"],
  },
  {
    id: 6,
    name: "Bamboo Desk Organizer Set",
    image: "/assets/generated/product-desk-organizer.dim_400x400.jpg",
    original: 35,
    sale: 24,
    off: 31,
    rating: 4.3,
    reviews: 876,
    badge: "",
    locations: ["All Locations", "Houston", "Dallas", "Boston"],
  },
  {
    id: 7,
    name: "Mineral Sunscreen SPF 50+",
    image: "/assets/generated/product-sunscreen.dim_400x400.jpg",
    original: 28,
    sale: 19,
    off: 32,
    rating: 4.6,
    reviews: 2134,
    badge: "Top Rated",
    locations: ["All Locations", "Miami", "Los Angeles", "New York"],
  },
  {
    id: 8,
    name: "Resistance Bands Set (5 Levels)",
    image: "/assets/generated/product-resistance-bands.dim_400x400.jpg",
    original: 40,
    sale: 27,
    off: 33,
    rating: 4.5,
    reviews: 1867,
    badge: "",
    locations: ["All Locations", "Chicago", "Seattle", "Houston"],
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

export default function TopPicksSection() {
  const { selectedLocation } = useLocation();

  const filteredProducts =
    selectedLocation === "All Locations"
      ? products
      : products.filter((p) => p.locations.includes(selectedLocation));

  return (
    <section className="py-5 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-foreground">
              Best Sellers
              <span className="inline-block ml-2 h-1 w-16 bg-orange align-middle rounded-full" />
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
              {selectedLocation !== "All Locations" ? (
                <>
                  <MapPin size={11} className="text-orange" />
                  Available in {selectedLocation}
                </>
              ) : (
                "Handpicked top-rated products"
              )}
            </p>
          </div>
          <a
            href="/"
            className="text-price-orange text-sm font-semibold hover:underline"
            data-ocid="top_picks.link"
          >
            See all best sellers →
          </a>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center">
            No products found in {selectedLocation}. Try another location.
          </p>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            data-ocid="top_picks.list"
          >
            {filteredProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded border border-border hover:shadow-card-hover transition-all group cursor-pointer"
                data-ocid={`top_picks.item.${i + 1}`}
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full aspect-square object-cover rounded-t"
                  />
                  {p.badge && (
                    <span className="absolute top-1 left-1 bg-[oklch(0.62_0.18_55)] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute top-1 right-1 bg-deal-red text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    -{p.off}%
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-semibold leading-tight line-clamp-2 mb-1.5 group-hover:text-price-orange transition-colors">
                    {p.name}
                  </p>
                  <div className="flex items-center gap-1 mb-1.5">
                    <StarRating rating={p.rating} />
                    <span className="text-[10px] text-muted-foreground">
                      ({p.reviews.toLocaleString()})
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-price-orange font-extrabold text-base">
                      ${p.sale}
                    </span>
                    <span className="text-muted-foreground text-xs line-through">
                      ${p.original}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toast.success(`${p.name} added to cart!`)}
                    className="w-full bg-orange hover:bg-orange-dark text-gray-900 text-xs font-bold py-1.5 rounded transition-colors flex items-center justify-center gap-1"
                    data-ocid={`top_picks.button.${i + 1}`}
                  >
                    <ShoppingCart size={12} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
