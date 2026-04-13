import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageStrip from "@/components/ImageStrip";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-grain min-h-screen relative overflow-hidden bg-ivory">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ImageStrip />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
