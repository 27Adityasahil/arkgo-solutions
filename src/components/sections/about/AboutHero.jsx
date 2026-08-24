"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function AboutHero() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const contentBlockRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const redMarkerRef = useRef(null);
  const secondaryStatementRef = useRef(null);
  const metadataRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(imageRef.current, { scale: 1.05 });
      gsap.set(contentBlockRef.current, { y: 50, opacity: 0 });
      gsap.set([eyebrowRef.current, headlineRef.current, copyRef.current, secondaryStatementRef.current, metadataRef.current], { y: 20, opacity: 0 });
      gsap.set(redMarkerRef.current, { scaleY: 0, transformOrigin: "top" });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" }
        });

        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.inOut" }, 0.2)
          .to(imageRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0.2)
          .to(contentBlockRef.current, { y: 0, opacity: 1, duration: 1 }, 0.8)
          .to(redMarkerRef.current, { scaleY: 1, duration: 0.5 }, 1.0)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.1)
          .to(headlineRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.2)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.3)
          .to(secondaryStatementRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.4)
          .to(metadataRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.5);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            imageContainerRef.current,
            contentBlockRef.current,
            redMarkerRef.current,
            eyebrowRef.current,
            headlineRef.current,
            copyRef.current,
            secondaryStatementRef.current,
            metadataRef.current
          ],
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.8,
            stagger: 0.1
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FAF7F0] w-full min-h-[90vh] lg:min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-32 overflow-hidden flex flex-col justify-center">
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Large Editorial Composition */}
        <div className="relative w-full flex flex-col lg:flex-row lg:justify-end items-end lg:items-end h-full mt-4 lg:mt-12">
          
          {/* Main Photographic Canvas (70-80% Desktop) */}
          <div className="w-full lg:w-[80%] xl:w-[75%] h-[350px] md:h-[500px] lg:h-[700px] xl:h-[800px] relative z-0 order-1 lg:order-2 ml-auto">
            <div 
              ref={imageContainerRef}
              className="absolute inset-0 w-full h-full bg-primary overflow-hidden"
            >
              <Image
                ref={imageRef}
                src="/images/ai/arkgo-corporate-solar-infrastructure.webp"
                alt="Modern corporate solar infrastructure"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Metadata Line */}
            <div ref={metadataRef} className="absolute bottom-6 right-6 z-10 flex items-center bg-white/90 backdrop-blur-sm px-4 py-3 border-l-2 border-secondary hidden md:flex">
              <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">
                MUZAFFARPUR, BIHAR
              </span>
            </div>
          </div>

          {/* Deep Blue Content Block */}
          <div 
            ref={contentBlockRef}
            className="w-full lg:w-[50%] xl:w-[45%] bg-primary p-8 md:p-12 lg:p-16 relative z-10 order-2 lg:order-1 -mt-16 lg:mt-0 lg:absolute lg:left-0 lg:bottom-12 lg:-translate-y-0"
          >
            {/* Subtle Inner Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />

            <div className="flex flex-col h-full relative z-10">
              
              {/* Eyebrow / Section Label */}
              <div className="flex items-center mb-8">
                <span ref={redMarkerRef} className="w-[3px] h-6 bg-secondary mr-4 block" />
                <span ref={eyebrowRef} className="text-xs md:text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
                  ABOUT ARKGO
                </span>
                <div className="hidden lg:block ml-4 h-px bg-secondary/30 flex-grow max-w-[60px]"></div>
              </div>
              
              {/* Primary H1 */}
              <h1 ref={headlineRef} className="text-3xl md:text-4xl lg:text-[52px] xl:text-[60px] font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                BUILDING SOLAR SOLUTIONS AROUND REAL ENERGY REQUIREMENTS.
              </h1>
              
              {/* Supporting Copy */}
              <p ref={copyRef} className="text-base md:text-lg text-text-on-dark font-sans leading-relaxed mb-12">
                ARKGO Solutions provides solar energy solutions for residential, commercial and industrial requirements, with projects and service capabilities extending across Bihar.
              </p>
              
              {/* Secondary Editorial Statement */}
              <div ref={secondaryStatementRef} className="border-t border-text-on-dark/20 pt-6 mt-auto">
                <span className="text-[10px] md:text-xs font-heading font-bold text-secondary uppercase tracking-[0.2em] leading-loose block">
                  SOLAR ENERGY. PRACTICAL SOLUTIONS. REAL PROJECTS.
                </span>
              </div>
              
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
