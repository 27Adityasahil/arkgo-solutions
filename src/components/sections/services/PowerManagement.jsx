"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

const powerServices = [
  {
    id: "inverter-installation",
    number: "01",
    title: "INVERTER INSTALLATION",
    description: "Inverter installation as part of the solar system setup, according to the requirements and configuration of the project.",
    highlights: ["INVERTER INSTALLATION", "SYSTEM INTEGRATION", "PROJECT REQUIREMENTS"]
  },
  {
    id: "battery-solutions",
    number: "02",
    title: "BATTERY SOLUTIONS",
    description: "Battery solutions for solar energy systems where energy storage is required as part of the project.",
    highlights: ["ENERGY STORAGE", "SYSTEM REQUIREMENTS", "PROJECT CONFIGURATION"]
  }
];

export default function PowerManagement() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleLinesRef = useRef([]);
  const introRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const servicesRef = useRef([]);
  const dividersRef = useRef([]);

  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(headerRef.current, { y: 20, opacity: 0 });
      gsap.set(titleLinesRef.current, { y: 30, opacity: 0 });
      gsap.set(introRef.current, { y: 20, opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" }); // Reveal from left
      gsap.set(imageRef.current, { scale: 1.05 });
      gsap.set(servicesRef.current, { opacity: 0, x: 20 });
      gsap.set(dividersRef.current, { scaleX: 0, transformOrigin: "left center" });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        // Content
        tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 })
          .to(titleLinesRef.current, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4")
          .to(introRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

        // Visual Reveal
        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" }, "-=0.8")
          .to(imageRef.current, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.2");

        // Services & Dividers
        powerServices.forEach((_, idx) => {
          if (dividersRef.current[idx]) {
            tl.to(dividersRef.current[idx], { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, idx === 0 ? "-=0.8" : "-=0.4");
          }
          if (servicesRef.current[idx]) {
            tl.to(servicesRef.current[idx], { opacity: 1, x: 0, duration: 0.5 }, "-=0.4");
          }
        });
        
        // Final bottom divider if it exists
        if (dividersRef.current[powerServices.length]) {
           tl.to(dividersRef.current[powerServices.length], { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.4");
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current,
            ...titleLinesRef.current,
            introRef.current,
            imageContainerRef.current,
            ...servicesRef.current,
          ],
          {
            y: 0,
            x: 0,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#FAFCF9] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Technical Visual / Image */}
          <div className="lg:col-span-5 relative h-[450px] lg:h-[650px] w-full" ref={imageContainerRef}>
            <div className="absolute inset-0 bg-[#EAF6FF]/30 border border-[#DCE4E8] overflow-hidden">
               <div ref={imageRef} className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/power-management.jpg"
                  alt="Solar system inverter and battery components by ARKGO Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Conceptual Diagram Overlay (Fallback/Support) */}
              <div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-end bg-gradient-to-t from-[#FAFCF9]/90 via-[#FAFCF9]/20 to-transparent">
                 <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#48A942]" />
                     <div className="h-px flex-grow bg-[#DCE4E8]" />
                     <span className="text-xs font-mono font-bold text-[#0755A5] uppercase tracking-widest">SYSTEM INTEGRATION</span>
                   </div>
                   
                   {/* Conceptual Flow */}
                   <div className="flex items-center justify-between text-[10px] font-mono text-[#53616F] tracking-widest uppercase">
                     <span>SOLAR PANELS</span>
                     <ArrowRight className="w-3 h-3 text-[#F5C542]" />
                     <span>INVERTER</span>
                     <ArrowRight className="w-3 h-3 text-[#48A942]" />
                     <span>ENERGY USE</span>
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Structural corner lines */}
            <div className="absolute -left-4 -top-4 w-8 h-8 border-t border-l border-[#DCE4E8] hidden lg:block" />
            <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b border-r border-[#DCE4E8] hidden lg:block" />
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            
            {/* Header section */}
            <div className="mb-12">
              <div ref={headerRef} className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#0755A5]" />
                07 / POWER MANAGEMENT
              </div>
              
              <div className="flex flex-col gap-y-2 overflow-hidden mb-6">
                <h2 
                  ref={el => titleLinesRef.current[0] = el}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight"
                >
                  SUPPORTING THE SOLAR SYSTEM
                </h2>
                <h2 
                  ref={el => titleLinesRef.current[1] = el}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight"
                >
                  BEYOND THE PANELS
                </h2>
              </div>
              
              <p ref={introRef} className="text-lg text-[#53616F] leading-relaxed max-w-lg border-l-2 border-[#48A942] pl-5">
                A solar installation depends on more than panels alone. ARKGO Solutions also provides inverter installation and battery solutions as part of applicable solar system requirements.
              </p>
            </div>

            {/* Service Blocks */}
            <div className="flex flex-col mt-4">
              {powerServices.map((service, index) => (
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
                  
                  <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Number */}
                    <div className="md:col-span-2">
                       <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#DCE4E8]'}`}>
                        {service.number}
                       </span>
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-10 pr-4 lg:pr-12">
                       <h3 className={`text-xl font-heading font-bold uppercase tracking-wide mb-4 transition-colors duration-300 ${activeService === service.id ? 'text-[#0755A5]' : 'text-[#17202A]'}`}>
                         {service.title}
                       </h3>
                       
                       <p className="text-base text-[#53616F] leading-relaxed mb-6">
                         {service.description}
                       </p>
                       
                       {/* Highlights */}
                       <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-6">
                         {service.highlights.map((highlight, idx) => (
                           <div key={idx} className="flex items-center gap-2">
                             <Check className={`w-3.5 h-3.5 transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#DCE4E8]'}`} />
                             <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${activeService === service.id ? 'text-[#17202A]' : 'text-[#53616F]'}`}>
                               {highlight}
                             </span>
                           </div>
                         ))}
                       </div>

                       {/* Interactive Arrow */}
                       <div className="flex items-center gap-2">
                         <span className={`text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 ${activeService === service.id ? 'text-[#0755A5]' : 'text-transparent'}`}>
                           EXPLORE
                         </span>
                         <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activeService === service.id ? 'text-[#48A942] opacity-100 translate-x-1' : 'opacity-0 -translate-x-4'}`} />
                       </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Final Bottom Divider */}
              <div 
                ref={el => dividersRef.current[powerServices.length] = el} 
                className="w-full h-px bg-[#DCE4E8]" 
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
