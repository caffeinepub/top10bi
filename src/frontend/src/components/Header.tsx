import {
  ChevronDown,
  LogIn,
  MapPin,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const myAccountItems = [
  "My Orders",
  "My Cancelled Orders",
  "My Wishlist",
  "Checkout",
];

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(3);
  const [locationOpen, setLocationOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { selectedLocation, setSelectedLocation } = useLocation();
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void locationRef;
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tier 1 — Top utility bar: light pastel red */}
      <div style={{ background: "#FFD5D5" }} className="text-xs py-1.5">
        <div className="max-w-[1400px] mx-auto px-3 flex items-center justify-end">
          <div className="flex items-center gap-1">
            {/* Welcome */}
            <div className="flex items-center gap-1 px-2 py-0.5">
              <span className="text-[#AFAB68] text-xs font-medium tracking-wide">
                Welcome
              </span>
            </div>

            <span style={{ color: "#AFAB68", opacity: 0.4 }}>|</span>

            {/* My Account dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAccountOpen(true)}
              onMouseLeave={() => setAccountOpen(false)}
            >
              <button
                type="button"
                className="account-trigger flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 hover:bg-[#AFAB68]/15"
                data-ocid="header.button"
              >
                <div className="w-6 h-6 rounded-full bg-[#AFAB68]/20 flex items-center justify-center">
                  <User size={12} className="text-[#AFAB68]" />
                </div>
                <span className="text-[#AFAB68] font-semibold text-xs tracking-wide">
                  My Account
                </span>
              </button>

              {accountOpen && (
                <div className="absolute top-full right-0 mt-1.5 w-56 bg-white border border-[#AFAB68]/25 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="bg-[#FFD5D5] px-4 py-3 border-b border-[#AFAB68]/20">
                    <p className="text-[#AFAB68] font-bold text-sm">
                      My Account
                    </p>
                    <p className="text-[#AFAB68]/70 text-[11px] mt-0.5">
                      Manage your orders &amp; profile
                    </p>
                  </div>
                  {myAccountItems.map((item) => (
                    <a
                      key={item}
                      href="/"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-[#AFAB68] transition-colors text-sm font-medium border-b border-[#AFAB68]/10 last:border-0"
                      style={{ color: "#AFAB68" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#F48CA0";
                        e.currentTarget.style.color = "#AFAB68";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#AFAB68";
                      }}
                      data-ocid="header.link"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <span style={{ color: "#AFAB68", opacity: 0.4 }}>|</span>

            {/* Log In */}
            <a
              href="/"
              className="login-trigger flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 hover:bg-[#AFAB68]/15"
              data-ocid="header.link"
            >
              <div className="w-6 h-6 rounded-full bg-[#AFAB68]/20 flex items-center justify-center">
                <LogIn size={12} className="text-[#AFAB68]" />
              </div>
              <span className="text-[#AFAB68] font-semibold text-xs tracking-wide">
                Log In
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2 — Main header: light pastel red */}
      <div style={{ background: "#FFD5D5" }} className="px-3 py-2.5">
        <div className="max-w-[1400px] mx-auto flex items-center gap-3">
          {/* Logo */}
          <a href="/" className="flex-shrink-0" data-ocid="header.link">
            <img
              src="/assets/generated/top10bi-logo-transparent.dim_400x120.png"
              alt="Top10bi"
              className="h-9 w-auto"
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
              className="flex items-center gap-1.5 bg-[#F48CA0] border border-[#F48CA0] rounded px-2.5 py-1.5 cursor-pointer hover:bg-[#f07a91] transition-colors"
              data-ocid="header.location_button"
            >
              <MapPin size={14} className="text-[#AFAB68] flex-shrink-0" />
              <div className="text-left">
                <div className="text-[9px] text-[#AFAB68]/80 leading-none">
                  Deliver to
                </div>
                <div className="text-xs text-[#AFAB68] font-semibold leading-tight max-w-[90px] truncate">
                  {selectedLocation}
                </div>
              </div>
              <ChevronDown
                size={12}
                className={`text-[#AFAB68] transition-transform ${locationOpen ? "rotate-180" : ""}`}
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
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-[#AFAB68]/10 transition-colors flex items-center gap-2 ${
                      selectedLocation === loc
                        ? "text-[#AFAB68] font-semibold bg-[#AFAB68]/5"
                        : "text-gray-800"
                    }`}
                    data-ocid="header.location_option"
                  >
                    <MapPin
                      size={12}
                      className={
                        selectedLocation === loc
                          ? "text-[#AFAB68]"
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
          <div
            className="hidden lg:flex items-center gap-2 text-sm flex-shrink-0"
            style={{ color: "#AFAB68" }}
          >
            <ShoppingCart size={18} style={{ color: "#AFAB68" }} />
            <span>Your shopping cart is empty</span>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex h-9 rounded overflow-hidden border border-[#AFAB68]/30 focus-within:border-[#AFAB68]">
            {/* Category select with custom arrow */}
            <div className="relative hidden sm:flex items-center flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-gray-200 text-[#AFAB68] text-xs pl-2 pr-7 h-full border-r border-gray-300 cursor-pointer outline-none w-36"
                data-ocid="header.select"
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <ChevronDown
                size={12}
                style={{ color: "#AFAB68" }}
                className="absolute right-2 pointer-events-none"
              />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search entire store here..."
              className="flex-1 px-3 text-sm outline-none bg-white"
              style={{ color: "#AFAB68" }}
              data-ocid="header.search_input"
            />
            <button
              type="button"
              className="bg-[#F48CA0] hover:bg-[#f07a91] px-4 flex items-center justify-center transition-colors gap-1.5"
              data-ocid="header.button"
            >
              <Search size={16} style={{ color: "#AFAB68" }} />
              <span
                className="font-bold text-sm hidden sm:block"
                style={{ color: "#AFAB68" }}
              >
                Search
              </span>
            </button>
          </div>

          {/* Cart icon — no "Cart" text */}
          <button
            type="button"
            className="flex items-center gap-1 border border-transparent hover:border-[#AFAB68] rounded px-2 py-0.5 cursor-pointer relative ml-auto md:ml-0 transition-all duration-200"
            data-ocid="header.button"
          >
            <div className="relative">
              <ShoppingCart size={26} style={{ color: "#AFAB68" }} />
              <span className="absolute -top-2 -right-2 bg-[#F48CA0] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Tier 3 — Category nav: #F48CA0 background */}
      <div
        style={{ background: "#F48CA0" }}
        className="text-sm hidden md:block"
      >
        <div className="max-w-[1400px] mx-auto flex items-center">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <a
                key={link}
                href="/"
                className="flex items-center gap-1 px-3 py-2 whitespace-nowrap text-[#AFAB68] hover:text-white border border-transparent hover:border-[#AFAB68] hover:bg-[#AFAB68]/10 rounded text-xs font-medium transition-all duration-200"
                data-ocid="header.link"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="/"
            className="ml-auto flex items-center gap-1 px-3 py-2 text-xs whitespace-nowrap text-[#AFAB68] hover:text-white border border-transparent hover:border-[#AFAB68] hover:bg-[#AFAB68]/10 rounded transition-all duration-200"
            data-ocid="header.link"
          >
            Customer Service
          </a>
        </div>
      </div>
    </header>
  );
}
