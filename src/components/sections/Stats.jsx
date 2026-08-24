"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

export default function Stats() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const statementRef = useRef(null);
  const numbersRef = useRef([]);
  const secondaryBandRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(headerRef.current, { y: 20, opacity: 0 });
      gsap.set(statementRef.current, { y: 30, opacity: 0 });
      gsap.set(numbersRef.current, { y: 40, opacity: 0 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(secondaryBandRef.current?.children, { x: -20, opacity: 0 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.8 })
          .to(statementRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
          .to(numbersRef.current, { y: 0, opacity: 1, duration: 1.0, stagger: 0.15 }, "-=0.6")
          .to(lineRef.current, { scaleX: 1, duration: 1.2, ease: "power2.inOut" }, "-=0.8")
          .to(secondaryBandRef.current?.children, { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.6");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current,
            statementRef.current,
            ...numbersRef.current,
            lineRef.current,
            ...(secondaryBandRef.current?.children || [])
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scaleX: 1,
            duration: 0.6,
            stagger: 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setNumberRef = (el) => {
    if (el && !numbersRef.current.includes(el)) {
      numbersRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-base">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Structural Line */}
        <div ref={lineRef} className="w-full h-[1px] bg-border-edge mb-12 lg:mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 mb-16 lg:mb-24">
          
          {/* Left: Statement Area (5 columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <div ref={headerRef} className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
              BUILT ON EXPERIENCE
            </div>
            
            <div ref={statementRef}>
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-bold text-primary leading-[1.15] mb-8 max-w-md">
                REAL PROJECTS.<br/>
                MEASURABLE EXPERIENCE.
              </h2>
              <p className="text-lg text-text-muted font-sans leading-relaxed max-w-md">
                ARKGO Solutions has executed solar projects across Bihar, serving residential, commercial and industrial requirements.
              </p>
            </div>
          </div>

          {/* Right: Statistics Grid (7 columns) */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 sm:gap-x-12 mb-12">
              
              {/* Primary Metric 1 */}
              <div ref={setNumberRef} className="flex flex-col group cursor-default">
                <div className="w-0 h-[2px] bg-secondary mb-4 transition-all duration-300 group-hover:w-8" />
                <div className="text-5xl lg:text-[72px] font-heading font-extrabold text-secondary tracking-tighter leading-none mb-3">
                  1+ MW
                </div>
                <div className="text-xs md:text-sm font-heading font-bold text-text-muted group-hover:text-primary transition-colors duration-300 uppercase tracking-widest">
                  SOLAR PROJECTS EXECUTED
                </div>
              </div>

              {/* Primary Metric 2 */}
              <div ref={setNumberRef} className="flex flex-col group cursor-default">
                <div className="w-0 h-[2px] bg-secondary mb-4 transition-all duration-300 group-hover:w-8" />
                <div className="text-5xl lg:text-[72px] font-heading font-extrabold text-primary tracking-tighter leading-none mb-3">
                  20+
                </div>
                <div className="text-xs md:text-sm font-heading font-bold text-text-muted group-hover:text-primary transition-colors duration-300 uppercase tracking-widest">
                  CLIENTS
                </div>
              </div>

              {/* Primary Metric 3 */}
              <div ref={setNumberRef} className="flex flex-col group cursor-default">
                <div className="w-0 h-[2px] bg-secondary mb-4 transition-all duration-300 group-hover:w-8" />
                <div className="text-5xl lg:text-[72px] font-heading font-extrabold text-primary tracking-tighter leading-none mb-3">
                  30+
                </div>
                <div className="text-xs md:text-sm font-heading font-bold text-text-muted group-hover:text-primary transition-colors duration-300 uppercase tracking-widest">
                  PROJECTS
                </div>
              </div>

              {/* Supporting Metric 4 */}
              <div ref={setNumberRef} className="flex flex-col group cursor-default sm:mt-4">
                <div className="w-0 h-[2px] bg-secondary mb-4 transition-all duration-300 group-hover:w-8" />
                <div className="text-4xl lg:text-[56px] font-heading font-extrabold text-primary tracking-tighter leading-none mb-3">
                  100%
                </div>
                <div className="text-xs md:text-sm font-heading font-bold text-text-muted group-hover:text-primary transition-colors duration-300 uppercase tracking-widest">
                  CLIENT SATISFACTION
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Secondary Credibility Strip */}
        <div 
          ref={secondaryBandRef}
          className="bg-primary flex flex-col md:flex-row items-start md:items-center p-8 md:p-12 lg:px-16 border-l-4 border-secondary gap-y-8 gap-x-12"
        >
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-heading font-bold text-white mb-2">TOP 10</span>
            <span className="text-xs md:text-sm font-heading font-bold text-white/70 uppercase tracking-widest">
              VENDOR IN NBPDCL<br/>UNDER PM SURYA GHAR YOJANA
            </span>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-white/20 shrink-0" />
          
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-heading font-bold text-white mb-2">3×</span>
            <span className="text-xs md:text-sm font-heading font-bold text-white/70 uppercase tracking-widest">
              AWARDED BY THE DISTRICT MAGISTRATE,<br/>SAMASTIPUR
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
