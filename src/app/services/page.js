import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceCatalogue from "@/components/sections/services/ServiceCatalogue";
import ServiceEngagement from "@/components/sections/services/ServiceEngagement";
import DetailedServiceAreas from "@/components/sections/services/DetailedServiceAreas";
import SolarSystemTypes from "@/components/sections/services/SolarSystemTypes";
import ProjectConsiderationsFAQ from "@/components/sections/services/ProjectConsiderationsFAQ";
import ServiceReach from "@/components/sections/services/ServiceReach";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata = {
  title: 'Services & Solutions | ARKGO Solutions',
  description: 'ARKGO Solutions provides solar systems and supporting services across Bihar, from residential installations to commercial and industrial requirements.'
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCatalogue />
      <ServiceEngagement />
      <DetailedServiceAreas />
      <SolarSystemTypes />
      <ProjectConsiderationsFAQ />
      <ServiceReach />
      <ServicesCTA />
    </>
  );
}
