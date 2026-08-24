"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceSequence = ["CONSULT", "ASSESS", "DESIGN", "INSTALL", "SUPPORT"];

export default function ServicesHero() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const panelRef = useRef(null);
  const numberRef = useRef(null);
  const markerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const sequenceContainerRef = useRef(null);
  const sequenceItemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(imageRef.current, { scale: 1.03 });
      gsap.set(panelRef.current, { xPercent: -100 });
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current, ctaGroupRef.current], { y: 20, opacity: 0 });
      gsap.set(markerRef.current, { scaleY: 0, transformOrigin: "top" });
      gsap.set(sequenceItemsRef.current, { opacity: 0, x: -10 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" }
        });

        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.inOut" }, 0)
          .to(imageRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0)
          .to(panelRef.current, { xPercent: 0, duration: 1.2, ease: "power3.inOut" }, 0.4)
          .to(numberRef.current, { opacity: 0.05, duration: 1 }, 1.0)
          .to(markerRef.current, { scaleY: 1, duration: 0.4 }, 1.2)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 1.3)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.4)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.5)
          .to(ctaGroupRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.6)
          .to(sequenceItemsRef.current, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 }, 1.8);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            imageContainerRef.current,
            panelRef.current,
            numberRef.current,
            markerRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            ctaGroupRef.current,
            ...sequenceItemsRef.current
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            xPercent: 0,
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

  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar services with ARKGO.");
  const whatsappUrl = `https://wa.me/917979055407?text=${whatsappMessage}`;

  return (
    <section ref={sectionRef} className="relative w-full min-h-[90vh] lg:h-screen lg:min-h-[800px] bg-[#FAF7F0] overflow-hidden flex flex-col lg:flex-row pt-20 lg:pt-0">
      
      {/* LEFT / TOP: Deep Blue Content Panel (lg: 35-40% width) */}
      <div 
        ref={panelRef}
        className="w-full lg:w-[45%] xl:w-[40%] bg-primary h-full relative z-10 flex flex-col pt-12 pb-8 px-6 md:px-12 lg:pt-32 lg:pb-16 lg:px-16"
      >
        {/* Subtle Background Number */}
        <div 
          ref={numberRef}
          className="absolute top-8 left-8 lg:top-24 lg:left-12 text-[180px] lg:text-[250px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter"
          aria-hidden="true"
        >
          01
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full mt-auto lg:mt-0 lg:justify-center">
          
          <div className="flex items-center mb-8">
            <span ref={markerRef} className="w-1 h-5 bg-secondary mr-4 block" />
            <span ref={eyebrowRef} className="text-xs md:text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
              OUR SERVICES
            </span>
          </div>
          
          <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-[54px] xl:text-[64px] font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            SOLAR SERVICES FROM REQUIREMENT TO INSTALLATION.
          </h1>
          
          <p ref={copyRef} className="text-base md:text-lg text-text-on-dark font-sans leading-relaxed mb-10 max-w-md">
            From understanding your energy requirement to system design, installation and ongoing service, ARKGO Solutions supports solar projects across Bihar.
          </p>
          
          <div ref={ctaGroupRef} className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16">
            <Link 
              href="/contact" 
              className="flex items-center justify-center bg-secondary text-white px-8 py-4 text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#c23e28] group/primary shadow-lg shadow-black/10"
            >
              GET A QUOTE
              <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/primary:translate-x-1" />
            </Link>
            <Link 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:border-white group/secondary"
            >
              WHATSAPP US
              <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/secondary:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* Bottom Service Sequence Strip */}
        <div ref={sequenceContainerRef} className="mt-auto border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center gap-y-4 lg:gap-0 relative z-10 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 lg:gap-6 flex-wrap w-full">
            {serviceSequence.map((item, index) => (
              <div 
                key={index} 
                ref={el => sequenceItemsRef.current[index] = el}
                className="flex items-center text-[10px] md:text-xs font-heading font-bold text-white uppercase tracking-widest whitespace-nowrap"
              >
                <span className={index === 2 ? "text-secondary" : ""}>{item}</span>
                {index < serviceSequence.length - 1 && (
                  <span className="hidden md:block ml-4 lg:ml-6 text-white/30">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT / BOTTOM: Full Architectural Image (lg: 55-60% width) */}
      <div className="w-full lg:w-[55%] xl:w-[60%] h-[40vh] md:h-[50vh] lg:h-full relative z-0 order-first lg:order-last">
        <div 
          ref={imageContainerRef}
          className="absolute inset-0 w-full h-full bg-[#E8F1F8] overflow-hidden"
        >
          <div ref={imageRef} className="absolute inset-0 z-0">
          <Image
            src="/images/ai/arkgo-services-hero-banner.webp"
            alt="Pristine rooftop solar panel array under bright morning sunlight"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          </div>
        </div>
      </div>

    </section>
  );
}
