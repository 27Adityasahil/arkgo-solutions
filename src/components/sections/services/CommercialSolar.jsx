"use client";

import { useState } from "react";
import Image from "next/image";
import { commercialSystems } from "@/data/services";
import { ArrowRight, ImageIcon } from "lucide-react";

export default function CommercialSolar() {
  const [activeSystem, setActiveSystem] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-base">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
            <div className="mb-10 lg:mb-14">
              <div className="text-sm font-heading font-bold text-secondary uppercase tracking-widest mb-6">
                02 / COMMERCIAL
              </div>
              
              <div className="flex flex-col gap-y-2 overflow-hidden mb-6 max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  SOLAR SOLUTIONS FOR
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  COMMERCIAL ENERGY
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  REQUIREMENTS
                </h2>
              </div>
              
              <p className="text-lg text-text-muted leading-relaxed max-w-xl mb-12">
                ARKGO Solutions provides commercial solar installation services for businesses and commercial energy requirements, with solutions designed around the needs of each project.
              </p>

              <div className="p-6 md:p-8 bg-white border border-border-edge rounded-[4px] shadow-sm mb-12">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary uppercase tracking-wide mb-3">
                  COMMERCIAL SOLAR INSTALLATION
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  Professional installation of solar systems for commercial facilities, offices, and business premises.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              {commercialSystems.map((system) => (
                <div 
                  key={system.id} 
                  className="group relative flex flex-col cursor-default"
                  onMouseEnter={() => setActiveSystem(system.id)}
                  onMouseLeave={() => setActiveSystem(null)}
                >
                  <div className={`system-divider w-full h-px transition-colors duration-300 ${activeSystem === system.id ? 'bg-secondary' : 'bg-border-edge'}`} />

                  <div className="flex items-start md:items-center py-6 md:py-8 gap-6 md:gap-8">
                    <div className="w-8 md:w-10 flex-shrink-0 pt-1 md:pt-0">
                      <span className={`text-lg font-heading font-bold transition-colors duration-300 ${activeSystem === system.id ? 'text-secondary' : 'text-primary'}`}>
                        {system.number}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-heading font-bold text-text-dark uppercase tracking-wide mb-1 transition-colors duration-300 group-hover:text-primary">
                        {system.title}
                      </h4>
                      <p className="text-sm md:text-base text-text-muted leading-relaxed">
                        {system.description}
                      </p>
                    </div>

                    <div className="hidden sm:flex w-8 h-8 flex-shrink-0 items-center justify-center">
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activeSystem === system.id ? 'text-secondary translate-x-1 opacity-100' : 'text-border-edge opacity-0 -translate-x-2'}`} />
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full h-px bg-border-edge" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 relative h-[500px] lg:h-[750px] w-full order-1 lg:order-2">
            <div className="absolute inset-0 bg-white rounded-[4px] border border-border-edge overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-0 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                  <ImageIcon className="w-8 h-8 text-primary/40" />
                </div>
                <p className="text-xs font-heading font-bold text-text-muted uppercase tracking-widest mb-2">
                  COMMERCIAL INSTALLATION
                </p>
                <p className="text-xs text-text-muted/60 max-w-xs">
                  Upload a high-quality commercial installation photo to /images/projects/commercial-installation.jpg
                </p>
              </div>

              <div className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/commercial-installation.jpg"
                  alt="Commercial solar installation by ARKGO Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="hidden lg:block absolute -top-4 -right-4 w-16 h-16 border-t border-r border-border-edge pointer-events-none" />
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-border-edge pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
