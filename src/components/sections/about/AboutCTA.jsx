"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar solutions with ARKGO.");
  const whatsappUrl = `https://wa.me/917979055407?text=${whatsappMessage}`;

  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                Work with Arkgo
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
              Let&apos;s Discuss Your Solar Requirement.
            </h2>
            
            <p className="text-lg text-white/80 font-sans leading-relaxed max-w-lg mb-10">
              Have a residential, commercial or industrial solar requirement? Speak with ARKGO Solutions about your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link 
                href="/contact" 
                className="flex items-center justify-center bg-secondary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-secondary/90 shadow-none rounded-none"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              
              <Link 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-transparent border border-white text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-white/10 rounded-none"
              >
                WhatsApp Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white/5 border border-white/10 p-8 rounded-none">
              <h3 className="text-xl font-heading font-extrabold text-white uppercase tracking-wider mb-6">
                Direct Contact
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-white/60 uppercase tracking-widest block mb-1">Call Us</span>
                    <a href="tel:6207596334" className="text-lg font-heading font-bold text-white hover:text-secondary transition-colors">6207596334</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-white/60 uppercase tracking-widest block mb-1">WhatsApp</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-heading font-bold text-white hover:text-secondary transition-colors">7979055407</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
