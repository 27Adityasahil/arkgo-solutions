"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CompanyStory() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const copyRef2 = useRef(null);
  const flowContainerRef = useRef(null);
  const flowLineRef = useRef(null);
  const flowItemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial states
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(imageRef.current, { scale: 1.04 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current, copyRef2.current], { y: 20, opacity: 0 });
      gsap.set(flowContainerRef.current, { opacity: 0 });
      gsap.set(flowItemsRef.current, { opacity: 0, y: 10 });
      if (flowLineRef.current) {
        gsap.set(flowLineRef.current, { scaleX: 0, scaleY: 0, transformOrigin: "top left" });
      }

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(numberRef.current, { opacity: 0.05, duration: 1.5 }, 0)
          .to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.inOut" }, 0.1)
          .to(imageRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0.1)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
          .to(copyRef2.current, { y: 0, opacity: 1, duration: 0.8 }, 0.7)
          .to(flowContainerRef.current, { opacity: 1, duration: 0.5 }, 0.8);

        if (flowLineRef.current) {
          // ScaleX for desktop (horizontal), ScaleY for mobile (vertical)
          const isDesktop = window.innerWidth >= 1024;
          tl.to(flowLineRef.current, { 
            scaleX: isDesktop ? 1 : 0, 
            scaleY: isDesktop ? 0 : 1, 
            duration: 1, 
            ease: "power2.inOut" 
          }, 0.9);
        }

        if (flowItemsRef.current.length) {
          tl.to(flowItemsRef.current, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, 1.1);
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            imageContainerRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            copyRef2.current,
            flowContainerRef.current,
            ...flowItemsRef.current
          ],
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
        if (flowLineRef.current) {
          const isDesktop = window.innerWidth >= 1024;
          gsap.set(flowLineRef.current, { scaleX: isDesktop ? 1 : 0, scaleY: isDesktop ? 0 : 1 });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const flowSteps = [
    { num: "01", label: "CONSULT", desc: "Solar Consultation" },
    { num: "02", label: "DESIGN", desc: "Solar System Design" },
    { num: "03", label: "INSTALL", desc: "Solar Installation" },
    { num: "04", label: "SUPPORT", desc: "Maintenance & Repair" }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#FFFFFF] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-32 left-10 lg:top-24 lg:left-1/2 lg:-translate-x-1/4 text-[250px] md:text-[350px] lg:text-[450px] font-heading font-black text-[#073B73] leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        02
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Image Canvas (55%) */}
          <div className="lg:col-span-6 xl:col-span-7 relative order-1">
            <div 
              ref={imageContainerRef}
              className="relative w-full h-[320px] md:h-[420px] lg:h-[700px] bg-primary overflow-hidden"
            >
              <div ref={imageRef} className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/ai/arkgo-solar-company-history.webp"
                  alt="ARKGO Solutions installation team at work"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content Profile (45%) */}
          <div ref={contentRef} className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center order-2">
            
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="flex items-center mb-8">
              <span className="w-1 h-5 bg-secondary mr-4 block" />
              <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
                THE COMPANY
              </span>
            </div>
            
            {/* Heading */}
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
              FROM SOLAR REQUIREMENT TO COMPLETE SYSTEM SOLUTION.
            </h2>
            
            {/* Body Copy */}
            <p ref={copyRef} className="text-base lg:text-lg text-text-primary font-sans leading-relaxed mb-6">
              ARKGO Solutions provides solar energy solutions for residential, commercial and industrial requirements. Its service capabilities cover the project journey from solar consultation and site survey through system design, installation and ongoing maintenance and service.
            </p>
            
            <p ref={copyRef2} className="text-base lg:text-lg text-text-primary font-sans leading-relaxed mb-16">
              With work extending across all districts of Bihar, ARKGO Solutions focuses on practical solar applications based on the requirements of each project.
            </p>
            
            {/* Service Flow */}
            <div ref={flowContainerRef} className="mt-auto relative border border-[#DCE3E8]/50 p-6 lg:p-8 bg-white shadow-sm">
              
              {/* Structural Connecting Line */}
              {/* Desktop Line (Horizontal) */}
              <div 
                ref={flowLineRef}
                className="absolute left-6 lg:left-12 top-10 lg:top-14 h-px bg-[#DCE3E8] w-[calc(100%-48px)] lg:w-[calc(100%-96px)] origin-left hidden lg:block" 
              />
              {/* Mobile Line (Vertical) */}
              <div 
                className="absolute left-[39px] top-12 w-px bg-[#DCE3E8] h-[calc(100%-96px)] origin-top lg:hidden" 
              />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-4 relative z-10">
                {flowSteps.map((step, index) => (
                  <div 
                    key={index} 
                    ref={el => flowItemsRef.current[index] = el}
                    className="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-white border border-[#DCE3E8] flex items-center justify-center lg:mb-4 shrink-0 shadow-sm">
                      <span className="text-[10px] font-heading font-bold text-primary tracking-widest">{step.num}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-heading font-bold text-primary uppercase tracking-[0.15em] lg:mb-1">
                        {step.label}
                      </span>
                      <span className="block text-xs font-sans text-text-secondary">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
