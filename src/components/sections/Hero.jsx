"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useQuoteModal } from "@/contexts/QuoteModalContext";

const slides = [
  {
    id: 1,
    image: "/images/ai/arkgo-solar-installation-commercial-wide.webp",
    subtitle: "ARKGO SOLAR SOLUTIONS",
    title: "SWITCH TO SOLAR.<br/>SAVE MORE.<br/>POWER BETTER.",
    description: "Complete solar solutions for homes, businesses, and industrial projects in Bihar. Get expert consultation and professional installation from a trusted local partner."
  },
  {
    id: 2,
    image: "/images/ai/arkgo-industrial-solar-installation.webp",
    subtitle: "PREMIUM SOLAR PRODUCTS",
    title: "HIGH EFFICIENCY.<br/>TIER-1 PANELS.<br/>LASTING VALUE.",
    description: "Equip your property with industry-leading solar technology designed to deliver maximum yield, superior performance, and extreme durability."
  },
  {
    id: 3,
    image: "/images/ai/arkgo-corporate-solar-infrastructure.webp",
    subtitle: "CERTIFIED INSTALLATION",
    title: "EXPERT TEAMS.<br/>RELIABLE SERVICE.<br/>PEACE OF MIND.",
    description: "From engineering to commissioning, our certified technicians ensure your solar project is built to the highest safety and quality standards."
  }
];

export default function Hero() {
  const { openModal } = useQuoteModal();
  const [current, setCurrent] = useState(0);

  // Auto-play the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] bg-gray-900 overflow-hidden flex items-center pt-[72px] lg:pt-[116px]">
      
      {/* Background Images Layer */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={clsx(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out z-0",
            index === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt="Arkgo Solar Installation"
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Content Layer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10 flex flex-col justify-center h-full pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6">
            <span className="inline-block bg-secondary text-primary font-bold px-4 py-1 uppercase tracking-widest text-sm transition-all duration-300">
              {slides[current].subtitle}
            </span>
          </div>

          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight mb-8"
            dangerouslySetInnerHTML={{ __html: slides[current].title }}
          />

          <p className="text-lg md:text-xl text-white/90 font-sans leading-relaxed mb-10 max-w-2xl font-medium">
            {slides[current].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => openModal()}
              className="inline-flex items-center justify-center bg-primary text-white font-sans font-bold text-lg px-10 py-4 transition-colors hover:bg-primary-dark shadow-[4px_4px_0px_rgba(255,193,7,1)] cursor-pointer uppercase tracking-wide border-2 border-primary hover:translate-y-1 hover:shadow-[0px_0px_0px_rgba(255,193,7,1)] duration-200"
            >
              GET SOLAR QUOTE
            </button>
            
            <Link 
              href="/solar-solutions"
              className="inline-flex items-center justify-center bg-transparent text-white font-sans font-bold text-lg px-10 py-4 transition-colors hover:bg-white hover:text-primary uppercase tracking-wide border-2 border-white"
            >
              EXPLORE SOLAR
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] flex items-center justify-between">
          
          {/* Dots */}
          <div className="flex items-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={clsx(
                  "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
                  index === current ? "bg-secondary w-8" : "bg-white/50 hover:bg-white/80"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrows */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-primary text-white border border-white/20 hover:border-primary transition-colors cursor-pointer rounded-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-primary text-white border border-white/20 hover:border-primary transition-colors cursor-pointer rounded-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>

    </section>
  );
}
