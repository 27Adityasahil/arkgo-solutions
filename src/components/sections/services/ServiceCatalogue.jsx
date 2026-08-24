"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "SOLAR CONSULTATION",
    description: "Understand the project's solar requirement and possible system approach."
  },
  {
    id: "02",
    title: "SITE SURVEY",
    description: "Assess the site and its practical requirements before system design."
  },
  {
    id: "03",
    title: "SOLAR SYSTEM DESIGN",
    description: "Develop a solar system configuration around the project's requirements."
  },
  {
    id: "04",
    title: "SOLAR PANEL INSTALLATION",
    description: "Install solar panels as part of the project's solar system."
  },
  {
    id: "05",
    title: "INVERTER INSTALLATION",
    description: "Install the inverter as part of the solar power system."
  },
  {
    id: "06",
    title: "BATTERY SOLUTIONS",
    description: "Provide battery-based solutions where energy storage is part of the project requirement."
  },
  {
    id: "07",
    title: "SOLAR MAINTENANCE",
    description: "Support installed systems through ongoing maintenance."
  },
  {
    id: "08",
    title: "SOLAR REPAIR & SERVICE",
    description: "Provide repair and service support for solar systems."
  }
];

export default function ServiceCatalogue() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const numberRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  
  const rightColRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const serviceRowsRef = useRef([]);
  const ctaRef = useRef(null);

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(imageRef.current, { scale: 1.05 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current, ctaRef.current], { y: 20, opacity: 0 });
      
      serviceRowsRef.current.forEach((el) => {
        if (!el) return;
        const line = el.querySelector('.service-line');
        const content = el.querySelector('.service-content');
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(content, { y: 15, opacity: 0 });
      });

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
          .to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.inOut" }, 0.2)
          .to(imageRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0.2)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.4)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.6);

        // Service Rows Initial Reveal
        serviceRowsRef.current.forEach((el, index) => {
          if (!el) return;
          const line = el.querySelector('.service-line');
          const content = el.querySelector('.service-content');
          
          tl.to(line, { scaleX: 1, duration: 0.8 }, 0.6 + (index * 0.1))
            .to(content, { y: 0, opacity: 1, duration: 0.6 }, 0.7 + (index * 0.1));
        });
        
        tl.to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.8 + (services.length * 0.1));

        // Scroll-driven Active State highlighting
        serviceRowsRef.current.forEach((el, index) => {
          if (!el) return;
          
          ScrollTrigger.create({
            trigger: el,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive) {
                setActiveService(index);
              }
            }
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const lines = serviceRowsRef.current.map(el => el?.querySelector('.service-line')).filter(Boolean);
        const contents = serviceRowsRef.current.map(el => el?.querySelector('.service-content')).filter(Boolean);
        
        gsap.to(
          [
            numberRef.current,
            imageContainerRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            ...lines,
            ...contents,
            ctaRef.current
          ],
          {
            opacity: 1,
            y: 0,
            scaleX: 1,
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
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#FAF7F0] z-0" id="service-catalogue">
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Mobile Intro Header */}
        <div className="lg:hidden flex flex-col mb-10 relative z-10">
          <div className="flex items-center mb-6">
            <span className="w-1 h-5 bg-secondary mr-4 block" />
            <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-6">
            COMPLETE SOLAR SERVICES. ONE PROJECT, END TO END.
          </h2>
          <p className="text-base md:text-lg text-text-primary font-sans leading-relaxed">
            ARKGO Solutions supports solar projects across consultation, assessment, system design, installation and post-installation service.
          </p>
        </div>

        {/* 42/58 Desktop Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 relative">
          
          {/* LEFT: Fixed Visual Area (42% roughly ~ 5 cols) */}
          <div className="lg:col-span-5 w-full order-first lg:order-none relative z-10 h-auto">
            {/* The wrapper that sticks */}
            <div className="lg:sticky lg:top-32 h-[400px] md:h-[500px] lg:h-[80vh] w-full mb-10 lg:mb-0">
              
              {/* Background Section Number */}
              <div 
                ref={numberRef}
                className="absolute -top-16 -left-10 text-[250px] lg:text-[400px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
                aria-hidden="true"
              >
                02
              </div>

              <div 
                ref={imageContainerRef}
                className="w-full h-full bg-primary relative overflow-hidden"
              >
                <Image
                  ref={imageRef}
                  src="/images/projects/sakra-installation-1.jpg"
                  alt="ARKGO Solutions engineering and solar project installation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* RIGHT: Service Catalogue (58% roughly ~ 7 cols) */}
          <div ref={rightColRef} className="lg:col-span-7 flex flex-col relative z-10">
            
            {/* Desktop Intro Header */}
            <div className="hidden lg:flex flex-col mb-16 relative z-10">
              <div ref={eyebrowRef} className="flex items-center mb-8">
                <span className="w-1 h-5 bg-secondary mr-4 block" />
                <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
                  WHAT WE DO
                </span>
              </div>
              <h2 ref={headingRef} className="text-4xl xl:text-[48px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
                COMPLETE SOLAR SERVICES. ONE PROJECT, END TO END.
              </h2>
              <p ref={copyRef} className="text-lg text-text-primary font-sans leading-relaxed max-w-xl">
                ARKGO Solutions supports solar projects across consultation, assessment, system design, installation and post-installation service.
              </p>
            </div>

            {/* Editorial Service List (Long Scroll Area) */}
            <div className="flex flex-col w-full">
              {services.map((service, index) => {
                const isActive = activeService === index;
                
                return (
                  <div 
                    key={service.id}
                    ref={el => serviceRowsRef.current[index] = el}
                    className="relative flex flex-col cursor-default"
                  >
                    {/* Structural Top Rule */}
                    <div className="service-line w-full h-[1px] bg-[#DCE3E8]" />

                    {/* Increased padding for editorial scroll rhythm */}
                    <div className="service-content flex flex-col md:flex-row items-start md:items-baseline md:gap-8 lg:gap-12 py-12 lg:py-24 relative transition-opacity duration-500">
                      
                      {/* Active Red Line */}
                      <div className={`absolute -left-4 top-0 bottom-0 w-[2px] bg-secondary origin-top transition-transform duration-500 ease-out hidden md:block ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />
                      <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-secondary origin-top transition-transform duration-500 ease-out md:hidden ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />

                      {/* Number */}
                      <div className={`text-2xl md:text-3xl font-heading font-bold tracking-widest transition-colors duration-500 mb-3 md:mb-0 md:w-16 shrink-0 pl-4 md:pl-0 ${isActive ? 'text-secondary' : 'text-primary/40'}`}>
                        {service.id}
                      </div>
                      
                      {/* Detail Container */}
                      <div className="flex flex-col pl-4 md:pl-0 pr-4 w-full">
                        <h3 className={`text-xl md:text-2xl lg:text-3xl font-heading font-extrabold uppercase tracking-wider mb-4 transition-colors duration-500 ${isActive ? 'text-[#0a2340]' : 'text-primary/70'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-base md:text-lg font-sans leading-relaxed max-w-xl transition-all duration-500 ${isActive ? 'text-text-primary translate-y-0' : 'text-text-secondary translate-y-2'}`}>
                          {service.description}
                        </p>
                      </div>
                      
                    </div>
                  </div>
                );
              })}
              
              {/* Final Bottom Rule */}
              <div className="w-full h-[1px] bg-[#DCE3E8]" />
              
            </div>

            {/* Bottom CTA */}
            <div ref={ctaRef} className="mt-16 lg:mt-24 pb-8 pl-4 md:pl-0">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-sm md:text-base font-heading font-bold text-primary uppercase tracking-widest transition-colors duration-300 hover:text-secondary group/cta"
              >
                DISCUSS YOUR REQUIREMENT
                <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
              </Link>
              <div className="w-full max-w-[280px] h-[1px] bg-primary/20 mt-3 group-hover/cta:bg-secondary/40 transition-colors duration-300" />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
