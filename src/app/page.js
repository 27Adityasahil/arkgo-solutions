import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import DistributionRetail from "@/components/sections/DistributionRetail";
import Products from "@/components/sections/Products";
import SuryaGhar from "@/components/sections/SuryaGhar";
import Projects from "@/components/sections/Projects";
import EnquirySection from "@/components/sections/EnquirySection";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <DistributionRetail />
      <Products />
      <SuryaGhar />
      <Projects />
      <EnquirySection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
