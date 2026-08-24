"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const markerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const cta1Ref = useRef(null);
  const cta2Ref = useRef(null);
  const contactLineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current, cta1Ref.current, cta2Ref.current, contactLineRef.current], { y: 20, opacity: 0 });
      gsap.set(markerRef.current, { scaleY: 0, transformOrigin: "top" });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(numberRef.current, { opacity: 0.05, duration: 1 })
          .to(markerRef.current, { scaleY: 1, duration: 0.4 }, 0.2)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.3)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(cta1Ref.current, { y: 0, opacity: 1, duration: 0.5 }, 0.6)
          .to(cta2Ref.current, { y: 0, opacity: 1, duration: 0.5 }, 0.7)
          .to(contactLineRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.8);
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
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar services with ARKGO.");
  const whatsappUrl = `https://wa.me/917979055407?text=${whatsappMessage}`;

  return (
    <section ref={sectionRef} className="relative w-full py-[72px] md:py-[88px] lg:py-[120px] bg-[#073B73] overflow-hidden z-0">
      
      {/* Subtle Background Number */}
      <div 
        ref={numberRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[250px] lg:text-[350px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        07
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        {/* Editorial Asymmetric Layout (or Centered) - Going with slightly asymmetric to maintain editorial feel */}
        <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
          
          <div className="flex items-center justify-center mb-6 lg:mb-8">
            <span ref={markerRef} className="w-1 h-5 bg-secondary mr-4 block" />
            <span ref={eyebrowRef} className="text-xs md:text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
              START YOUR PROJECT
            </span>
            <div className="w-1 h-5 bg-secondary ml-4 block lg:hidden" />
          </div>
          
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[46px] font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            LET&apos;S FIND THE RIGHT SOLAR APPROACH FOR YOUR PROJECT.
          </h2>
          
          <p ref={copyRef} className="text-base md:text-lg text-[#F4F7FA] font-sans leading-relaxed mb-12 max-w-2xl">
            Tell us about your residential, commercial or industrial requirement and speak with ARKGO Solutions about the next step.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 w-full">
            <div ref={cta1Ref} className="w-full sm:w-auto min-w-[200px]">
              <Link 
                href="/contact" 
                className="flex items-center justify-center w-full bg-[#D94A32] text-[#FFFFFF] px-8 py-5 text-xs md:text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#c23e28]"
              >
                GET A QUOTE
                <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
            
            <div ref={cta2Ref} className="w-full sm:w-auto min-w-[200px]">
              <Link 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-transparent border border-white/30 text-white px-8 py-5 text-xs md:text-sm font-heading font-bold uppercase tracking-widest transition-colors duration-300 hover:border-[#D94A32] hover:text-[#D94A32]"
              >
                WHATSAPP US
                <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Direct Contact Line */}
          <div ref={contactLineRef} className="flex flex-col sm:flex-row justify-center items-center text-xs font-heading font-bold text-white/60 uppercase tracking-widest gap-2 sm:gap-4 pt-6 border-t border-white/10 w-full max-w-md mx-auto">
            <a href="tel:6207596334" className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4">
              CALL 6207596334
            </a>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <span className="sm:hidden text-white/30 text-[10px]">OR</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4">
              WHATSAPP 7979055407
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
