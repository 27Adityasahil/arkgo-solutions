"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const powerServices = [
  {
    id: "inverter-installation",
    number: "01",
    title: "INVERTER INSTALLATION",
    description: "Inverter installation as part of the solar system setup, according to the requirements and configuration of the project.",
    highlights: ["INVERTER INSTALLATION", "SYSTEM INTEGRATION", "PROJECT REQUIREMENTS"]
  },
  {
    id: "battery-solutions",
    number: "02",
    title: "BATTERY SOLUTIONS",
    description: "Battery solutions for solar energy systems where energy storage is required as part of the project.",
    highlights: ["ENERGY STORAGE", "SYSTEM REQUIREMENTS", "PROJECT CONFIGURATION"]
  }
];

export default function PowerManagement() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-[#FAFCF9] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 relative h-[450px] lg:h-[650px] w-full">
            <div className="absolute inset-0 bg-[#EAF6FF]/30 border border-[#DCE4E8] overflow-hidden">
               <div className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/power-management.jpg"
                  alt="Solar system inverter and battery components by ARKGO Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-end bg-gradient-to-t from-[#FAFCF9]/90 via-[#FAFCF9]/20 to-transparent">
                 <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#48A942]" />
                     <div className="h-px flex-grow bg-[#DCE4E8]" />
                     <span className="text-xs font-mono font-bold text-[#0755A5] uppercase tracking-widest">SYSTEM INTEGRATION</span>
                   </div>

                   <div className="flex items-center justify-between text-[10px] font-mono text-[#53616F] tracking-widest uppercase">
                     <span>SOLAR PANELS</span>
                     <ArrowRight className="w-3 h-3 text-[#F5C542]" />
                     <span>INVERTER</span>
                     <ArrowRight className="w-3 h-3 text-[#48A942]" />
                     <span>ENERGY USE</span>
                   </div>
                 </div>
              </div>
            </div>

            <div className="absolute -left-4 -top-4 w-8 h-8 border-t border-l border-[#DCE4E8] hidden lg:block" />
            <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b border-r border-[#DCE4E8] hidden lg:block" />
          </div>

          <div className="lg:col-span-7 flex flex-col pt-4">
            <div className="mb-12">
              <div className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#0755A5]" />
                07 / POWER MANAGEMENT
              </div>
              
              <div className="flex flex-col gap-y-2 overflow-hidden mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight">
                  SUPPORTING THE SOLAR SYSTEM
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight">
                  BEYOND THE PANELS
                </h2>
              </div>
              
              <p className="text-lg text-[#53616F] leading-relaxed max-w-lg border-l-2 border-[#48A942] pl-5">
                A solar installation depends on more than panels alone. ARKGO Solutions also provides inverter installation and battery solutions as part of applicable solar system requirements.
              </p>
            </div>

            <div className="flex flex-col mt-4">
              {powerServices.map((service) => (
                <div 
                  key={service.id}
                  className="group relative flex flex-col cursor-pointer"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className={`w-full h-px transition-colors duration-300 ${activeService === service.id ? 'bg-[#0755A5]' : 'bg-[#DCE4E8]'}`} />
                  
                  <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-2">
                       <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#DCE4E8]'}`}>
                        {service.number}
                       </span>
                    </div>

                    <div className="md:col-span-10 pr-4 lg:pr-12">
                       <h3 className={`text-xl font-heading font-bold uppercase tracking-wide mb-4 transition-colors duration-300 ${activeService === service.id ? 'text-[#0755A5]' : 'text-[#17202A]'}`}>
                         {service.title}
                       </h3>
                       
                       <p className="text-base text-[#53616F] leading-relaxed mb-6">
                         {service.description}
                       </p>

                       <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-6">
                         {service.highlights.map((highlight, idx) => (
                           <div key={idx} className="flex items-center gap-2">
                             <Check className={`w-3.5 h-3.5 transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#DCE4E8]'}`} />
                             <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${activeService === service.id ? 'text-[#17202A]' : 'text-[#53616F]'}`}>
                               {highlight}
                             </span>
                           </div>
                         ))}
                       </div>

                       <div className="flex items-center gap-2">
                         <span className={`text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 ${activeService === service.id ? 'text-[#0755A5]' : 'text-transparent'}`}>
                           EXPLORE
                         </span>
                         <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activeService === service.id ? 'text-[#48A942] opacity-100 translate-x-1' : 'opacity-0 -translate-x-4'}`} />
                       </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full h-px bg-[#DCE4E8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
