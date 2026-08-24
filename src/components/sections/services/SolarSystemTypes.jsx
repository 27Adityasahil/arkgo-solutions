"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SolarSystemTypes() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const colsRef = useRef([]);

  // Interaction handlers to animate SVG diagram lines on hover
  const handleMouseEnter = (index) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const col = colsRef.current[index];
    if (!col) return;
    const paths = col.querySelectorAll('.diagram-path');
    const nodes = col.querySelectorAll('.diagram-node');
    
    gsap.to(paths, { strokeDashoffset: 0, stroke: "#D94A32", duration: 0.6, ease: "power2.out" });
    gsap.to(nodes, { borderColor: "#D94A32", color: "#D94A32", duration: 0.3 });
  };

  const handleMouseLeave = (index) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const col = colsRef.current[index];
    if (!col) return;
    const paths = col.querySelectorAll('.diagram-path');
    const nodes = col.querySelectorAll('.diagram-node');
    
    paths.forEach(p => {
      const length = p.getTotalLength();
      gsap.to(p, { strokeDashoffset: length, stroke: "#8FA8BF", duration: 0.6, ease: "power2.out" });
    });
    gsap.to(nodes, { borderColor: "#073B73", color: "#073B73", duration: 0.3 });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current], { y: 20, opacity: 0 });
      
      colsRef.current.forEach((el) => {
        if (!el) return;
        const content = el.querySelector('.col-content');
        const paths = el.querySelectorAll('.diagram-path');
        
        gsap.set(content, { y: 20, opacity: 0 });
        
        paths.forEach(p => {
          const length = p.getTotalLength();
          gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
        });
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
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3);

        colsRef.current.forEach((el, index) => {
          if (!el) return;
          const content = el.querySelector('.col-content');
          const paths = el.querySelectorAll('.diagram-path');
          
          tl.to(content, { y: 0, opacity: 1, duration: 0.6 }, 0.5 + (index * 0.15));
            
          paths.forEach(p => {
            tl.to(p, { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" }, 0.6 + (index * 0.15));
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const contents = colsRef.current.map(el => el?.querySelector('.col-content')).filter(Boolean);
        const allPaths = [];
        colsRef.current.forEach(el => {
          if(el) allPaths.push(...el.querySelectorAll('.diagram-path'));
        });
        
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            ...contents
          ],
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
        gsap.set(allPaths, { strokeDashoffset: 0 });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-24 bg-[#FAF7F0] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-10 left-10 lg:top-16 lg:left-16 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        05
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* TOP: Centered Intro Content */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 relative z-10">
          <div ref={eyebrowRef} className="flex items-center justify-center mb-6 lg:mb-8">
            <span className="w-1 h-5 bg-secondary mr-4 block" />
            <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
              SYSTEM CONFIGURATIONS
            </span>
            <div className="w-1 h-5 bg-secondary ml-4 block lg:hidden" />
          </div>
          
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight max-w-4xl">
            THREE APPROACHES. ONE PROJECT-SPECIFIC SOLUTION.
          </h2>
        </div>

        {/* BOTTOM: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative z-10">
          
          {/* COL 1: ON-GRID */}
          <div 
            ref={el => colsRef.current[0] = el}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            className="group relative flex flex-col pb-6 cursor-default"
          >
            <div className="col-content flex flex-col items-center text-center relative w-full h-full">
              <div className="text-2xl md:text-3xl font-heading font-black text-[#8FA8BF] tracking-widest transition-colors duration-300 group-hover:text-secondary mb-4">
                01
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-[#0a2340]">
                ON-GRID
              </h3>
              <p className="text-sm lg:text-base text-text-primary font-sans leading-[1.6] max-w-[320px] mb-12 flex-grow">
                Solar generation works alongside the electrical grid.
              </p>
              
              {/* Conceptual Diagram */}
              <div className="relative w-full max-w-[280px] h-[160px] flex justify-center items-center font-heading text-[10px] font-bold uppercase tracking-widest text-primary mx-auto" aria-label="Diagram showing Solar flowing to Inverter, then splitting to Load and Grid.">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">SOLAR</div>
                <svg className="absolute top-[28px] left-1/2 -translate-x-1/2 w-4 h-6" viewBox="0 0 16 24" fill="none">
                  <path className="diagram-path" d="M8 0 V 20 M3 15 L8 22 L13 15" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[52px] left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">INVERTER</div>
                
                <svg className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[120px] h-[36px] -ml-[60px]" viewBox="0 0 120 36" fill="none">
                  <path className="diagram-path" d="M60 0 V 10 H 20 V 26 M14 20 L20 28 L26 20 M60 10 H 100 V 26 M94 20 L100 28 L106 20" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[104px] left-0 diagram-node border border-primary px-3 py-1 bg-white">LOAD</div>
                <div className="absolute top-[104px] right-0 diagram-node border border-primary px-3 py-1 bg-white">GRID</div>
              </div>
            </div>
          </div>

          {/* COL 2: OFF-GRID */}
          <div 
            ref={el => colsRef.current[1] = el}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className="group relative flex flex-col pb-6 cursor-default"
          >
            <div className="col-content flex flex-col items-center text-center relative w-full h-full">
              <div className="text-2xl md:text-3xl font-heading font-black text-[#8FA8BF] tracking-widest transition-colors duration-300 group-hover:text-secondary mb-4">
                02
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-[#0a2340]">
                OFF-GRID
              </h3>
              <p className="text-sm lg:text-base text-text-primary font-sans leading-[1.6] max-w-[320px] mb-12 flex-grow">
                Solar generation is paired with battery storage for an independent system configuration.
              </p>
              
              {/* Conceptual Diagram */}
              <div className="relative w-full max-w-[280px] h-[160px] flex justify-center items-center font-heading text-[10px] font-bold uppercase tracking-widest text-primary mx-auto" aria-label="Diagram showing Solar flowing to Inverter, then to Battery, then to Load.">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">SOLAR</div>
                <svg className="absolute top-[28px] left-1/2 -translate-x-1/2 w-4 h-6" viewBox="0 0 16 24" fill="none">
                  <path className="diagram-path" d="M8 0 V 20 M3 15 L8 22 L13 15" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[52px] left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">INVERTER</div>
                <svg className="absolute top-[76px] left-1/2 -translate-x-1/2 w-4 h-6" viewBox="0 0 16 24" fill="none">
                  <path className="diagram-path" d="M8 0 V 20 M3 15 L8 22 L13 15" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[100px] left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">BATTERY</div>
                <svg className="absolute top-[124px] left-1/2 -translate-x-1/2 w-4 h-6" viewBox="0 0 16 24" fill="none">
                  <path className="diagram-path" d="M8 0 V 20 M3 15 L8 22 L13 15" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[148px] left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">LOAD</div>
              </div>
            </div>
          </div>

          {/* COL 3: HYBRID */}
          <div 
            ref={el => colsRef.current[2] = el}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            className="group relative flex flex-col pb-6 cursor-default"
          >
            <div className="col-content flex flex-col items-center text-center relative w-full h-full">
              <div className="text-2xl md:text-3xl font-heading font-black text-[#8FA8BF] tracking-widest transition-colors duration-300 group-hover:text-secondary mb-4">
                03
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-[#0a2340]">
                HYBRID
              </h3>
              <p className="text-sm lg:text-base text-text-primary font-sans leading-[1.6] max-w-[320px] mb-12 flex-grow">
                Solar generation combines grid interaction with battery storage.
              </p>
              
              {/* Conceptual Diagram */}
              <div className="relative w-full max-w-[280px] h-[160px] flex justify-center items-center font-heading text-[10px] font-bold uppercase tracking-widest text-primary mx-auto" aria-label="Diagram showing Solar flowing to Inverter, then splitting to Grid and Battery. Battery flows to Load.">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">SOLAR</div>
                <svg className="absolute top-[28px] left-1/2 -translate-x-1/2 w-4 h-6" viewBox="0 0 16 24" fill="none">
                  <path className="diagram-path" d="M8 0 V 20 M3 15 L8 22 L13 15" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[52px] left-1/2 -translate-x-1/2 diagram-node border border-primary px-3 py-1 bg-white">INVERTER</div>
                
                <svg className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[120px] h-[36px] -ml-[60px]" viewBox="0 0 120 36" fill="none">
                  <path className="diagram-path" d="M60 0 V 10 H 20 V 26 M14 20 L20 28 L26 20 M60 10 H 100 V 26 M94 20 L100 28 L106 20" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[104px] left-0 diagram-node border border-primary px-3 py-1 bg-white">GRID</div>
                <div className="absolute top-[104px] right-0 diagram-node border border-primary px-3 py-1 bg-white">BATTERY</div>
                
                <svg className="absolute top-[128px] right-[28px] w-4 h-[20px]" viewBox="0 0 16 20" fill="none">
                  <path className="diagram-path" d="M8 0 V 16 M3 11 L8 18 L13 11" stroke="#8FA8BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <div className="absolute top-[148px] right-0 diagram-node border border-primary px-3 py-1 bg-white">LOAD</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

