"use client";

import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";

export default function SuryaGhar() {
  return (
    <section className="py-20 lg:py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="flex items-start mb-6">
              <div className="w-[3px] h-4 bg-secondary mr-4 mt-0.5" />
              <div className="text-sm font-heading font-bold text-white uppercase tracking-widest">
                GOVERNMENT INITIATIVE
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold text-white leading-[1.1] mb-6">
              SOLAR SUPPORT FOR PM SURYA GHAR YOJANA.
            </h2>
            <p className="text-base md:text-lg text-white/80 font-sans leading-relaxed mb-10 max-w-lg">
              With experience supporting solar adoption under PM Surya Ghar Yojana, ARKGO helps consumers understand their rooftop solar requirements and move towards installation. We provide guidance on selecting the right system for your home.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-secondary text-white hover:bg-[#b83b27] rounded-[4px] font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors group"
            >
              GET SOLAR GUIDANCE
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="relative w-full max-w-md aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/10 p-12">
                <Sun className="w-full h-full text-secondary opacity-80" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                     <span className="block text-2xl font-heading font-bold text-white mb-2 uppercase tracking-wide">ROOFTOP SOLAR</span>
                     <span className="block text-sm font-sans text-white/70">EMPOWERING HOMES</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
