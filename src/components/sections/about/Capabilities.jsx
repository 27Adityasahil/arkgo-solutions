"use client";

const capabilities = [
  {
    id: "01",
    title: "CONSULT & ASSESS",
    services: [
      "Solar Consultation",
      "Site Survey"
    ]
  },
  {
    id: "02",
    title: "DESIGN",
    services: [
      "Solar System Design"
    ]
  },
  {
    id: "03",
    title: "INSTALL & INTEGRATE",
    services: [
      "Solar Panel Installation",
      "Solar Installation",
      "Inverter Installation",
      "Battery Solutions"
    ]
  },
  {
    id: "04",
    title: "SERVICE & SUPPORT",
    services: [
      "Solar Maintenance",
      "Solar Repair & Service"
    ]
  }
];

export default function Capabilities() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="flex items-center mb-6">
              <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                Our Capabilities
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight mb-6">
              From Consultation to Long-Term System Support.
            </h2>
            
            <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-lg">
              ARKGO Solutions&apos; capabilities extend across consultation, site assessment, system design, installation and post-installation service.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <div 
                key={capability.id}
                className="bg-white p-8 rounded-none shadow-none border border-gray-200 flex flex-col h-full"
              >
                <div className="text-3xl font-heading font-black text-secondary mb-4">
                  {capability.id}
                </div>

                <h3 className="text-xl font-heading font-extrabold text-primary uppercase tracking-wide mb-6">
                  {capability.title}
                </h3>
                
                <ul className="flex flex-col gap-3 mt-auto">
                  {capability.services.map((service, sIndex) => (
                    <li key={sIndex} className="text-gray-600 font-sans font-medium flex items-center">
                      <span className="w-2 h-2 rounded-none bg-primary mr-3 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
