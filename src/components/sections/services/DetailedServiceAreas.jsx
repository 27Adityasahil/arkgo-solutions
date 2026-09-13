"use client";

const serviceAreas = [
  {
    id: "01",
    title: "CONSULTATION & SITE ASSESSMENT",
    description: "Understand the project's requirements and assess the site before moving toward system design.",
    services: ["Solar Consultation", "Site Survey"]
  },
  {
    id: "02",
    title: "SYSTEM DESIGN",
    description: "Develop a system configuration around the project's application, site conditions and energy requirement.",
    services: ["Solar System Design"]
  },
  {
    id: "03",
    title: "INSTALLATION",
    description: "Installation of the major components required for the selected solar system configuration.",
    services: ["Solar Panel Installation", "Inverter Installation", "Battery Solutions"]
  },
  {
    id: "04",
    title: "MAINTENANCE & SERVICE",
    description: "Post-installation maintenance, repair and service support for solar systems.",
    services: ["Solar Maintenance", "Solar Repair & Service"]
  }
];

export default function DetailedServiceAreas() {
  return (
    <section className="relative pt-[80px] lg:pt-[120px] pb-16 lg:pb-20 bg-white overflow-hidden z-0">
      <div 
        className="absolute top-10 right-10 lg:top-16 lg:right-16 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary/5 leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        04
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-5 flex flex-col relative z-10">
            <div className="flex items-center mb-6 lg:mb-8">
              <span className="w-1 h-5 bg-secondary mr-4 block" />
              <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
                SERVICE CAPABILITIES
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-6 lg:mb-8">
              EVERY STAGE REQUIRES THE RIGHT SOLAR CAPABILITY.
            </h2>
            
            <p className="text-base lg:text-lg text-text-primary font-sans leading-relaxed max-w-lg">
              ARKGO Solutions combines consultation, site assessment, system design, installation and post-installation support to address different solar project requirements.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col w-full lg:mt-0">
            {serviceAreas.map((area) => (
              <div 
                key={area.id}
                className="group flex flex-col cursor-default"
              >
                <div className="w-full h-[1px] bg-[#DCE3E8] mb-6 lg:mb-8" />

                <div className="flex flex-col mb-12 lg:mb-16">
                  <div className="text-[20px] lg:text-[24px] font-heading font-bold text-[#8FA8BF] mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-secondary">
                    {area.id}
                  </div>

                  <h3 className="text-2xl lg:text-[28px] font-heading font-bold text-primary uppercase tracking-wider mb-3 lg:mb-4">
                    {area.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-2 mb-4 lg:mb-5">
                    {area.services.map((service, sIndex) => (
                      <div key={sIndex} className="flex items-center text-[14px] lg:text-[16px] font-heading font-bold text-primary uppercase tracking-widest">
                        {service}
                        {sIndex < area.services.length - 1 && (
                          <span className="text-primary/30 mx-3">|</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-[16px] lg:text-[17px] text-text-primary font-sans leading-[1.6] max-w-[650px]">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="w-full h-[1px] bg-[#DCE3E8]" />
          </div>
        </div>
      </div>
    </section>
  );
}

