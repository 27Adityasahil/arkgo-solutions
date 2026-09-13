"use client";

import { useState } from "react";

const processStages = [
  {
    id: "understand",
    number: "01",
    title: "UNDERSTAND",
    description: "Discuss the customer's energy requirements and project objectives.",
    service: "Solar Consultation"
  },
  {
    id: "assess",
    number: "02",
    title: "ASSESS",
    description: "Assess the project site and relevant conditions before moving toward system design.",
    service: "Site Survey"
  },
  {
    id: "design",
    number: "03",
    title: "DESIGN",
    description: "Develop the appropriate solar system configuration based on the project requirements.",
    service: "Solar System Design"
  },
  {
    id: "install",
    number: "04",
    title: "INSTALL",
    description: "Proceed with solar panel and system installation according to the project requirements and configuration.",
    service: "Solar Installation"
  },
  {
    id: "support",
    number: "05",
    title: "SUPPORT",
    description: "Provide maintenance, repair and service support as required after installation.",
    service: "Solar Maintenance"
  }
];

export default function HowArkgoWorks() {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-[#FAFCF9] relative overflow-hidden border-t border-[#DCE4E8]/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24 flex flex-col items-center">
          <div className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-[#0755A5]" />
            OUR APPROACH
            <span className="w-8 h-px bg-[#0755A5]" />
          </div>
          
          <div className="flex flex-col gap-y-2 overflow-hidden mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight">
              FROM REQUIREMENT TO
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight">
              SOLAR SOLUTION
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-[#53616F] leading-relaxed max-w-3xl">
            ARKGO Solutions brings together consultation, site assessment, system design, installation and ongoing service to address different solar energy requirements.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-px bg-[#DCE4E8] z-0">
             <div className="absolute inset-0 h-full bg-[#0755A5]/20" />
          </div>

          <div className="lg:hidden absolute top-[44px] bottom-0 left-[23px] w-px bg-[#DCE4E8] z-0">
             <div className="absolute inset-0 w-full bg-[#0755A5]/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-x-8 relative z-10">
            {processStages.map((stage, index) => (
              <div 
                key={stage.id}
                className="group relative flex flex-row lg:flex-col items-start cursor-default"
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
              >
                <div className="flex flex-col items-center flex-shrink-0 lg:w-full">
                  <div className="w-12 h-12 lg:w-24 lg:h-24 bg-[#FAFCF9] border border-[#DCE4E8] rounded-full flex items-center justify-center transition-colors duration-300 relative z-10"
                    style={{
                      borderColor: activeStage === stage.id ? '#48A942' : '#DCE4E8',
                    }}
                  >
                    <span className="text-lg lg:text-3xl font-heading font-light tracking-tighter transition-colors duration-300"
                      style={{ color: activeStage === stage.id ? '#48A942' : '#0755A5' }}
                    >
                      {stage.number}
                    </span>
                  </div>

                  <div className="hidden lg:block w-px h-6 bg-[#DCE4E8]" />
                </div>

                <div className="ml-6 lg:ml-0 lg:mt-6 flex flex-col pt-2 lg:pt-0">
                  <h3 className="text-lg lg:text-xl font-heading font-bold uppercase tracking-wide text-[#17202A] mb-3 transition-colors duration-300"
                    style={{ color: activeStage === stage.id ? '#0755A5' : '#17202A' }}
                  >
                    {stage.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-[#53616F] leading-relaxed mb-4 lg:mb-6 flex-grow">
                    {stage.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block text-[10px] lg:text-xs font-mono text-[#0755A5] uppercase tracking-widest px-2 py-1 bg-[#EAF6FF] rounded-sm transition-colors duration-300"
                      style={{
                        backgroundColor: activeStage === stage.id ? '#EFF8EA' : '#EAF6FF',
                        color: activeStage === stage.id ? '#48A942' : '#0755A5'
                      }}
                    >
                      {stage.service}
                    </span>
                  </div>
                </div>

                <div className="hidden lg:block absolute top-[44px] left-1/2 w-full h-[2px] bg-[#48A942] origin-left transition-transform duration-500 transform scale-x-0 opacity-0 -translate-y-1/2 z-0"
                    style={{
                      transform: activeStage === stage.id && index !== processStages.length - 1 ? 'scaleX(1)' : 'scaleX(0)',
                      opacity: activeStage === stage.id && index !== processStages.length - 1 ? 1 : 0
                    }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
