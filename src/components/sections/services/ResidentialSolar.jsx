"use client";

import { useState } from "react";
import Image from "next/image";
import { residentialServices } from "@/data/services";
import { ArrowRight, ImageIcon } from "lucide-react";

export default function ResidentialSolar() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 relative h-[500px] lg:h-[700px] w-full">
            <div className="absolute inset-0 bg-tint-blue/30 rounded-[4px] border border-border-edge overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-0 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                  <ImageIcon className="w-8 h-8 text-primary/40" />
                </div>
                <p className="text-xs font-heading font-bold text-text-muted uppercase tracking-widest mb-2">
                  RESIDENTIAL INSTALLATION
                </p>
                <p className="text-xs text-text-muted/60 max-w-xs">
                  Upload a high-quality residential installation photo to /images/projects/residential-installation.jpg
                </p>
              </div>

              <div className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/residential-installation.jpg"
                  alt="Residential solar installation by ARKGO Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-12 lg:mb-16">
              <div className="text-sm font-heading font-bold text-secondary uppercase tracking-widest mb-6">
                01 / RESIDENTIAL
              </div>
              
              <div className="flex flex-col gap-y-2 overflow-hidden mb-6 max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  SOLAR SOLUTIONS FOR
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  RESIDENTIAL ENERGY
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  REQUIREMENTS
                </h2>
              </div>
              
              <p className="text-lg text-text-muted leading-relaxed max-w-xl">
                ARKGO Solutions provides residential solar installation services designed around the energy requirements of homes and residential properties.
              </p>
            </div>

            <div className="flex flex-col">
              {residentialServices.map((service) => (
                <div 
                  key={service.id} 
                  className="group relative flex flex-col cursor-default"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className={`service-divider w-full h-px transition-colors duration-300 ${activeService === service.id ? 'bg-secondary' : 'bg-border-edge'}`} />

                  <div className="flex items-start md:items-center py-6 md:py-8 gap-6 md:gap-10">
                    <div className="w-8 md:w-12 flex-shrink-0 pt-1 md:pt-0">
                      <span className={`text-xl font-heading font-bold transition-colors duration-300 ${activeService === service.id ? 'text-secondary' : 'text-primary'}`}>
                        {service.number}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-heading font-bold text-text-dark uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-primary">
                        {service.title}
                      </h3>
                      <p className="text-base text-text-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="hidden md:flex w-8 h-8 flex-shrink-0 items-center justify-center">
                      <ArrowRight className={`w-5 h-5 transition-all duration-300 ${activeService === service.id ? 'text-secondary translate-x-1 opacity-100' : 'text-border-edge opacity-0 -translate-x-2'}`} />
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
