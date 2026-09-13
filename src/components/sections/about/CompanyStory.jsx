"use client";

import Image from "next/image";

export default function CompanyStory() {
  const flowSteps = [
    { num: "01", label: "CONSULT", desc: "Solar Consultation" },
    { num: "02", label: "DESIGN", desc: "Solar System Design" },
    { num: "03", label: "INSTALL", desc: "Solar Installation" },
    { num: "04", label: "SUPPORT", desc: "Maintenance & Repair" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative w-full h-[320px] md:h-[450px] lg:h-[600px] rounded-none overflow-hidden shadow-none border border-gray-200 order-2 lg:order-1">
            <Image
              src="/images/ai/arkgo-solar-company-history.webp"
              alt="ARKGO Solutions installation team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                The Company
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight mb-6">
              From Solar Requirement to Complete System Solution.
            </h2>

            <p className="text-lg text-gray-600 font-sans leading-relaxed mb-6">
              ARKGO Solutions provides solar energy solutions for residential, commercial and industrial requirements. Its service capabilities cover the project journey from solar consultation and site survey through system design, installation and ongoing maintenance and service.
            </p>
            
            <p className="text-lg text-gray-600 font-sans leading-relaxed mb-10">
              With work extending across all districts of Bihar, ARKGO Solutions focuses on practical solar applications based on the requirements of each project.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {flowSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-[#F8FAFC] border border-gray-200 p-4 rounded-none flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-none bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-none text-primary font-heading font-bold">
                    {step.num}
                  </div>
                  <div>
                    <span className="block text-sm font-heading font-bold text-primary uppercase tracking-wider">
                      {step.label}
                    </span>
                    <span className="block text-xs font-sans text-gray-500 mt-0.5">
                      {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
