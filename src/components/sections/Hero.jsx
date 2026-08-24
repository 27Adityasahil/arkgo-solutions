"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef(null);
  const contentBlockRef = useRef(null);
  const elementsRef = useRef([]);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const decorativeLineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(contentBlockRef.current, { x: -50, opacity: 0 });
      gsap.set(elementsRef.current, { y: 20, opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(imageRef.current, { scale: 1.03 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0 });
      gsap.set(decorativeLineRef.current, { scaleX: 0, transformOrigin: "left center" });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.inOut" }, 0.1)
          .to(contentBlockRef.current, { x: 0, opacity: 1, duration: 1.0, ease: "power2.out" }, 0.6)
          .to(elementsRef.current[0], { y: 0, opacity: 1, duration: 0.8 }, 0.8) // Eyebrow
          .to(elementsRef.current[1], { y: 0, opacity: 1, duration: 0.8 }, 1.0) // Heading
          .to(elementsRef.current[2], { y: 0, opacity: 1, duration: 0.8 }, 1.2) // Supporting copy
          .to(elementsRef.current[3], { y: 0, opacity: 1, duration: 0.8 }, 1.4) // CTAs
          .to(elementsRef.current[4], { y: 0, opacity: 1, duration: 0.8 }, 1.6) // Credibility
          .to(decorativeLineRef.current, { scaleX: 1, duration: 1.2, ease: "power2.inOut" }, 1.4)
          .to(scrollIndicatorRef.current, { opacity: 1, duration: 1.0 }, 1.8);
          
        // Subtle image scroll motion
        gsap.to(imageRef.current, {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to([contentBlockRef.current, ...elementsRef.current, scrollIndicatorRef.current, decorativeLineRef.current], { opacity: 1, x: 0, y: 0, scaleX: 1, duration: 0.6, stagger: 0.1 });
        gsap.set(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(imageRef.current, { scale: 1 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen lg:min-h-[85vh] lg:h-auto flex flex-col lg:flex-row bg-white overflow-hidden">
      
      {/* Mobile Header Spacer */}
      <div className="lg:hidden h-20 w-full shrink-0 bg-white" />

      <div 
        ref={imageContainerRef} 
        className="relative w-full h-[40vh] min-h-[350px] lg:absolute lg:inset-0 lg:h-full lg:min-h-full z-0 order-1 lg:order-none"
      >
        <div ref={imageRef} className="absolute inset-0 z-0">
          <Image
            src="/images/ai/arkgo-solar-installation-commercial-wide.webp"
            alt="Commercial Rooftop Solar Installation in Bihar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Subtle overlay only if needed for extreme brightness, but relying on panel for contrast */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </div>

      {/* 3. Blue Content Block (Mobile Order 3, Desktop Left Panel) */}
      <div className="relative z-10 flex w-full lg:w-[45%] h-auto lg:h-full order-2 lg:order-none lg:min-h-screen">
        <div 
          ref={contentBlockRef}
          className="w-full bg-primary flex flex-col justify-center px-6 pt-28 pb-16 lg:pt-[16vh] lg:pb-[10vh] md:px-12 lg:px-16 xl:px-20 relative"
        >
          {/* Decorative Element: Architectural Red Line extending out */}
          <div 
            ref={decorativeLineRef}
            className="hidden lg:block absolute top-[25%] -right-16 w-32 h-[2px] bg-secondary opacity-50 z-20" 
          />

          <div className="max-w-2xl mx-auto lg:mx-0 w-full">
            
            {/* Eyebrow */}
            <div ref={el => elementsRef.current[0] = el} className="flex items-center mb-6">
              <span className="w-1 h-4 bg-secondary mr-3 inline-block"></span>
              <span className="text-xs md:text-sm font-heading font-bold text-white uppercase tracking-widest">
                ARKGO SOLUTIONS
              </span>
            </div>
            
            {/* Headline */}
            <h1 ref={el => elementsRef.current[1] = el} className="text-[40px] md:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-[-0.02em] font-heading font-extrabold text-white mb-6">
              POWERING BIHAR<br/>
              WITH CLEAN SOLAR ENERGY.
            </h1>
            
            {/* Supporting Copy */}
            <p ref={el => elementsRef.current[2] = el} className="text-base md:text-lg text-tint-blue font-sans leading-relaxed mb-10 max-w-md">
              Reliable solar solutions for residential, commercial and industrial requirements across Bihar.
            </p>
            
            {/* CTAs */}
            <div ref={el => elementsRef.current[3] = el} className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-secondary text-white hover:bg-[#b83b27] rounded-[4px] font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors group"
              >
                GET A QUOTE
                <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-white/10 rounded-[4px] font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors"
              >
                WHATSAPP US
                <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </div>

            {/* Credibility Marker */}
            <div ref={el => elementsRef.current[4] = el} className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-x-6 border-t border-white/20 pt-8">
              
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-white leading-none mb-1">1+ MW</span>
                <span className="text-[10px] font-heading text-white/70 uppercase tracking-widest">SOLAR PROJECTS EXECUTED</span>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-white/20"></div>
              
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-white leading-none mb-1">TOP 10</span>
                <span className="text-[10px] font-heading text-white/70 uppercase tracking-widest">NBPDCL VENDOR</span>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-white/20"></div>
              
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-white leading-none mb-1">3×</span>
                <span className="text-[10px] font-heading text-white/70 uppercase tracking-widest">DM SAMASTIPUR</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="hidden lg:flex absolute bottom-8 left-8 xl:left-16 z-20 items-center gap-4 text-white mix-blend-difference"
      >
        <span className="text-[10px] font-heading font-bold uppercase tracking-widest">SCROLL TO EXPLORE</span>
        <div className="relative w-12 h-px bg-white/30 overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-white origin-left animate-[scroll-line_2s_ease-in-out_infinite]" />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-line {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          50.1% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}} />
    </section>
  );
}
