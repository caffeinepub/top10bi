import { MapPin, ShoppingCart, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useLocation } from "../context/LocationContext";

const DEAL_DURATION = 8 * 60 * 60;

const deals = [
  {
    id: 1,
    name: "Smart Watch Pro",
    image: "/assets/generated/product-smartwatch.dim_400x400.jpg",
    original: 199,
    sale: 129,
    off: 35,
    locations: ["All Locations", "New York", "Chicago", "Boston"],
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    image: "/assets/generated/product-speaker.dim_400x400.jpg",
    original: 89,
    sale: 52,
    off: 42,
    locations: ["All Locations", "Los Angeles", "Miami", "Houston"],
  },
  {
    id: 3,
    name: "Running Sneakers",
    image: "/assets/generated/product-shoes.dim_400x400.jpg",
    original: 129,
    sale: 79,
    off: 39,
    locations: ["All Locations", "New York", "Dallas", "Seattle"],
  },
  {
    id: 4,
    name: "Coffee Maker",
    image: "/assets/generated/product-coffee-maker.dim_400x400.jpg",
    original: 149,
    sale: 99,
    off: 34,
    locations: ["All Locations", "Chicago", "Boston", "Houston"],
  },
  {
    id: 5,
    name: "Yoga Mat Premium",
    image: "/assets/generated/product-backpack.dim_400x400.jpg",
    original: 65,
    sale: 39,
    off: 40,
    locations: ["All Locations", "Los Angeles", "Miami", "Seattle"],
  },
  {
    id: 6,
    name: "Gaming Mouse",
    image: "/assets/generated/product-gaming-mouse.dim_400x400.jpg",
    original: 79,
    sale: 49,
    off: 38,
    locations: ["All Locations", "New York", "Chicago", "Dallas"],
  },
  {
    id: 7,
    name: "UV-Block Sunglasses",
    image: "/assets/generated/product-sunscreen.dim_400x400.jpg",
    original: 85,
    sale: 49,
    off: 42,
    locations: ["All Locations", "Miami", "Los Angeles", "Houston"],
  },
  {
    id: 8,
    name: "Leather Wallet",
    image: "/assets/generated/product-watch.dim_400x400.jpg",
    original: 59,
    sale: 35,
    off: 41,
    locations: ["All Locations", "Boston", "Seattle", "Dallas"],
  },
];

function useCountdown(seconds: number) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setRemaining((p) => Math.max(0, p - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(remaining / 3600)).padStart(2, "0");
  const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
  const s = String(remaining % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function FlashDealsSection() {
  const countdown = useCountdown(DEAL_DURATION);
  const { selectedLocation } = useLocation();

  const filteredDeals =
    selectedLocation === "All Locations"
      ? deals
      : deals.filter((d) => d.locations.includes(selectedLocation));

  return (
    <section className="py-4 bg-white border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="bg-deal-red text-white text-xs font-extrabold px-2 py-1 rounded flex items-center gap-1">
              <Zap size={12} className="fill-white" /> FLASH DEALS
            </span>
            <span className="text-sm font-semibold text-foreground">
              Ends in:
            </span>
            <span className="bg-foreground text-white font-mono font-bold text-sm px-2 py-0.5 rounded tracking-wider">
              {countdown}
            </span>
          </div>
          {selectedLocation !== "All Locations" && (
            <span className="flex items-center gap-1 text-xs text-orange font-medium bg-orange/10 px-2 py-0.5 rounded-full">
              <MapPin size={11} /> {selectedLocation}
            </span>
          )}
          <a
            href="/"
            className="ml-auto text-price-orange text-sm font-semibold hover:underline"
            data-ocid="flash_deals.link"
          >
            View All Deals →
          </a>
        </div>

        {filteredDeals.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4 text-center">
            No flash deals available in {selectedLocation} right now.
          </p>
        ) : (
          <div
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
            data-ocid="flash_deals.list"
          >
            {filteredDeals.map((deal, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 w-[160px] sm:w-[180px] bg-white border border-border rounded hover:shadow-card-hover transition-shadow"
                data-ocid={`flash_deals.item.${i + 1}`}
              >
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full aspect-square object-cover rounded-t"
                  />
                  <span className="absolute top-1 left-1 bg-deal-red text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    -{deal.off}%
                  </span>
                </div>
                <div className="p-2">
                  <p className="text-xs font-semibold leading-tight line-clamp-2 mb-1.5">
                    {deal.name}
                  </p>
                  <p className="text-price-orange font-extrabold text-base">
                    ${deal.sale}
                  </p>
                  <p className="text-muted-foreground text-xs line-through">
                    ${deal.original}
                  </p>
                  <button
                    type="button"
                    onClick={() => toast.success(`${deal.name} added to cart!`)}
                    className="mt-2 w-full bg-orange hover:bg-orange-dark text-gray-900 text-xs font-bold py-1.5 rounded transition-colors flex items-center justify-center gap-1"
                    data-ocid={`flash_deals.button.${i + 1}`}
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
