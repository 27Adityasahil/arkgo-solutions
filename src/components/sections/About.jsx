"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const factsRef = useRef(null);
  const accentLineRef = useRef(null);
  const annotationRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(imageContainerRef.current, { clipPath: "inset(10% 0% 0% 0%)" });
      gsap.set(imageRef.current, { scale: 1.03 });
      gsap.set(eyebrowRef.current, { y: 20, opacity: 0 });
      gsap.set(headingRef.current, { y: 20, opacity: 0 });
      gsap.set(subheadingRef.current, { y: 20, opacity: 0 });
      gsap.set(paragraphRef.current, { y: 20, opacity: 0 });
      gsap.set(factsRef.current?.children, { y: 20, opacity: 0 });
      gsap.set(accentLineRef.current, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(annotationRef.current, { opacity: 0 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" }, 0)
          .to(imageRef.current, { scale: 1, duration: 1.2, ease: "power2.inOut" }, 0)
          .to(annotationRef.current, { opacity: 1, duration: 0.8 }, 0.6)
          .to(accentLineRef.current, { scaleY: 1, duration: 0.8 }, 0.2)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(subheadingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(paragraphRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
          .to(factsRef.current?.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 0.8);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            imageContainerRef.current,
            imageRef.current,
            annotationRef.current,
            accentLineRef.current,
            eyebrowRef.current,
            headingRef.current,
            subheadingRef.current,
            paragraphRef.current,
            factsRef.current
          ],
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#FAF7F0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Column: Image (cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col relative w-full lg:-ml-12 xl:-ml-24">
            <div 
              ref={imageContainerRef}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[700px] xl:h-[800px] group"
            >
              <div ref={imageRef} className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                <Image
                  src="/images/ai/arkgo-solar-technician-portrait.webp"
                  alt="ARKGO Solutions Solar Technician"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            
            {/* Technical Annotation */}
            <div ref={annotationRef} className="hidden lg:flex absolute -right-6 top-12 rotate-90 origin-bottom-right items-center gap-4">
              <span className="w-12 h-px bg-primary/30" />
              <span className="text-[9px] font-heading font-bold text-primary/60 uppercase tracking-[0.2em] whitespace-nowrap">
                ARKGO SOLUTIONS PROJECT EXPERIENCE
              </span>
            </div>
          </div>

          {/* Right Column: Content (cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-4 lg:pt-16 xl:pt-24 lg:pr-8">
            
            {/* Section Label */}
            <div className="flex items-start mb-6">
              <div ref={accentLineRef} className="w-[3px] h-4 bg-secondary mr-4 mt-0.5" />
              <div ref={eyebrowRef} className="text-sm font-heading font-bold text-primary uppercase tracking-widest">
                WHO WE ARE
              </div>
            </div>
            
            {/* Primary Heading */}
            <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
              SOLAR SOLUTIONS BUILT AROUND REAL REQUIREMENTS.
            </h2>
            
            {/* Secondary Statement */}
            <div ref={subheadingRef} className="text-sm md:text-base font-heading font-bold text-secondary uppercase tracking-widest mb-6">
              FROM PROJECT PLANNING TO POWER GENERATION.
            </div>
            
            {/* Body Copy */}
            <div ref={paragraphRef} className="text-base md:text-lg text-text-muted font-sans leading-relaxed mb-10">
              ARKGO Solutions is a dedicated solar business operating from Muzaffarpur, Bihar. We work across the entire solar value chain, providing product distribution, retail sales, complete system installation, and ongoing maintenance service for our customers.
            </div>

            {/* CTA */}
            <div ref={factsRef} className="flex pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-[4px] font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors group"
              >
                KNOW MORE ABOUT ARKGO
                <svg className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
