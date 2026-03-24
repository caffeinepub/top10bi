import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    toast.success("You're subscribed! Welcome to Top10bi.");
  };

  return (
    <section className="bg-[#F9F9F9] border-t border-[#EAEAEA] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
        >
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-price-orange mb-2">
              Newsletter
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground uppercase mb-3">
              Stay Inspired
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Join 50,000+ subscribers for exclusive deals, new arrivals, and
              style inspiration — delivered straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 lg:min-w-[420px]"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-ocid="newsletter.input"
              className="flex-1 h-12 text-sm"
              disabled={submitted}
              required
            />
            <button
              type="submit"
              data-ocid="newsletter.submit_button"
              disabled={submitted}
              className="bg-orange text-gray-900 text-sm font-bold uppercase tracking-widest px-8 h-12 hover:bg-orange-dark disabled:opacity-60 transition-colors whitespace-nowrap rounded"
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
