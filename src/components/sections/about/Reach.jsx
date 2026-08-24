"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Reach() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);
  const officePanelRef = useRef(null);
  const stateLabelRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current], { y: 20, opacity: 0 });
      gsap.set(officePanelRef.current, { y: 30, opacity: 0 });
      gsap.set(stateLabelRef.current, { opacity: 0, x: -20 });
      
      gsap.set(markerRef.current, { scale: 0, opacity: 0, transformOrigin: "bottom center" });

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
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.2)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4);
        
        tl.to(markerRef.current, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }, 1.5)
          .to(stateLabelRef.current, { opacity: 1, x: 0, duration: 0.8 }, 1.7)
          .to(officePanelRef.current, { y: 0, opacity: 1, duration: 0.8 }, 1.9);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            markerRef.current,
            stateLabelRef.current,
            officePanelRef.current
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
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
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#E8F1F8] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-10 right-10 md:top-20 md:right-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        06
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Intro Content */}
        <div className="flex flex-col mb-16 lg:mb-24 max-w-3xl relative z-10">
          <div ref={eyebrowRef} className="flex items-center mb-8">
            <span className="w-1 h-5 bg-secondary mr-4 block" />
            <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
              WHERE WE WORK
            </span>
          </div>
          
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
            ROOTED IN BIHAR. WORKING ACROSS THE STATE.
          </h2>
          
          <p ref={copyRef} className="text-base lg:text-lg text-[#3A536B] font-sans leading-relaxed">
            ARKGO Solutions is currently working across all districts of Bihar, while its office is located in Sakra Faridpur, Dholi, Muzaffarpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Geographic Map (7 cols) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-start" aria-label="Bihar map representing ARKGO Solutions' work across all districts of Bihar, with a marker in Muzaffarpur.">
            
            <div ref={mapContainerRef} className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
              <Image 
                src="/images/map.png" 
                alt="ARKGO Solutions Map of Bihar" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Office Marker (Muzaffarpur approx relative coordinates) */}
              <div 
                ref={markerRef}
                className="absolute left-[45%] top-[35%] flex flex-col items-center animate-bounce -translate-x-1/2 -translate-y-full"
                aria-label="ARKGO Solutions office in Sakra Faridpur, Dholi, Muzaffarpur, Bihar."
              >
                <div className="bg-white px-3 py-1.5 border border-secondary text-[10px] font-heading font-bold text-primary uppercase tracking-widest shadow-sm mb-1 whitespace-nowrap">
                  ARKGO OFFICE
                </div>
                <MapPin className="w-6 h-6 text-secondary fill-secondary/20" />
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1" />
              </div>

              {/* State Label overlay */}
              <div ref={stateLabelRef} className="absolute bottom-12 right-4 lg:bottom-16 lg:right-12">
                <span className="text-4xl md:text-5xl lg:text-[64px] font-heading font-black text-primary/10 uppercase tracking-tighter leading-none select-none">
                  BIHAR
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: Office Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Reach Statement */}
            <div className="mb-12 lg:mb-16">
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.2em] block mb-2">
                WORKING ACROSS
              </span>
              <span className="text-2xl lg:text-3xl font-heading font-extrabold text-primary uppercase tracking-tight">
                ALL DISTRICTS OF BIHAR
              </span>
            </div>

            {/* Office Information Panel */}
            <div ref={officePanelRef} className="bg-white p-8 md:p-10 border-t-[6px] border-primary shadow-sm relative">
              
              {/* Abstract structural graphic */}
              <div className="absolute right-8 top-8 opacity-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H40V40H0V0Z" fill="url(#pattern)" />
                  <defs>
                    <pattern id="pattern" width="4" height="4" patternUnits="userSpaceOnUse">
                      <rect width="1" height="1" fill="#073B73" />
                    </pattern>
                  </defs>
                </svg>
              </div>

              <div className="text-xs font-heading font-bold text-primary/50 uppercase tracking-widest mb-6 border-b border-[#DCE3E8] pb-4 inline-block w-full">
                OFFICE LOCATION
              </div>
              
              <h3 className="text-xl font-heading font-extrabold text-primary uppercase tracking-wider mb-6">
                ARKGO SOLUTIONS
              </h3>
              
              <address className="text-base text-[#3A536B] font-sans not-italic leading-relaxed">
                Subaidya Complex<br />
                Sakra Faridpur<br />
                Dholi<br />
                Muzaffarpur, Bihar 843105
              </address>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
