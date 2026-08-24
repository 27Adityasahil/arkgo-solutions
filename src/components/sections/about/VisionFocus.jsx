"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

const principles = [
  {
    id: "01",
    title: "UNDERSTAND THE REQUIREMENT",
    description: "Begin with the energy requirement, application and project context."
  },
  {
    id: "02",
    title: "DESIGN A SUITABLE SOLUTION",
    description: "Consider the site and project requirements before determining the appropriate solar system configuration."
  },
  {
    id: "03",
    title: "SUPPORT THE SYSTEM",
    description: "Continue beyond installation with maintenance, repair and service capabilities."
  }
];

export default function VisionFocus() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef1 = useRef(null);
  const copyRef2 = useRef(null);
  const principlesRef = useRef([]);
  const graphicRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef1.current, copyRef2.current], { y: 30, opacity: 0 });
      gsap.set(principlesRef.current, { opacity: 0, x: 20 });
      gsap.set(graphicRef.current, { opacity: 0 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(numberRef.current, { opacity: 0.05, duration: 1.5 }, 0)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.2)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(copyRef1.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(copyRef2.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(principlesRef.current, { 
            opacity: 1, 
            x: 0, 
            duration: 0.8, 
            stagger: 0.2 
          }, 0.5)
          .to(graphicRef.current, { opacity: 1, duration: 1.5 }, 0.8);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef1.current,
            copyRef2.current,
            ...principlesRef.current,
            graphicRef.current
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-[#073B73] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-20 left-10 lg:top-32 lg:left-20 text-[250px] md:text-[350px] lg:text-[500px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        03
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: 5 Columns (Header & Copy) */}
          <div className="lg:col-span-5 flex flex-col relative z-10">
            
            <div ref={eyebrowRef} className="flex items-center mb-8">
              <span className="w-1 h-5 bg-secondary mr-4 block" />
              <span className="text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
                OUR APPROACH
              </span>
            </div>
            
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              MAKING SOLAR ENERGY PRACTICAL FOR EVERY PROJECT.
            </h2>
            
            <p ref={copyRef1} className="text-base lg:text-lg text-[#D5E1EA] font-sans leading-relaxed mb-6">
              ARKGO Solutions approaches solar projects around their actual requirements — from understanding the application and assessing the site to designing, installing and supporting the appropriate system.
            </p>
            
            <p ref={copyRef2} className="text-base lg:text-lg text-[#D5E1EA] font-sans leading-relaxed">
              Whether the requirement is residential, commercial or industrial, the focus remains on building a solution suited to the project.
            </p>

            {/* Subtle Abstract Process Graphic */}
            <div ref={graphicRef} className="mt-16 pt-12 border-t border-white/10 hidden md:block">
              <div className="flex flex-col gap-3 font-heading font-bold text-[10px] tracking-[0.25em] text-white/30 uppercase">
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-[3px] rounded-full bg-secondary" />
                  <span>REQUIREMENT</span>
                </div>
                <div className="w-px h-6 bg-white/10 ml-[1px]" />
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-[3px] rounded-full bg-secondary" />
                  <span>ASSESSMENT</span>
                </div>
                <div className="w-px h-6 bg-white/10 ml-[1px]" />
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-[3px] rounded-full bg-secondary" />
                  <span>DESIGN</span>
                </div>
                <div className="w-px h-6 bg-white/10 ml-[1px]" />
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-[3px] rounded-full bg-secondary" />
                  <span>INSTALLATION</span>
                </div>
                <div className="w-px h-6 bg-white/10 ml-[1px]" />
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-[3px] rounded-full bg-secondary" />
                  <span>SUPPORT</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: 7 Columns (Principles) */}
          <div className="lg:col-span-7 flex flex-col w-full relative z-10 lg:pt-4">
            
            <div className="flex flex-col border-t border-white/10">
              {principles.map((principle, index) => (
                <div 
                  key={principle.id}
                  ref={el => principlesRef.current[index] = el}
                  className="group relative flex flex-col md:flex-row items-start gap-6 lg:gap-12 py-10 lg:py-14 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02]"
                >
                  {/* Subtle Red Hover Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary scale-y-0 origin-top transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-[64px] font-heading font-black text-secondary leading-none tracking-tighter shrink-0 md:w-20 pl-4 md:pl-8 transition-opacity duration-300 group-hover:opacity-100 opacity-90">
                    {principle.id}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col pr-4 md:pr-8 pl-4 md:pl-0">
                    <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white uppercase tracking-wider mb-4 transition-transform duration-300 group-hover:translate-x-2">
                      {principle.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#D5E1EA] font-sans leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-white">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
