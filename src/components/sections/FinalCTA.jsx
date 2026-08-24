"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const panelRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const cta1Ref = useRef(null);
  const cta2Ref = useRef(null);
  const contactLineRef = useRef(null);
  const redMarkerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 100%)" });
      gsap.set(imageRef.current, { scale: 1.05 });
      gsap.set(panelRef.current, { x: 50, opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current, cta1Ref.current, cta2Ref.current, contactLineRef.current], { y: 20, opacity: 0 });
      gsap.set(redMarkerRef.current, { scaleY: 0, transformOrigin: "top" });

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
          .to(imageRef.current, { scale: 1, duration: 1.5, ease: "power2.out" }, 0)
          .to(panelRef.current, { x: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(redMarkerRef.current, { scaleY: 1, duration: 0.4 }, 0.6)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.7)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.8)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.9)
          .to(cta1Ref.current, { y: 0, opacity: 1, duration: 0.5 }, 1.0)
          .to(cta2Ref.current, { y: 0, opacity: 1, duration: 0.5 }, 1.1)
          .to(contactLineRef.current, { y: 0, opacity: 1, duration: 0.5 }, 1.2);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            imageContainerRef.current,
            panelRef.current,
            redMarkerRef.current,
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
            x: 0,
            scaleY: 1,
            clipPath: "inset(0% 0% 0% 0%)",
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
    <section ref={sectionRef} className="relative bg-white pt-20 pb-0 lg:pt-32 lg:pb-32 overflow-hidden z-0">
      <div className="container mx-auto px-0 lg:px-8 max-w-[1400px]">
        
        <div className="relative flex flex-col lg:flex-row lg:items-center w-full">
          
          {/* Large Background Project Image */}
          <div className="w-full lg:w-[85%] relative h-[350px] md:h-[450px] lg:h-[700px]">
            <div 
              ref={imageContainerRef}
              className="absolute inset-0 w-full h-full bg-primary overflow-hidden"
            >
              <Image
                ref={imageRef}
                src="/images/ai/arkgo-solar-panels-sunset.webp"
                alt="Solar Panels at Sunset in Bihar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Subtle dark overlay for contrast if needed, but keeping it minimal */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>

          {/* Content Panel (Overlaps Image on Desktop) */}
          <div 
            ref={panelRef}
            className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[40%] xl:w-[38%] bg-primary p-8 md:p-12 lg:p-16 border-t-[6px] border-secondary lg:border-t-0 shadow-2xl z-10 overflow-hidden"
          >
            {/* Background Technical Grid Motif */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

            <div className="flex flex-col relative z-10">
              
              {/* Eyebrow */}
              <div className="flex items-center mb-8">
                <span ref={redMarkerRef} className="w-1 h-5 bg-secondary mr-4 block" />
                <span ref={eyebrowRef} className="text-sm font-heading font-bold text-white uppercase tracking-[0.15em]">
                  START YOUR SOLAR PROJECT
                </span>
              </div>
              
              {/* Headline */}
              <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                READY TO EXPLORE YOUR SOLAR REQUIREMENT?
              </h2>
              
              {/* Copy */}
              <p ref={copyRef} className="text-base md:text-lg text-[#B8C8D5] font-sans leading-relaxed mb-10">
                Tell us about your requirement and speak with ARKGO Solutions about the next step for your project.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div ref={cta1Ref} className="w-full sm:w-auto">
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-center w-full bg-secondary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#c23e28] group/primary"
                  >
                    GET A QUOTE
                    <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/primary:translate-x-1.5" />
                  </Link>
                </div>
                
                <div ref={cta2Ref} className="w-full sm:w-auto">
                  <Link 
                    href="https://wa.me/917979055407" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-transparent border border-white text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:border-secondary hover:text-secondary group/secondary"
                  >
                    WHATSAPP US
                    <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/secondary:translate-x-1.5" />
                  </Link>
                </div>
              </div>
              
              {/* Micro-Contact Line */}
              <div ref={contactLineRef} className="flex flex-col sm:flex-row sm:items-center text-xs font-heading font-bold text-white/60 uppercase tracking-widest gap-2 sm:gap-4">
                <a href="tel:6207596334" className="hover:text-white transition-colors duration-300">
                  CALL 6207596334
                </a>
                <span className="hidden sm:inline-block text-white/30">•</span>
                <span className="sm:hidden text-white/30 text-[10px]">OR</span>
                <a href="https://wa.me/917979055407" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  WHATSAPP 7979055407
                </a>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
