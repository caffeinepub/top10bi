import { Toaster } from "@/components/ui/sonner";
import DealsSection from "./components/DealsSection";
import FlashDealsSection from "./components/FlashDealsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PromoBanners from "./components/PromoBanners";
import TopPicksSection from "./components/TopPicksSection";
import { LocationProvider } from "./context/LocationContext";

export default function App() {
  return (
    <LocationProvider>
      <div className="min-h-screen bg-background font-body">
        <Toaster position="top-right" />
        <Header />
        <main>
          <HeroSection />
          <FlashDealsSection />
          <PromoBanners />
          <TopPicksSection />
          <DealsSection />
        </main>
        <Footer />
      </div>
    </LocationProvider>
  );
}
