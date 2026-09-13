"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceSequence = ["CONSULT", "ASSESS", "DESIGN", "INSTALL", "SUPPORT"];

export default function ServicesHero() {
  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar services with ARKGO.");
  const whatsappUrl = `https://wa.me/917979055407?text=${whatsappMessage}`;

  return (
    <section className="relative w-full min-h-[90vh] lg:h-screen lg:min-h-[800px] bg-[#FAF7F0] overflow-hidden flex flex-col lg:flex-row pt-20 lg:pt-0">
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-primary h-full relative z-10 flex flex-col pt-12 pb-8 px-6 md:px-12 lg:pt-32 lg:pb-16 lg:px-16">
        <div className="absolute top-8 left-8 lg:top-24 lg:left-12 text-[180px] lg:text-[250px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter opacity-5" aria-hidden="true">
          01
        </div>

        <div className="relative z-10 flex flex-col h-full mt-auto lg:mt-0 lg:justify-center">
          <div className="flex items-center mb-8">
            <span className="w-1 h-5 bg-secondary mr-4 block" />
            <span className="text-xs md:text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
              OUR SERVICES
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-[54px] xl:text-[64px] font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            SOLAR SERVICES FROM REQUIREMENT TO INSTALLATION.
          </h1>
          
          <p className="text-base md:text-lg text-text-on-dark font-sans leading-relaxed mb-10 max-w-md">
            From understanding your energy requirement to system design, installation and ongoing service, ARKGO Solutions supports solar projects across Bihar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16">
            <Link 
              href="/contact" 
              className="flex items-center justify-center bg-secondary text-white px-8 py-4 text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#c23e28] group/primary shadow-lg shadow-black/10"
            >
              GET A QUOTE
              <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/primary:translate-x-1" />
            </Link>
            <Link 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:border-white group/secondary"
            >
              WHATSAPP US
              <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/secondary:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-auto border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center gap-y-4 lg:gap-0 relative z-10 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 lg:gap-6 flex-wrap w-full">
            {serviceSequence.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center text-[10px] md:text-xs font-heading font-bold text-white uppercase tracking-widest whitespace-nowrap"
              >
                <span className={index === 2 ? "text-secondary" : ""}>{item}</span>
                {index < serviceSequence.length - 1 && (
                  <span className="hidden md:block ml-4 lg:ml-6 text-white/30">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[55%] xl:w-[60%] h-[40vh] md:h-[50vh] lg:h-full relative z-0 order-first lg:order-last">
        <div className="absolute inset-0 w-full h-full bg-[#E8F1F8] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ai/arkgo-services-hero-banner.webp"
              alt="Pristine rooftop solar panel array under bright morning sunlight"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
