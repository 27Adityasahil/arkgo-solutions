import Hero from "@/components/sections/Hero";
import SolarCalculator from "@/components/sections/SolarCalculator";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyArkgo from "@/components/sections/WhyArkgo";
import Projects from "@/components/sections/Projects";
import EnquirySection from "@/components/sections/EnquirySection";

export default function Home() {
  return (
    <>
      <Hero />
      <SolarCalculator />
      <About />
      <Services />
      <WhyArkgo />
      <Projects />
      <EnquirySection />
    </>
  );
}
