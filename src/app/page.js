import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Projects from "@/components/sections/Projects";
import Recognition from "@/components/sections/Recognition";
import WhyArkgo from "@/components/sections/WhyArkgo";
import Reach from "@/components/sections/Reach";
import Systems from "@/components/sections/Systems";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Products />
      <Projects />
      <Recognition />
      <WhyArkgo />
      <Reach />
      <Systems />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
