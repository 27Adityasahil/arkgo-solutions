"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const applications = [
  {
    id: "01",
    title: "RESIDENTIAL",
    description: "Solar solutions for residential energy requirements."
  },
  {
    id: "02",
    title: "COMMERCIAL",
    description: "Solar solutions for commercial properties and business requirements."
  },
  {
    id: "03",
    title: "INDUSTRIAL",
    description: "Solar solutions for larger industrial energy requirements."
  }
];

export default function WhatSetsUsApart() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const copyRef = useRef(null);
  const appsRef = useRef([]);
  const configRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, heading1Ref.current, heading2Ref.current, copyRef.current], { y: 30, opacity: 0 });
      gsap.set(appsRef.current, { opacity: 0, x: 20 });
      gsap.set(configRef.current, { opacity: 0, y: 20 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(numberRef.current, { opacity: 0.04, duration: 1.5 }, 0)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.2)
          .to(heading1Ref.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(heading2Ref.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(appsRef.current, { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 }, 0.6)
          .to(configRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.0);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            heading1Ref.current,
            heading2Ref.current,
            copyRef.current,
            ...appsRef.current,
            configRef.current
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#073B73] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-20 left-10 lg:top-32 lg:left-20 text-[200px] md:text-[350px] lg:text-[500px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        07
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-24 items-start">
          
          {/* LEFT: Main Statement (6 cols) */}
          <div className="lg:col-span-6 flex flex-col relative z-10 pt-4">
            
            <div ref={eyebrowRef} className="flex items-center mb-10">
              <span className="w-1 h-5 bg-secondary mr-4 block" />
              <span className="text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
                THE BIGGER PICTURE
              </span>
            </div>
            
            <div className="flex flex-col gap-2 mb-10">
              <h2 ref={heading1Ref} className="text-4xl md:text-5xl lg:text-[60px] xl:text-[72px] font-heading font-black text-white leading-[1.05] tracking-tight">
                SOLAR IS NOT ONE SOLUTION.
              </h2>
              <h2 ref={heading2Ref} className="text-4xl md:text-5xl lg:text-[60px] xl:text-[72px] font-heading font-black text-white leading-[1.05] tracking-tight">
                IT IS A <span className="text-secondary">PROJECT-SPECIFIC</span> DECISION.
              </h2>
            </div>
            
            <p ref={copyRef} className="text-base md:text-lg lg:text-xl text-[#C8D7E2] font-sans leading-relaxed max-w-xl pr-4">
              Different buildings, businesses and energy requirements call for different approaches. ARKGO Solutions works across residential, commercial and industrial requirements, with system configurations that include On-Grid, Off-Grid and Hybrid Solar.
            </p>

            {/* Desktop Only: System Configs pushed to bottom left */}
            <div ref={configRef} className="hidden lg:block mt-24 border-t border-white/10 pt-8 w-full max-w-xl">
              <span className="text-xs font-heading font-bold text-white/50 uppercase tracking-[0.2em] mb-3 block">
                SYSTEM CONFIGURATIONS
              </span>
              <div className="text-sm md:text-base font-heading font-bold text-white uppercase tracking-widest">
                ON-GRID <span className="text-secondary opacity-60 mx-3">/</span> 
                OFF-GRID <span className="text-secondary opacity-60 mx-3">/</span> 
                HYBRID
              </div>
            </div>
            
          </div>

          {/* RIGHT: Applications (6 cols) */}
          <div className="lg:col-span-6 flex flex-col relative z-10 w-full lg:pt-4">
            
            <div className="flex flex-col border-t border-white/10">
              {applications.map((app, index) => (
                <div 
                  key={app.id}
                  ref={el => appsRef.current[index] = el}
                  className="group relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 lg:gap-12 py-10 lg:py-14 border-b border-white/10 cursor-default"
                >
                  {/* Subtle Red Hover Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary scale-y-0 origin-top transition-transform duration-500 ease-out group-hover:scale-y-100 hidden sm:block" />
                  
                  {/* Mobile Red Line Overlay */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary scale-y-0 origin-top transition-transform duration-500 ease-out group-hover:scale-y-100 sm:hidden" />

                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-[56px] font-heading font-black text-white/30 leading-none tracking-tighter shrink-0 sm:w-16 pl-4 sm:pl-6 transition-colors duration-300 group-hover:text-secondary">
                    {app.id}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col pr-4 pl-4 sm:pl-0 pt-2 sm:pt-0">
                    <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white uppercase tracking-wider mb-3 transition-transform duration-300 group-hover:translate-x-2">
                      {app.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-[#C8D7E2] font-sans leading-relaxed max-w-md transition-colors duration-300 group-hover:text-white">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Only: System Configs */}
            <div className="lg:hidden mt-16 border-t border-white/10 pt-8 w-full">
              <span className="text-[10px] font-heading font-bold text-white/50 uppercase tracking-[0.2em] mb-3 block">
                SYSTEM CONFIGURATIONS
              </span>
              <div className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-widest flex flex-wrap items-center gap-y-2">
                <span>ON-GRID</span>
                <span className="text-secondary opacity-60 mx-2 sm:mx-3">/</span> 
                <span>OFF-GRID</span>
                <span className="text-secondary opacity-60 mx-2 sm:mx-3">/</span> 
                <span>HYBRID</span>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
