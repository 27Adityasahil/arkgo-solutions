"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import clsx from "clsx";

const reasons = [
  {
    id: "01",
    title: "PROJECT-FOCUSED APPROACH",
    description: "Solutions are considered around the specific requirements of each project rather than treating every installation the same way."
  },
  {
    id: "02",
    title: "END-TO-END SOLAR SUPPORT",
    description: "ARKGO's service scope covers consultation, site survey, system design, installation, maintenance and repair."
  },
  {
    id: "03",
    title: "EXPERIENCE ACROSS BIHAR",
    description: "ARKGO Solutions is currently working across all districts of Bihar."
  },
  {
    id: "04",
    title: "REAL PROJECT EXPERIENCE",
    description: "30+ projects and 1+ MW of solar projects executed."
  }
];

export default function WhyArkgo() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const reasonsRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const rulesRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(headerRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 });
      gsap.set(imageRef.current, { scale: 1.04 });
      gsap.set(listRef.current?.children, { y: 20, opacity: 0 });
      gsap.set(rulesRef.current, { scaleX: 0, transformOrigin: "left center" });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(headerRef.current?.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 })
          .to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.2, ease: "power2.inOut" }, "-=0.4")
          .to(imageRef.current, { scale: 1, duration: 1.5, ease: "power2.out" }, "-=1.2")
          .to(rulesRef.current, { scaleX: 1, duration: 0.8, ease: "power2.inOut", stagger: 0.1 }, "-=0.8")
          .to(listRef.current?.children, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, "-=0.6");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current?.children,
            imageContainerRef.current,
            imageRef.current,
            rulesRef.current,
            listRef.current?.children
          ],
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            scaleX: 1,
            duration: 0.6,
            stagger: 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setRuleRef = (el) => {
    if (el && !rulesRef.current.includes(el)) {
      rulesRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white border-t border-border-edge">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left: Large Project Image (45%) */}
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[700px] xl:h-[800px] order-2 lg:order-1 lg:sticky lg:top-32">
            <div 
              ref={imageContainerRef}
              className="absolute inset-0 w-full h-full bg-base border border-border-edge overflow-hidden shadow-sm"
            >
              <div ref={imageRef} className="absolute inset-0 w-full h-full">
                <Image 
                  src="/images/ai/arkgo-solar-engineering-team.webp"
                  alt="ARKGO Professional Solar Engineering Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              </div>
            </div>
            
            {/* Subtle structural accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 hidden lg:block -z-10" />
          </div>

          {/* Right: Typography and Differentiators (55%) */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2 py-2 lg:py-6">
            
            {/* Section Header */}
            <div ref={headerRef} className="mb-12 lg:mb-16">
              <div className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
                WHY ARKGO
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-text-dark mb-8 leading-[1.1] max-w-3xl">
                BUILT AROUND QUALITY, EXECUTION AND TRUST
              </h2>
              <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed font-sans">
                From consultation and system design to installation and service, ARKGO Solutions focuses on delivering dependable solar solutions around the specific requirements of every project.
              </p>
            </div>

            {/* Structured Vertical List */}
            <div ref={listRef} className="flex flex-col border-t border-border-edge">
              {reasons.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative flex flex-col sm:flex-row items-start sm:items-baseline py-8 lg:py-10 border-b border-border-edge transition-colors duration-300 hover:bg-base/50 cursor-default"
                  tabIndex={0}
                >
                  {/* Subtle active state line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
                  
                  {/* Number */}
                  <div className="w-16 sm:w-20 pl-6 sm:pl-8 flex-shrink-0 mb-3 sm:mb-0">
                    <span className="text-sm font-heading font-bold text-text-muted group-hover:text-secondary group-focus:text-secondary transition-colors duration-300">
                      {item.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pr-6 sm:pr-8 pl-6 sm:pl-0">
                    <h3 className="text-xl font-heading font-bold text-text-dark mb-3 group-hover:translate-x-1 group-focus:translate-x-1 transition-transform duration-300 tracking-wide uppercase">
                      {item.title}
                    </h3>
                    <p className="text-base text-text-muted leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
