import { ChevronDown, MapPin, Search, ShoppingCart } from "lucide-react";
import { useRef, useState } from "react";
import { locations, useLocation } from "../context/LocationContext";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Sports",
  "Beauty",
  "Books",
  "Toys",
  "Automotive",
];

const navLinks = [
  "Today's Deals",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Sports",
  "Beauty",
  "Books",
  "Toys",
  "Automotive",
  "Garden",
  "Grocery",
  "Pet Supplies",
  "Health",
  "Prime",
];

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(3);
  const [locationOpen, setLocationOpen] = useState(false);
  const { selectedLocation, setSelectedLocation } = useLocation();
  const locationRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tier 1 — Top utility bar */}
      <div className="bg-[oklch(0.18_0.04_260)] text-white text-xs py-1.5">
        <div className="max-w-[1400px] mx-auto px-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <a
              href="/"
              className="bg-[oklch(0.55_0.18_55)] hover:bg-[oklch(0.62_0.18_55)] text-white px-3 py-0.5 rounded-sm font-medium transition-colors"
              data-ocid="header.link"
            >
              support
            </a>
            <a
              href="/"
              className="bg-[oklch(0.55_0.18_55)] hover:bg-[oklch(0.62_0.18_55)] text-white px-3 py-0.5 rounded-sm font-medium transition-colors"
              data-ocid="header.link"
            >
              faq
            </a>
            <a
              href="/"
              className="bg-[oklch(0.55_0.18_55)] hover:bg-[oklch(0.62_0.18_55)] text-white px-3 py-0.5 rounded-sm font-medium transition-colors"
              data-ocid="header.link"
            >
              knowledge base
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <span>Welcome</span>
            <span className="text-white/30">|</span>
            <a href="/" className="hover:text-white" data-ocid="header.link">
              My Account
            </a>
            <span className="text-white/30">|</span>
            <a href="/" className="hover:text-white" data-ocid="header.link">
              My Wishlist
            </a>
            <span className="text-white/30">|</span>
            <a href="/" className="hover:text-white" data-ocid="header.link">
              Checkout
            </a>
            <span className="text-white/30">|</span>
            <a
              href="/"
              className="hover:text-white font-semibold text-white"
              data-ocid="header.link"
            >
              Log In
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2 — Main header */}
      <div className="bg-header-bg text-white px-3 py-2.5">
        <div className="max-w-[1400px] mx-auto flex items-center gap-3">
          {/* Logo */}
          <a href="/" className="flex-shrink-0" data-ocid="header.link">
            <img
              src="/assets/generated/top10bi-logo-transparent.dim_400x120.png"
              alt="Top10bi"
              className="h-9 w-auto brightness-0 invert"
            />
          </a>

          {/* Location selector */}
          <div
            className="hidden md:block relative flex-shrink-0"
            ref={locationRef}
          >
            <button
              type="button"
              onClick={() => setLocationOpen((o) => !o)}
              className="flex items-center gap-1.5 bg-[oklch(0.22_0.04_260)] border border-white/20 rounded px-2.5 py-1.5 cursor-pointer hover:border-orange transition-colors"
              data-ocid="header.location_button"
            >
              <MapPin size={14} className="text-orange flex-shrink-0" />
              <div className="text-left">
                <div className="text-[9px] text-gray-400 leading-none">
                  Deliver to
                </div>
                <div className="text-xs text-white font-semibold leading-tight max-w-[90px] truncate">
                  {selectedLocation}
                </div>
              </div>
              <ChevronDown
                size={12}
                className={`text-gray-300 transition-transform ${
                  locationOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {locationOpen && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded shadow-xl z-50">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setSelectedLocation(loc);
                      setLocationOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-orange/10 transition-colors flex items-center gap-2 ${
                      selectedLocation === loc
                        ? "text-orange font-semibold bg-orange/5"
                        : "text-gray-800"
                    }`}
                    data-ocid="header.location_option"
                  >
                    <MapPin
                      size={12}
                      className={
                        selectedLocation === loc
                          ? "text-orange"
                          : "text-gray-400"
                      }
                    />
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart status */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-300 flex-shrink-0">
            <ShoppingCart size={18} />
            <span>Your shopping cart is empty</span>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex h-9 rounded overflow-hidden border border-white/20 focus-within:border-orange">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-200 text-gray-800 text-xs px-2 border-r border-gray-300 cursor-pointer outline-none hidden sm:block w-36"
              data-ocid="header.select"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search entire store here..."
              className="flex-1 px-3 text-gray-900 text-sm outline-none"
              data-ocid="header.search_input"
            />
            <button
              type="button"
              className="bg-orange hover:bg-orange-dark px-4 flex items-center justify-center transition-colors gap-1.5"
              data-ocid="header.button"
            >
              <Search size={16} className="text-gray-900" />
              <span className="text-gray-900 font-bold text-sm hidden sm:block">
                Search
              </span>
            </button>
          </div>

          {/* Cart icon */}
          <button
            type="button"
            className="flex items-center gap-1 hover:border hover:border-white rounded px-2 py-0.5 cursor-pointer relative ml-auto md:ml-0"
            data-ocid="header.button"
          >
            <div className="relative">
              <ShoppingCart size={26} />
              <span className="absolute -top-2 -right-2 bg-orange text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            <span className="font-bold hidden sm:block">Cart</span>
          </button>
        </div>
      </div>

      {/* Tier 3 — Category nav */}
      <div className="bg-header-nav text-white text-sm hidden md:block">
        <div className="max-w-[1400px] mx-auto flex items-center">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <a
                key={link}
                href="/"
                className="px-3 py-2 whitespace-nowrap hover:border hover:border-white rounded text-xs font-medium"
                data-ocid="header.link"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="/"
            className="ml-auto px-3 py-2 text-xs whitespace-nowrap hover:border hover:border-white rounded"
            data-ocid="header.link"
          >
            Customer Service
          </a>
        </div>
      </div>
    </header>
  );
}
