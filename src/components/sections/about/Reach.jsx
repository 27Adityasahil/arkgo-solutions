"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Reach() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col mb-12 lg:mb-16 max-w-3xl">
          <div className="flex items-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Where We Work
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight mb-6">
            Rooted In Bihar. Working Across The State.
          </h2>
          
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            ARKGO Solutions is currently working across all districts of Bihar, while its office is located in Sakra Faridpur, Dholi, Muzaffarpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 relative flex justify-center bg-white p-8 rounded-none shadow-none border border-gray-200" aria-label="Bihar map representing ARKGO Solutions' work across all districts of Bihar, with a marker in Muzaffarpur.">
            <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
              <Image 
                src="/images/map.png" 
                alt="ARKGO Solutions Map of Bihar" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div 
                className="absolute left-[45%] top-[35%] flex flex-col items-center -translate-x-1/2 -translate-y-full"
                aria-label="ARKGO Solutions office in Sakra Faridpur, Dholi, Muzaffarpur, Bihar."
              >
                <div className="bg-primary px-3 py-1.5 text-[10px] font-heading font-bold text-white uppercase tracking-widest shadow-none mb-1 whitespace-nowrap rounded-none border border-primary">
                  ARKGO OFFICE
                </div>
                <MapPin className="w-6 h-6 text-secondary" />
                <div className="w-1.5 h-1.5 bg-secondary rounded-none mt-1" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-10">
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em] block mb-2">
                Working Across
              </span>
              <span className="text-2xl lg:text-3xl font-heading font-extrabold text-primary uppercase tracking-tight">
                All Districts of Bihar
              </span>
            </div>

            <div className="bg-white p-8 md:p-10 border-t-4 border-primary shadow-none rounded-none border-b border-l border-r border-gray-200">
              <div className="text-xs font-heading font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4 inline-block w-full">
                Office Location
              </div>
              
              <h3 className="text-xl font-heading font-extrabold text-primary uppercase tracking-wider mb-6">
                ARKGO Solutions
              </h3>
              
              <address className="text-base text-gray-600 font-sans not-italic leading-relaxed">
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
