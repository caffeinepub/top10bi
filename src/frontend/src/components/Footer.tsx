import { ChevronUp, Globe } from "lucide-react";

const footerLinks = [
  {
    title: "Get to Know Us",
    links: ["About Top10bi", "Careers", "Press Releases", "Sustainability"],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell on Top10bi",
      "Become Affiliate",
      "Advertise Products",
      "Self-Publish",
    ],
  },
  {
    title: "Payment Products",
    links: [
      "Top10bi Rewards Visa",
      "Gift Cards",
      "Reload Balance",
      "Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Easy Returns",
      "100% Purchase Protection",
      "Help Center",
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-header-bg text-white mt-0">
      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full bg-[oklch(0.22_0.03_250)] hover:bg-[oklch(0.27_0.03_250)] py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
        data-ocid="footer.button"
      >
        <ChevronUp size={16} /> Back to top
      </button>

      {/* Links */}
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10 pb-8">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-bold text-sm mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-white text-xs transition-colors"
                      data-ocid="footer.link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center gap-4">
          {/* Logo */}
          <img
            src="/assets/generated/top10bi-logo-transparent.dim_400x120.png"
            alt="Top10bi"
            className="h-7 w-auto brightness-0 invert opacity-70"
          />

          {/* Payment badges */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center md:ml-4">
            {["VISA", "MC", "PayPal", "Amex", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="border border-white/20 text-white/60 text-[10px] font-bold px-2 py-0.5 rounded"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Language */}
          <button
            type="button"
            className="flex items-center gap-1 border border-white/20 text-white/60 text-xs px-3 py-1 rounded hover:border-white/40 ml-0 md:ml-auto"
            data-ocid="footer.button"
          >
            <Globe size={12} /> English
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-gray-500 space-y-1">
          <p>© {year} Top10bi, Inc. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              data-ocid="footer.link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
