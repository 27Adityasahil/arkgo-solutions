"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ServiceReach() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#F4F7FA] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[500px]">
              <Image 
                src="/images/map.png" 
                alt="ARKGO Solutions Map of Bihar" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute top-[35%] left-[45%] flex flex-col items-center animate-bounce">
                <div className="bg-white border border-secondary px-3 py-1 mb-1">
                  <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-wider">
                    ARKGO OFFICE
                  </span>
                </div>
                <MapPin className="w-6 h-6 text-secondary" fill="white" />
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1"></div>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 text-[80px] md:text-[120px] font-heading font-black text-primary/5 pointer-events-none select-none z-0 tracking-tighter">
              BIHAR
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-widest mb-2 block">
                WORKING ACROSS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold text-primary leading-[1.1] tracking-tight">
                ALL DISTRICTS OF BIHAR
              </h2>
            </div>

            <div className="bg-white border-t-4 border-primary shadow-sm p-8 md:p-10 relative">
              <div className="absolute top-8 right-8 grid grid-cols-3 gap-1 opacity-10">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-primary rounded-full"></div>
                ))}
              </div>
              
              <div className="text-xs font-heading font-bold text-[#8FA8BF] uppercase tracking-widest mb-6 pb-6 border-b border-[#E5E7EB]">
                OFFICE LOCATION
              </div>
              
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary mb-4 tracking-tight">
                ARKGO SOLUTIONS
              </h3>
              
              <address className="not-italic text-base text-[#596773] font-sans leading-relaxed">
                Subaidya Complex<br />
                Sakra Faridpur<br />
                Dholi<br />
                Muzaffarpur, Bihar 843105
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
