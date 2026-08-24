"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutCTA() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const markerRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const cta1Ref = useRef(null);
  const cta2Ref = useRef(null);
  const contactLineRef = useRef(null);
  const imageStripRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current, cta1Ref.current, cta2Ref.current, contactLineRef.current], { y: 20, opacity: 0 });
      gsap.set(markerRef.current, { scaleY: 0, transformOrigin: "top" });
      if (imageStripRef.current) gsap.set(imageStripRef.current, { clipPath: "inset(0% 100% 0% 0%)" });

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
          .to(markerRef.current, { scaleY: 1, duration: 0.4 }, 0.2)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.3)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(cta1Ref.current, { y: 0, opacity: 1, duration: 0.5 }, 0.6)
          .to(cta2Ref.current, { y: 0, opacity: 1, duration: 0.5 }, 0.7)
          .to(contactLineRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.8);

        if (imageStripRef.current) {
          tl.to(imageStripRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.inOut" }, 0.5);
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            markerRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            cta1Ref.current,
            cta2Ref.current,
            contactLineRef.current
          ],
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
        if (imageStripRef.current) gsap.set(imageStripRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar solutions with ARKGO.");
  const whatsappUrl = `https://wa.me/917979055407?text=${whatsappMessage}`;

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-36 bg-primary overflow-hidden z-0 border-t border-white/5">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-20 right-10 lg:top-32 lg:right-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        08
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Architectural Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          
          {/* LEFT: Main Typography (6 cols) */}
          <div className="lg:col-span-6 flex flex-col relative z-10 pt-4">
            
            <div className="flex items-center mb-8">
              <span ref={markerRef} className="w-1 h-5 bg-secondary mr-4 block" />
              <span ref={eyebrowRef} className="text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
                WORK WITH ARKGO
              </span>
            </div>
            
            <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-[64px] xl:text-[76px] font-heading font-extrabold text-white leading-[1.05] tracking-tight pr-4">
              LET&apos;S DISCUSS YOUR SOLAR REQUIREMENT.
            </h2>
            
          </div>

          {/* RIGHT: Contact Block (6 cols) */}
          <div className="lg:col-span-6 flex flex-col relative z-10 w-full pb-2">
            
            <p ref={copyRef} className="text-base md:text-lg lg:text-xl text-text-on-dark font-sans leading-relaxed mb-12 max-w-lg">
              Have a residential, commercial or industrial solar requirement? Speak with ARKGO Solutions about your project.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full">
              <div ref={cta1Ref} className="w-full sm:w-auto">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center w-full bg-secondary text-white px-10 py-5 text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#c23e28] group/primary shadow-lg shadow-black/10"
                >
                  GET A QUOTE
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/primary:translate-x-1.5" />
                </Link>
              </div>
              
              <div ref={cta2Ref} className="w-full sm:w-auto">
                <Link 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-transparent border border-white text-white px-10 py-5 text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:border-secondary hover:text-secondary group/secondary"
                >
                  WHATSAPP US
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/secondary:translate-x-1.5" />
                </Link>
              </div>
            </div>
            
            {/* Direct Contact Line */}
            <div ref={contactLineRef} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center text-xs font-heading font-bold text-white/60 uppercase tracking-widest gap-2 sm:gap-4">
                <a href="tel:6207596334" className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4">
                  CALL 6207596334
                </a>
                <span className="hidden sm:inline-block text-white/30">•</span>
                <span className="sm:hidden text-white/30 text-[10px]">OR</span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4">
                  WHATSAPP 7979055407
                </a>
              </div>
              
              <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-[0.2em] pt-4 border-t border-white/10 w-fit">
                MUZAFFARPUR, BIHAR
              </span>
            </div>

          </div>
          
        </div>

        {/* Optional narrow background strip */}
        <div ref={imageStripRef} className="absolute bottom-0 right-0 w-[45%] h-32 opacity-10 pointer-events-none hidden lg:block overflow-hidden">
           <div className="absolute inset-0 z-0">
             <Image
               src="/images/ai/arkgo-solar-project-consultation.webp"
               alt="Solar project consultation in India"
               fill
               className="object-cover object-center"
               sizes="(max-width: 1024px) 100vw, 65vw"
             />
            {/* Dark gradient overlay to blend into background */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        </div>

      </div>
    </section>
  );
}
