"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import Image from "next/image";

export default function Reach() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const allDistrictsRef = useRef(null);
  const metadataRef = useRef(null);
  const statementRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current, allDistrictsRef.current, metadataRef.current, statementRef.current], { y: 20, opacity: 0 });
      gsap.set(mapContainerRef.current, { opacity: 0 });

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
          .to(mapContainerRef.current, { opacity: 1, duration: 0.8 }, 0.2)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(allDistrictsRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
          .to(metadataRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.7)
          .to(statementRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.8);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            allDistrictsRef.current,
            metadataRef.current,
            statementRef.current,
            mapContainerRef.current
          ],
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#E8F1F8] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] md:text-[500px] lg:text-[600px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        07
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Map Visual (cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center w-full min-h-[300px] md:min-h-[400px] lg:h-[600px] relative order-2 lg:order-1 group">
            
            <div ref={mapContainerRef} className="relative w-full h-full max-w-[600px] mx-auto aspect-[4/3] flex items-center justify-center">
              
              {/* Image Map of Bihar */}
              <div className="relative w-full h-full max-w-[500px] aspect-[4/3] flex items-center justify-center mx-auto transition-transform duration-700 ease-out lg:group-hover:scale-105">
                <Image 
                  src="/images/map.png" 
                  alt="ARKGO Solutions Map of Bihar" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content (cols 7-12) */}
          <div className="lg:col-span-6 flex flex-col pt-4 lg:pt-0 order-1 lg:order-2 z-10">
            
            <div ref={eyebrowRef} className="flex items-center mb-6">
              <span className="w-1 h-4 bg-secondary mr-3 inline-block"></span>
              <span className="text-sm font-heading font-bold text-primary uppercase tracking-widest">
                OUR REACH
              </span>
            </div>
            
            <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
              POWERING PROJECTS ACROSS BIHAR.
            </h2>
            
            <p ref={copyRef} className="text-base md:text-lg text-text-muted font-sans leading-relaxed mb-16 lg:mb-24 max-w-lg">
              ARKGO Solutions is currently working across all districts of Bihar, delivering solar solutions for residential, commercial and other energy requirements.
            </p>
            
            {/* Large Typography Statement */}
            <div ref={allDistrictsRef} className="flex flex-col mb-8 border-l-[3px] border-secondary pl-6">
              <span className="text-5xl md:text-6xl lg:text-[80px] font-heading font-black text-secondary leading-[0.9] tracking-tighter uppercase block mb-1">
                ALL
              </span>
              <span className="text-5xl md:text-6xl lg:text-[80px] font-heading font-black text-primary leading-[0.9] tracking-tighter uppercase block">
                DISTRICTS
              </span>
            </div>
            
            <div ref={metadataRef} className="flex flex-col mb-16 lg:mb-24 ml-6">
              <p className="text-sm md:text-base text-text-muted font-heading font-semibold uppercase tracking-widest leading-relaxed max-w-sm mb-4">
                Working across Bihar for residential, commercial and other solar energy requirements.
              </p>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-xs font-heading font-bold text-primary tracking-[0.2em] uppercase">BIHAR, INDIA</span>
              </div>
            </div>
            
            {/* Optional Positioning Statement */}
            <div ref={statementRef} className="border-t border-primary/10 pt-6 mt-auto">
              <span className="text-xs md:text-sm font-heading font-bold text-primary/60 uppercase tracking-widest">
                FROM LOCAL INSTALLATIONS TO PROJECTS ACROSS THE STATE.
              </span>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
