import AboutHero from "@/components/sections/about/AboutHero";
import CompanyStory from "@/components/sections/about/CompanyStory";
import Capabilities from "@/components/sections/about/Capabilities";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata = {
  title: 'About ARKGO Solutions | Building a Cleaner Energy Future',
  description: 'ARKGO Solutions is a rapidly growing solar energy company committed to providing reliable, sustainable and cost-effective solar power solutions across Bihar.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <Capabilities />
      <AboutCTA />
    </>
  );
}
