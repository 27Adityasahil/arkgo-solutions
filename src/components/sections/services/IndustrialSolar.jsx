"use client";

import { useState } from "react";
import Image from "next/image";
import { industrialSystems } from "@/data/services";
import { ArrowRight, ImageIcon } from "lucide-react";

export default function IndustrialSolar() {
  const [activeSystem, setActiveSystem] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-4xl mb-12 lg:mb-16">
          <div className="text-sm font-heading font-bold text-secondary uppercase tracking-widest mb-6">
            03 / INDUSTRIAL
          </div>
          
          <div className="flex flex-col gap-y-2 overflow-hidden mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-bold text-primary leading-[1.15]">
              SOLAR SOLUTIONS FOR
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-bold text-primary leading-[1.15]">
              INDUSTRIAL ENERGY REQUIREMENTS
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl">
            ARKGO Solutions provides industrial solar installation services for projects with industrial energy requirements, with the solar solution designed around the specific needs of each project.
          </p>
        </div>

        <div className="w-full h-px bg-border-edge mb-12 lg:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] lg:h-[650px] w-full">
            <div className="absolute inset-0 bg-tint-blue/30 overflow-hidden border border-border-edge">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-0 text-center">
                <div className="w-16 h-16 rounded-sm bg-primary/5 border border-primary/20 flex items-center justify-center mb-4">
                  <ImageIcon className="w-8 h-8 text-primary/40" />
                </div>
                <p className="text-xs font-heading font-bold text-text-muted uppercase tracking-widest mb-2">
                  INDUSTRIAL PROJECT PHOTOGRAPH
                </p>
                <p className="text-xs text-text-muted/60 max-w-xs">
                  Upload an authentic industrial installation photo to /images/projects/industrial-installation.jpg
                </p>
              </div>

              <div className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/industrial-installation.jpg"
                  alt="Industrial solar installation by ARKGO Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary/40 pointer-events-none" />
            <div className="hidden lg:block absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary/40 pointer-events-none" />
            <div className="hidden lg:block absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary/40 pointer-events-none" />
            <div className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary/40 pointer-events-none" />
          </div>

          <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-secondary rounded-sm flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary uppercase tracking-wide">
                  INDUSTRIAL SOLAR INSTALLATION
                </h3>
              </div>
              <p className="text-base lg:text-lg text-text-primary font-sans leading-relaxed mt-2 lg:mt-3">
                Solar installation services for industrial energy requirements, supported by ARKGO&apos;s system design and installation capabilities.
              </p>
            </div>

            <div className="flex flex-col">
              {industrialSystems.map((system) => (
                <div 
                  key={system.id} 
                  className="group relative flex flex-col cursor-default"
                  onMouseEnter={() => setActiveSystem(system.id)}
                  onMouseLeave={() => setActiveSystem(null)}
                >
                  <div className={`system-divider w-full h-px transition-colors duration-300 ${activeSystem === system.id ? 'bg-secondary' : 'bg-border-edge'}`} />

                  <div className="flex items-start py-5 md:py-6 gap-4 md:gap-6">
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-heading font-bold text-text-dark uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-primary flex items-center gap-3">
                        <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${activeSystem === system.id ? 'bg-secondary' : 'bg-primary/20'}`} />
                        {system.title}
                      </h4>
                      <p className="text-sm md:text-base text-text-muted leading-relaxed pl-4">
                        {system.description}
                      </p>
                    </div>

                    <div className="flex w-6 h-6 flex-shrink-0 items-center justify-center pt-1">
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activeSystem === system.id ? 'text-secondary translate-x-1 opacity-100' : 'text-border-edge opacity-0 -translate-x-2'}`} />
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full h-px bg-border-edge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
