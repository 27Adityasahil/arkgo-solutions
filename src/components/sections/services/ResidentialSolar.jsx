"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { residentialServices } from "@/data/services";
import { ArrowRight, ImageIcon } from "lucide-react";

export default function ResidentialSolar() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const listContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(headerRef.current, { y: 20, opacity: 0 });
      gsap.set(titleRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(introRef.current, { y: 20, opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" }); // Reveal from left to right
      gsap.set(imageRef.current, { scale: 1.05 });
      
      const listItems = listContainerRef.current?.children ? Array.from(listContainerRef.current.children) : [];
      listItems.forEach(item => {
        gsap.set(item, { opacity: 0, x: 20 });
        const divider = item.querySelector('.service-divider');
        if (divider) gsap.set(divider, { scaleX: 0, transformOrigin: "left center" });
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

        // Image & Header
        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" })
          .to(imageRef.current, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.2")
          .to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.8")
          .to(titleRef.current?.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.6")
          .to(introRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

        // Service List
        if (listItems.length > 0) {
          listItems.forEach((item, idx) => {
            const divider = item.querySelector('.service-divider');
            if (divider) {
              tl.to(divider, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, idx === 0 ? "-=0.2" : "-=0.5");
            }
            tl.to(item, { opacity: 1, x: 0, duration: 0.5 }, "-=0.4");
          });
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const targets = [
          imageContainerRef.current,
          headerRef.current,
          titleRef.current?.children,
          introRef.current,
        ].filter(Boolean);
        
        listItems.forEach(item => {
          targets.push(item.querySelector('.service-divider'));
          targets.push(item);
        });

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          x: 0,
          scaleX: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Visual / Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 relative h-[500px] lg:h-[700px] w-full" ref={imageContainerRef}>
            <div className="absolute inset-0 bg-tint-blue/30 rounded-[4px] border border-border-edge overflow-hidden">
              
              {/* Fallback layout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-0 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                  <ImageIcon className="w-8 h-8 text-primary/40" />
                </div>
                <p className="text-xs font-heading font-bold text-text-muted uppercase tracking-widest mb-2">
                  RESIDENTIAL INSTALLATION
                </p>
                <p className="text-xs text-text-muted/60 max-w-xs">
                  Upload a high-quality residential installation photo to /images/projects/residential-installation.jpg
                </p>
              </div>

              {/* Real Image */}
              <div ref={imageRef} className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/residential-installation.jpg"
                  alt="Residential solar installation by ARKGO Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

            </div>
          </div>

          {/* Right: Content & Services List */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Header Content */}
            <div className="mb-12 lg:mb-16">
              <div ref={headerRef} className="text-sm font-heading font-bold text-secondary uppercase tracking-widest mb-6">
                01 / RESIDENTIAL
              </div>
              
              <div ref={titleRef} className="flex flex-col gap-y-2 overflow-hidden mb-6 max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  SOLAR SOLUTIONS FOR
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  RESIDENTIAL ENERGY
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-primary leading-[1.15]">
                  REQUIREMENTS
                </h2>
              </div>
              
              <p ref={introRef} className="text-lg text-text-muted leading-relaxed max-w-xl">
                ARKGO Solutions provides residential solar installation services designed around the energy requirements of homes and residential properties.
              </p>
            </div>

            {/* Service List */}
            <div ref={listContainerRef} className="flex flex-col">
              {residentialServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className="group relative flex flex-col cursor-default"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  
                  {/* Top Divider */}
                  <div className={`service-divider w-full h-px transition-colors duration-300 ${activeService === service.id ? 'bg-secondary' : 'bg-border-edge'}`} />
                  
                  {/* Content Row */}
                  <div className="flex items-start md:items-center py-6 md:py-8 gap-6 md:gap-10">
                    <div className="w-8 md:w-12 flex-shrink-0 pt-1 md:pt-0">
                      <span className={`text-xl font-heading font-bold transition-colors duration-300 ${activeService === service.id ? 'text-secondary' : 'text-primary'}`}>
                        {service.number}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-heading font-bold text-text-dark uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-primary">
                        {service.title}
                      </h3>
                      <p className="text-base text-text-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="hidden md:flex w-8 h-8 flex-shrink-0 items-center justify-center">
                      <ArrowRight className={`w-5 h-5 transition-all duration-300 ${activeService === service.id ? 'text-secondary translate-x-1 opacity-100' : 'text-border-edge opacity-0 -translate-x-2'}`} />
                    </div>
                  </div>

                </div>
              ))}
              
              {/* Final Bottom Divider */}
              <div className="w-full h-px bg-border-edge" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
