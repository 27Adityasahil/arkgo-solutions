"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

const supportServices = [
  {
    id: "solar-maintenance",
    number: "01",
    title: "SOLAR MAINTENANCE",
    description: "Maintenance services to support the continued operation and condition of solar system installations.",
    highlights: ["SYSTEM CHECK", "MAINTENANCE", "SERVICE SUPPORT"]
  },
  {
    id: "solar-repair",
    number: "02",
    title: "SOLAR REPAIR & SERVICE",
    description: "Repair and service support for solar system requirements when technical issues or service needs arise.",
    highlights: ["REPAIR", "SERVICE", "SYSTEM SUPPORT"]
  }
];

export default function MaintenanceService() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleLinesRef = useRef([]);
  const introRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const servicesRef = useRef([]);
  const dividersRef = useRef([]);
  const bottomBandRef = useRef(null);

  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(headerRef.current, { y: 20, opacity: 0 });
      gsap.set(titleLinesRef.current, { y: 30, opacity: 0 });
      gsap.set(introRef.current, { y: 20, opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(imageRef.current, { scale: 1.03 });
      gsap.set(servicesRef.current, { opacity: 0, x: 20 });
      gsap.set(dividersRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(bottomBandRef.current, { opacity: 0, y: 20 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        // Left Content (Image Reveal)
        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" })
          .to(imageRef.current, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.2")
          
        // Right Content
          .to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.8")
          .to(titleLinesRef.current, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4")
          .to(introRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

        // Services & Dividers
        supportServices.forEach((_, idx) => {
          if (dividersRef.current[idx]) {
            tl.to(dividersRef.current[idx], { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, idx === 0 ? "-=0.2" : "-=0.4");
          }
          if (servicesRef.current[idx]) {
            tl.to(servicesRef.current[idx], { opacity: 1, x: 0, duration: 0.5 }, "-=0.4");
          }
        });
        
        // Final bottom divider
        if (dividersRef.current[supportServices.length]) {
           tl.to(dividersRef.current[supportServices.length], { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.4");
        }

        // Bottom Band (Lifecycle)
        tl.to(bottomBandRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current,
            ...titleLinesRef.current,
            introRef.current,
            imageContainerRef.current,
            ...servicesRef.current,
            bottomBandRef.current
          ],
          {
            y: 0,
            x: 0,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.6,
            stagger: 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%"
            }
          }
        );
        gsap.to(dividersRef.current, {
          scaleX: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%"
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[750px] w-full" ref={imageContainerRef}>
            <div className="absolute inset-0 bg-[#EAF6FF]/30 border border-[#DCE4E8] overflow-hidden">
               <div ref={imageRef} className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/maintenance-service.jpg"
                  alt="ARKGO Solutions completed solar installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            {/* Subtle Corporate Crop Marks */}
            <div className="absolute -left-2 -top-2 w-4 h-4 border-t border-l border-[#0755A5]/20 hidden lg:block" />
            <div className="absolute -right-2 -bottom-2 w-4 h-4 border-b border-r border-[#0755A5]/20 hidden lg:block" />
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            
            {/* Header section */}
            <div className="mb-12">
              <div ref={headerRef} className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#0755A5]" />
                08 / SERVICE & MAINTENANCE
              </div>
              
              <div className="flex flex-col gap-y-2 overflow-hidden mb-8">
                <h2 
                  ref={el => titleLinesRef.current[0] = el}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight"
                >
                  KEEPING YOUR SOLAR SYSTEM
                </h2>
                <h2 
                  ref={el => titleLinesRef.current[1] = el}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight"
                >
                  SUPPORTED BEYOND INSTALLATION
                </h2>
              </div>
              
              <div ref={introRef} className="space-y-6 max-w-xl">
                <p className="text-lg md:text-xl text-[#53616F] leading-relaxed">
                  ARKGO Solutions also provides maintenance, repair and service support for solar systems as part of its broader solar service capabilities.
                </p>
                <p className="text-base text-[#53616F] leading-relaxed border-l-2 border-[#DCE4E8] pl-5">
                  From installation to ongoing service requirements, ARKGO Solutions provides support across the solar system lifecycle.
                </p>
              </div>
            </div>

            {/* Service Blocks */}
            <div className="flex flex-col">
              {supportServices.map((service, index) => (
                <div 
                  key={service.id}
                  ref={el => servicesRef.current[index] = el}
                  className="group relative flex flex-col cursor-pointer"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Top Divider */}
                  <div 
                    ref={el => dividersRef.current[index] = el} 
                    className={`w-full h-px transition-colors duration-300 ${activeService === service.id ? 'bg-[#0755A5]' : 'bg-[#DCE4E8]'}`} 
                  />
                  
                  <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
                    {/* Number */}
                    <div className="md:col-span-2">
                       <span className={`text-3xl font-heading font-light tracking-tighter transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#DCE4E8]'}`}>
                        {service.number}
                       </span>
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-10 pr-4">
                       <div className="flex justify-between items-start mb-4">
                         <h3 className={`text-xl lg:text-2xl font-heading font-bold uppercase tracking-wide transition-colors duration-300 ${activeService === service.id ? 'text-[#0755A5]' : 'text-[#17202A]'}`}>
                           {service.title}
                         </h3>
                         <ArrowRight className={`w-5 h-5 transition-all duration-300 ${activeService === service.id ? 'text-[#48A942] opacity-100 translate-x-1' : 'text-[#DCE4E8] opacity-0'}`} />
                       </div>
                       
                       <p className="text-base text-[#53616F] leading-relaxed mb-6">
                         {service.description}
                       </p>
                       
                       {/* Highlights */}
                       <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                         {service.highlights.map((highlight, idx) => (
                           <div key={idx} className="flex items-center gap-2">
                             <Check className="w-3.5 h-3.5 text-[#0755A5] opacity-60" />
                             <span className="text-xs font-mono text-[#53616F] uppercase tracking-wider">
                               {highlight}
                             </span>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Final Bottom Divider */}
              <div 
                ref={el => dividersRef.current[supportServices.length] = el} 
                className="w-full h-px bg-[#DCE4E8]" 
              />
            </div>

          </div>
        </div>

        {/* Bottom Lifecycle Sequence Band */}
        <div ref={bottomBandRef} className="mt-16 lg:mt-24 py-8 border-t border-b border-[#DCE4E8]/50 bg-[#FAFCF9]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
            <span className="text-sm font-heading font-bold text-[#53616F] uppercase tracking-widest">
              INSTALLATION
            </span>
            <ArrowRight className="w-4 h-4 text-[#0755A5] rotate-90 md:rotate-0" />
            <span className="text-sm font-heading font-bold text-[#53616F] uppercase tracking-widest">
              MAINTENANCE
            </span>
            <ArrowRight className="w-4 h-4 text-[#48A942] rotate-90 md:rotate-0" />
            <span className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest">
              SERVICE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
