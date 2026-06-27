import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
