"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const solutions = [
  {
    id: "01",
    title: "RESIDENTIAL SOLAR",
    description: "Solar solutions designed for residential energy requirements.",
    image: "/images/ai/arkgo-solar-installation-commercial-wide.webp" // Used as fallback for residential
  },
  {
    id: "02",
    title: "COMMERCIAL SOLAR",
    description: "Solar solutions for commercial properties and business requirements.",
    image: "/images/ai/arkgo-corporate-solar-infrastructure.webp" // Used as fallback for commercial
  },
  {
    id: "03",
    title: "INDUSTRIAL SOLAR",
    description: "Solar solutions for larger industrial energy requirements.",
    image: "/images/ai/arkgo-industrial-solar-installation.webp"
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const selectorRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const activeContentRef = useRef(null);
  const systemTypesRef = useRef(null);
  const ctaRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current], { y: 20, opacity: 0 });
      gsap.set(selectorRef.current?.children, { y: 20, opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(systemTypesRef.current, { y: 20, opacity: 0 });
      gsap.set(ctaRef.current, { y: 20, opacity: 0 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(numberRef.current, { opacity: 0.08, duration: 1.5 }, 0)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.2)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(selectorRef.current?.children, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 0.5)
          .to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" }, 0.6)
          .to(systemTypesRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.8)
          .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.0);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            selectorRef.current?.children,
            imageContainerRef.current,
            systemTypesRef.current,
            ctaRef.current
          ],
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Handle interaction transition
  useEffect(() => {
    if (imageRef.current && activeContentRef.current) {
      gsap.fromTo(imageRef.current,
        { scale: 1.05, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
      gsap.fromTo(activeContentRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  const activeSolution = solutions[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#E8F1F8] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-10 right-10 md:top-20 md:right-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        04
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start mb-16 lg:mb-20">
          
          {/* LEFT: 40% Width (cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-8 relative z-10 order-1">
            
            <div ref={eyebrowRef} className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
              OUR SOLUTIONS
            </div>
            
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-heading font-extrabold text-primary leading-[1.1] mb-8">
              SOLAR SOLUTIONS FOR DIFFERENT ENERGY REQUIREMENTS.
            </h2>
            
            <p ref={copyRef} className="text-base md:text-lg text-[#3A536B] font-sans leading-relaxed mb-12 max-w-lg">
              From residential installations to larger commercial and industrial requirements, ARKGO Solutions works across different solar applications and system configurations.
            </p>

            {/* Solution Selector (Desktop + Mobile) */}
            <div ref={selectorRef} className="flex flex-col space-y-2 mb-12">
              {solutions.map((solution, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex items-center py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-[#E8F1F8]"
                    aria-selected={isActive}
                    role="tab"
                  >
                    {/* Active Marker */}
                    <div 
                      className={clsx(
                        "absolute left-0 top-0 bottom-0 w-[3px] transition-colors duration-300",
                        isActive ? "bg-secondary" : "bg-transparent group-hover:bg-secondary/40"
                      )} 
                    />
                    
                    <div className="flex items-center pl-6">
                      <span className={clsx(
                        "text-sm md:text-base font-heading font-bold mr-4 transition-colors duration-300",
                        isActive ? "text-secondary" : "text-primary/40 group-hover:text-primary/70"
                      )}>
                        {solution.id}
                      </span>
                      <span className={clsx(
                        "text-lg md:text-xl font-heading font-extrabold tracking-wide uppercase transition-colors duration-300",
                        isActive ? "text-primary" : "text-primary/40 group-hover:text-primary/70"
                      )}>
                        {solution.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* System Types */}
            <div ref={systemTypesRef} className="pt-8 border-t border-primary/10">
              <div className="text-xs font-heading font-bold text-primary uppercase tracking-widest mb-4">
                SYSTEM TYPES
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-heading font-bold text-[#3A536B] tracking-wide">
                <span>ON-GRID</span>
                <span className="text-primary/20">/</span>
                <span>OFF-GRID</span>
                <span className="text-primary/20">/</span>
                <span>HYBRID</span>
              </div>
            </div>

          </div>

          {/* RIGHT: 60% Width (cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col order-2 relative z-10 w-full lg:min-w-[110%]">
            
            {/* Image Container */}
            <div 
              ref={imageContainerRef}
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] mb-6 overflow-hidden bg-primary"
            >
              <Image
                ref={imageRef}
                src={activeSolution.image}
                alt={`ARKGO Solutions - ${activeSolution.title}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Active Solution Description */}
            <div ref={activeContentRef} className="flex flex-col bg-white p-6 lg:p-8 lg:-mt-24 lg:ml-8 lg:mr-auto lg:max-w-md shadow-xl relative z-20">
              <div className="flex items-center mb-3">
                <span className="text-sm font-heading font-bold text-secondary mr-3">{activeSolution.id}</span>
                <span className="text-xl font-heading font-extrabold text-primary uppercase">{activeSolution.title}</span>
              </div>
              <p className="text-sm md:text-base text-text-muted font-sans leading-relaxed">
                {activeSolution.description}
              </p>
            </div>

          </div>
        </div>

        {/* Section CTA */}
        <div ref={ctaRef} className="flex pt-8 lg:pt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center border-2 border-primary text-primary hover:border-secondary hover:text-secondary rounded-[4px] font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors group"
          >
            VIEW ALL SERVICES
            <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
