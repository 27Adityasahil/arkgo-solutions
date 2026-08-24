"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";
import Image from "next/image";

export default function Process() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineLineRef = useRef(null);
  const stepsRef = useRef([]);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(headerRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(timelineLineRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(stepsRef.current, { y: 20, opacity: 0 });
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 });
      }

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(headerRef.current?.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 })
          .to(timelineLineRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.4")
          .to(stepsRef.current, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, "-=1.0");
          
        if (imageContainerRef.current) {
          tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.2, ease: "power2.inOut" }, "-=0.8");
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const targets = [
          headerRef.current?.children,
          timelineLineRef.current,
          stepsRef.current
        ];
        if (imageContainerRef.current) targets.push(imageContainerRef.current);
        
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          scaleX: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setStepRef = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-base border-t border-border-edge overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 lg:mb-24 flex flex-col items-start lg:items-center lg:text-center">
          <div className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
            HOW WE WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-text-dark mb-8 leading-[1.1] max-w-4xl">
            FROM SITE ASSESSMENT TO SOLAR INSTALLATION
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed font-sans">
            A structured approach to understanding your energy requirements, designing the right solution and executing the project with care.
          </p>
        </div>

        {/* Corporate Workflow */}
        <div className="relative mb-20 lg:mb-32">
          
          {/* Desktop/Tablet Horizontal Line */}
          <div className="hidden lg:block absolute top-[11px] left-4 right-4 h-px bg-border-edge z-0">
            <div ref={timelineLineRef} className="absolute top-0 left-0 bottom-0 w-full bg-secondary" />
          </div>

          {/* Mobile Vertical Line */}
          <div className="block lg:hidden absolute top-4 bottom-4 left-[23px] w-px bg-border-edge z-0" />

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-y-12 lg:gap-y-0 lg:gap-x-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                ref={setStepRef}
                className="group relative flex flex-row lg:flex-col items-start lg:w-1/5 focus:outline-none"
                tabIndex={0}
              >
                {/* Node Indicator */}
                <div className="flex-shrink-0 relative w-12 lg:w-full flex justify-center lg:justify-start lg:mb-8">
                  {/* Circle marker - NO PILL SHAPES */}
                  <div className="w-6 h-6 rounded-[2px] border-2 border-white bg-white group-hover:bg-secondary group-hover:border-secondary group-focus:bg-secondary group-focus:border-secondary transition-all duration-300 shadow-sm z-10 relative" />
                  
                  {/* Number - sits above marker on desktop, beside it on mobile */}
                  <div className="hidden lg:block absolute -top-8 left-1 text-xs font-heading font-bold text-text-muted uppercase tracking-widest group-hover:text-secondary group-focus:text-secondary transition-colors duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-6 lg:pl-0 pt-0.5 lg:pt-0">
                  <div className="block lg:hidden text-xs font-heading font-bold text-text-muted uppercase tracking-widest mb-1 group-hover:text-secondary group-focus:text-secondary transition-colors duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-text-dark mb-3 uppercase tracking-wide group-hover:text-secondary group-focus:text-secondary transition-all duration-300 lg:group-hover:translate-x-1 lg:group-focus:translate-x-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed lg:max-w-[90%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Anchoring Photograph */}
        <div ref={imageContainerRef} className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-base border border-border-edge overflow-hidden shadow-sm hidden md:block">
          <Image 
            src="/images/ai/arkgo-solar-system-design-blueprint.webp"
            alt="ARKGO Solar System Design"
            fill
            className="object-cover object-center grayscale mix-blend-multiply opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
        </div>

      </div>
    </section>
  );
}
