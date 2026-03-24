import { Headphones, RotateCcw, Shield, Truck } from "lucide-react";

const items = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $35" },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  { icon: Shield, title: "Secure Payment", desc: "256-bit SSL encryption" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-t border-b border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3 px-6 py-3">
            <div className="flex-shrink-0">
              <Icon size={28} className="text-price-orange" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
