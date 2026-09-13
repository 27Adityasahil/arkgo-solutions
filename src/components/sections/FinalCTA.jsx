"use client";

import { useQuoteModal } from "@/contexts/QuoteModalContext";

export default function FinalCTA() {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center relative z-10">
        
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-6">
            <span className="inline-block bg-secondary text-primary font-bold px-4 py-1 uppercase tracking-widest text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] border border-primary">
              TAKE THE NEXT STEP
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight text-white uppercase">
            READY TO SWITCH TO SOLAR?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 font-sans leading-relaxed mb-10 max-w-2xl font-medium">
            Talk to ARKGO about the right solar solution for your home, business, or project.
          </p>

          <button 
            onClick={() => openModal()}
            className="inline-flex items-center justify-center bg-white text-primary font-sans font-bold text-lg px-10 py-5 hover:bg-gray-100 transition-colors cursor-pointer uppercase tracking-wide border-2 border-primary shadow-[4px_4px_0px_rgba(255,193,7,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_rgba(255,193,7,1)] duration-200"
          >
            CONTACT FOR SOLAR PROJECT
          </button>
        </div>

      </div>
    </section>
  );
}
