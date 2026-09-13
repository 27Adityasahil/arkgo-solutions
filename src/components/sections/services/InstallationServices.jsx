"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const installationServices = [
  {
    id: "panel-installation",
    number: "01",
    title: "SOLAR PANEL INSTALLATION",
    description: "Installation of solar panels as part of the project's solar system setup.",
    highlights: ["PANEL INSTALLATION", "SYSTEM SETUP", "PROJECT EXECUTION"]
  },
  {
    id: "solar-installation",
    number: "02",
    title: "SOLAR INSTALLATION",
    description: "Solar installation services for residential, commercial and industrial project requirements.",
    highlights: ["RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL"]
  }
];

export default function InstallationServices() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 xl:col-span-6 relative h-[500px] lg:h-[750px] w-full">
            <div className="absolute inset-0 bg-[#EAF6FF]/30 border border-[#DCE4E8] overflow-hidden">
               <div className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/installation-execution.jpg"
                  alt="Solar panel installation completed by ARKGO Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#0755A5]/30 hidden lg:block" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#0755A5]/30 hidden lg:block" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#0755A5]/30 hidden lg:block" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#0755A5]/30 hidden lg:block" />
          </div>

          <div className="lg:col-span-7 xl:col-span-6 flex flex-col pt-4">
            <div className="mb-12">
              <div className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#0755A5]" />
                06 / INSTALLATION
              </div>
              
              <div className="flex flex-col gap-y-2 overflow-hidden mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight">
                  FROM SOLAR SYSTEM DESIGN
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight">
                  TO ON-SITE INSTALLATION
                </h2>
              </div>
              
              <div className="space-y-6 max-w-xl">
                <p className="text-lg md:text-xl text-[#53616F] leading-relaxed">
                  ARKGO Solutions provides solar panel installation and solar installation services for residential, commercial and industrial requirements.
                </p>
                <p className="text-[15px] lg:text-[16px] text-text-primary font-sans leading-relaxed mb-4">
                  Installation is carried out as part of the project&apos;s planned solar system setup, based on the requirements and configuration determined for the project.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              {installationServices.map((service) => (
                <div 
                  key={service.id}
                  className="group relative flex flex-col cursor-pointer"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className={`w-full h-px transition-colors duration-300 ${activeService === service.id ? 'bg-[#0755A5]' : 'bg-[#DCE4E8]'}`} />
                  
                  <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-2">
                       <span className={`text-3xl font-heading font-light tracking-tighter transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#DCE4E8]'}`}>
                        {service.number}
                       </span>
                    </div>

                    <div className="md:col-span-10">
                       <div className="flex justify-between items-start mb-4">
                         <h3 className={`text-xl lg:text-2xl font-heading font-bold uppercase tracking-wide transition-colors duration-300 ${activeService === service.id ? 'text-[#0755A5]' : 'text-[#17202A]'}`}>
                           {service.title}
                         </h3>
                         <ArrowRight className={`w-5 h-5 transition-all duration-300 ${activeService === service.id ? 'text-[#48A942] opacity-100 translate-x-1' : 'text-[#DCE4E8] opacity-0'}`} />
                       </div>
                       
                       <p className="text-base text-[#53616F] leading-relaxed mb-6">
                         {service.description}
                       </p>

                       <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                         {service.highlights.map((highlight, idx) => (
                           <div key={idx} className="flex items-center gap-2">
                             <Check className="w-3.5 h-3.5 text-[#0755A5] opacity-60" />
                             <span className="text-xs font-mono text-[#53616F] uppercase tracking-wider">
                               {highlight}
                             </span>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full h-px bg-[#DCE4E8]" />
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 py-8 border-t border-b border-[#DCE4E8]/50 bg-[#FAFCF9]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
            <span className="text-sm font-heading font-bold text-[#53616F] uppercase tracking-widest">
              DESIGN
            </span>
            <ArrowRight className="w-4 h-4 text-[#0755A5] rotate-90 md:rotate-0" />
            <span className="text-sm font-heading font-bold text-[#53616F] uppercase tracking-widest">
              INSTALLATION
            </span>
            <ArrowRight className="w-4 h-4 text-[#48A942] rotate-90 md:rotate-0" />
            <span className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest">
              SOLAR SYSTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
