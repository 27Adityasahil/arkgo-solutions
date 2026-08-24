"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

const assessmentServices = [
  {
    id: "consultation",
    number: "01",
    title: "SOLAR CONSULTATION",
    description: "Discuss your energy requirements and project objectives with the ARKGO Solutions team to understand the available solar solution options.",
    highlights: ["ENERGY REQUIREMENTS", "PROJECT OBJECTIVES", "SOLUTION OPTIONS"]
  },
  {
    id: "site-survey",
    number: "02",
    title: "SITE SURVEY",
    description: "Site survey services help assess the installation location and relevant site conditions before the solar system is designed.",
    highlights: ["SITE CONDITIONS", "INSTALLATION LOCATION", "PROJECT ASSESSMENT"]
  }
];

export default function ProjectAssessment() {
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
      gsap.set(imageContainerRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
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

        // Image Reveal
        tl.to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" })
          .to(imageRef.current, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.2")
          
        // Text Content Reveal
          .to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.8")
          .to(titleLinesRef.current, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4")
          .to(introRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

        // Services & Dividers
        assessmentServices.forEach((_, idx) => {
          if (dividersRef.current[idx]) {
            tl.to(dividersRef.current[idx], { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, idx === 0 ? "-=0.2" : "-=0.4");
          }
          if (servicesRef.current[idx]) {
            tl.to(servicesRef.current[idx], { opacity: 1, x: 0, duration: 0.5 }, "-=0.4");
          }
        });
        
        // Final bottom divider if it exists
        if (dividersRef.current[assessmentServices.length]) {
           tl.to(dividersRef.current[assessmentServices.length], { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.4");
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current,
            ...titleLinesRef.current,
            introRef.current,
            imageContainerRef.current,
            ...servicesRef.current
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Image */}
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] lg:h-[700px] w-full" ref={imageContainerRef}>
            <div className="absolute inset-0 bg-[#EAF6FF]/30 border border-[#DCE4E8] overflow-hidden">
               <div ref={imageRef} className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="/images/projects/site-survey.jpg"
                  alt="ARKGO Solutions project site assessment and solar installation survey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            {/* Structural visual metaphor lines */}
            <div className="absolute -left-4 top-10 bottom-10 w-px bg-[#0755A5]/10 hidden lg:block" />
            <div className="absolute -bottom-4 left-10 right-10 h-px bg-[#0755A5]/10 hidden lg:block" />
          </div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2 flex flex-col pt-4">
            
            {/* Header section */}
            <div className="mb-12">
              <div ref={headerRef} className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#0755A5]" />
                04 / PROJECT ASSESSMENT
              </div>
              
              <div className="flex flex-col gap-y-2 overflow-hidden mb-6">
                <h2 
                  ref={el => titleLinesRef.current[0] = el}
                  className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-[#17202A] leading-tight"
                >
                  UNDERSTANDING YOUR REQUIREMENT
                </h2>
                <h2 
                  ref={el => titleLinesRef.current[1] = el}
                  className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-[#17202A] leading-tight"
                >
                  BEFORE THE SOLUTION
                </h2>
              </div>
              
              <p ref={introRef} className="text-lg text-[#53616F] leading-relaxed max-w-lg">
                Every solar project begins with understanding the requirement. ARKGO Solutions provides consultation and site survey services to help assess the project before moving toward system design and installation.
              </p>
            </div>

            {/* Service Blocks */}
            <div className="flex flex-col mt-4">
              {assessmentServices.map((service, index) => (
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
                       <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#0755A5]'}`}>
                        {service.number}
                       </span>
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-10 pr-4">
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
                             <Check className={`w-4 h-4 transition-colors duration-300 ${activeService === service.id ? 'text-[#48A942]' : 'text-[#DCE4E8]'}`} />
                             <span className="text-xs font-mono text-[#53616F] uppercase tracking-wider">
                               {highlight}
                             </span>
                           </div>
                         ))}
                       </div>

                       {/* Interactive Arrow (only visible on desktop hover, mostly hidden on mobile or shown statically?) 
                           The prompt says: "Mobile must work without hover. Do not hide information behind interaction."
                           The arrow is a decorative element. */}
                       <div className="flex items-center gap-2">
                         <span className={`text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 ${activeService === service.id ? 'text-[#0755A5]' : 'text-transparent'}`}>
                           LEARN MORE
                         </span>
                         <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activeService === service.id ? 'text-[#48A942] opacity-100 translate-x-1' : 'opacity-0 -translate-x-4'}`} />
                       </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Final Bottom Divider */}
              <div 
                ref={el => dividersRef.current[assessmentServices.length] = el} 
                className="w-full h-px bg-[#DCE4E8]" 
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
