"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar services with ARKGO.");
  const whatsappUrl = `https://wa.me/917979055407?text=${whatsappMessage}`;

  return (
    <section className="relative w-full py-[72px] md:py-[88px] lg:py-[120px] bg-[#073B73] overflow-hidden z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[250px] lg:text-[350px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter opacity-5" aria-hidden="true">
        07
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 lg:mb-8">
            <span className="w-1 h-5 bg-secondary mr-4 block" />
            <span className="text-xs md:text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
              START YOUR PROJECT
            </span>
            <div className="w-1 h-5 bg-secondary ml-4 block lg:hidden" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            LET&apos;S FIND THE RIGHT SOLAR APPROACH FOR YOUR PROJECT.
          </h2>
          
          <p className="text-base md:text-lg text-[#F4F7FA] font-sans leading-relaxed mb-12 max-w-2xl">
            Tell us about your residential, commercial or industrial requirement and speak with ARKGO Solutions about the next step.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 w-full">
            <div className="w-full sm:w-auto min-w-[200px]">
              <Link 
                href="/contact" 
                className="flex items-center justify-center w-full bg-[#D94A32] text-[#FFFFFF] px-8 py-5 text-xs md:text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#c23e28]"
              >
                GET A QUOTE
                <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
            
            <div className="w-full sm:w-auto min-w-[200px]">
              <Link 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-transparent border border-white/30 text-white px-8 py-5 text-xs md:text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:border-[#D94A32] hover:text-[#D94A32]"
              >
                WHATSAPP US
                <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center text-xs font-heading font-bold text-white/60 uppercase tracking-widest gap-2 sm:gap-4 pt-6 border-t border-white/10 w-full max-w-md mx-auto">
            <a href="tel:6207596334" className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4">
              CALL 6207596334
            </a>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <span className="sm:hidden text-white/30 text-[10px]">OR</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4">
              WHATSAPP 7979055407
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
