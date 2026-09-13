"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const solutions = [
  {
    id: "01",
    title: "Solar Solutions",
    description: "Complete rooftop solar solutions from consultation to installation.",
    image: "/images/ai/arkgo-solar-installation-commercial-wide.webp"
  },
  {
    id: "02",
    title: "Solar Products",
    description: "Solar panels, inverters, batteries and installation materials.",
    image: "/images/ai/arkgo-corporate-solar-infrastructure.webp"
  },
  {
    id: "03",
    title: "Distribution & Retail",
    description: "Supply of solar products to retailers and end consumers.",
    image: "/images/ai/arkgo-industrial-solar-installation.webp"
  }
];

export default function Services() {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-20 lg:py-28 bg-[#FFF8E1] border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-block bg-primary text-white font-bold px-4 py-1 uppercase tracking-widest text-sm">
              WHAT WE DO
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 leading-tight mb-6 uppercase">
            OUR SOLAR SOLUTIONS
          </h2>
          
          <p className="text-lg text-gray-800 font-sans leading-relaxed font-medium">
            ARKGO provides comprehensive solar services, quality products, and wide-reaching distribution for all your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-white border-2 border-gray-900 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] flex flex-col h-full rounded-none">
              <div className="relative w-full h-[220px] border-b-2 border-gray-900 overflow-hidden bg-gray-100">
                <Image
                  src={solution.image}
                  alt={`ARKGO Solutions - ${solution.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 uppercase">
                  {solution.title}
                </h3>
                <p className="text-base text-gray-700 font-sans leading-relaxed flex-grow mb-6">
                  {solution.description}
                </p>
                
                <Link 
                  href="/solar-solutions" 
                  className="inline-flex items-center text-primary font-bold uppercase tracking-wider group"
                >
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => openModal()}
            className="inline-flex items-center justify-center bg-primary text-white font-sans font-bold text-lg px-10 py-4 transition-colors hover:bg-primary-dark shadow-sm cursor-pointer uppercase tracking-wide border-2 border-primary rounded-none"
          >
            DISCUSS YOUR SOLAR REQUIREMENT
          </button>
        </div>
        
      </div>
    </section>
  );
}
