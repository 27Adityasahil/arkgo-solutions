"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

const capabilities = [
  {
    id: "01",
    title: "CONSULT & ASSESS",
    services: [
      "Solar Consultation",
      "Site Survey"
    ]
  },
  {
    id: "02",
    title: "DESIGN",
    services: [
      "Solar System Design"
    ]
  },
  {
    id: "03",
    title: "INSTALL & INTEGRATE",
    services: [
      "Solar Panel Installation",
      "Solar Installation",
      "Inverter Installation",
      "Battery Solutions"
    ]
  },
  {
    id: "04",
    title: "SERVICE & SUPPORT",
    services: [
      "Solar Maintenance",
      "Solar Repair & Service"
    ]
  }
];

export default function Capabilities() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const capabilitiesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current], { y: 20, opacity: 0 });
      
      capabilitiesRef.current.forEach((el) => {
        if (!el) return;
        const line = el.querySelector('.cap-line');
        const content = el.querySelector('.cap-content');
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(content, { y: 15, opacity: 0 });
      });

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
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4);

        capabilitiesRef.current.forEach((el, index) => {
          if (!el) return;
          const line = el.querySelector('.cap-line');
          const content = el.querySelector('.cap-content');
          
          tl.to(line, { scaleX: 1, duration: 0.8 }, 0.4 + (index * 0.15))
            .to(content, { y: 0, opacity: 1, duration: 0.6 }, 0.6 + (index * 0.15));
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const lines = capabilitiesRef.current.map(el => el?.querySelector('.cap-line')).filter(Boolean);
        const contents = capabilitiesRef.current.map(el => el?.querySelector('.cap-content')).filter(Boolean);
        
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            ...lines,
            ...contents
          ],
          {
            opacity: 1,
            y: 0,
            scaleX: 1,
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
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-white overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-10 left-10 lg:top-20 lg:left-10 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        05
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: Intro Content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col pt-4 relative z-10">
            <div ref={eyebrowRef} className="flex items-center mb-8">
              <span className="w-1 h-5 bg-secondary mr-4 block" />
              <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
                OUR CAPABILITIES
              </span>
            </div>
            
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
              FROM CONSULTATION TO LONG-TERM SYSTEM SUPPORT.
            </h2>
            
            <p ref={copyRef} className="text-base lg:text-lg text-text-primary font-sans leading-relaxed max-w-lg">
              ARKGO Solutions&apos; capabilities extend across consultation, site assessment, system design, installation and post-installation service.
            </p>
          </div>

          {/* RIGHT: Capability Matrix (7 cols) */}
          <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">
            
            {capabilities.map((capability, index) => (
              <div 
                key={capability.id}
                ref={el => capabilitiesRef.current[index] = el}
                className="group relative flex flex-col cursor-default pb-8 lg:pb-12"
              >
                {/* Structural Top Rule */}
                <div className="cap-line w-full h-[1px] bg-[#DCE3E8] mb-8" />

                <div className="cap-content flex flex-col md:flex-row items-start md:gap-12 relative">
                  
                  {/* Subtle Interactive Red Line */}
                  <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-[2px] bg-secondary scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 hidden md:block" />

                  {/* Number */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary/30 tracking-tighter transition-colors duration-300 group-hover:text-secondary mb-4 md:mb-0 md:w-20 shrink-0">
                    {capability.id}
                  </div>
                  
                  {/* Detail Container */}
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-extrabold text-primary uppercase tracking-wide mb-6 transition-transform duration-300 group-hover:translate-x-1">
                      {capability.title}
                    </h3>
                    
                    <ul className="flex flex-col gap-3">
                      {capability.services.map((service, sIndex) => (
                        <li key={sIndex} className="text-sm md:text-base text-text-primary font-sans font-medium flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/20 mr-4 transition-colors duration-300 group-hover:bg-primary/50" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
            ))}
            
            {/* Final Bottom Rule */}
            <div className="w-full h-[1px] bg-[#DCE3E8]" />

          </div>
          
        </div>
      </div>
    </section>
  );
}
