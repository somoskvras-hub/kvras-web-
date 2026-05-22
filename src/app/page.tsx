import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Services } from "@/components/Services";
import { RouteSection } from "@/components/RouteSection";
import { GoatVideo } from "@/components/GoatVideo";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Services />
      <RouteSection />
      <GoatVideo />
      <CTA />
      <Footer />
    </main>
  );
}
