"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processStages = [
  {
    id: "understand",
    number: "01",
    title: "UNDERSTAND",
    description: "Discuss the customer's energy requirements and project objectives.",
    service: "Solar Consultation"
  },
  {
    id: "assess",
    number: "02",
    title: "ASSESS",
    description: "Assess the project site and relevant conditions before moving toward system design.",
    service: "Site Survey"
  },
  {
    id: "design",
    number: "03",
    title: "DESIGN",
    description: "Develop the appropriate solar system configuration based on the project requirements.",
    service: "Solar System Design"
  },
  {
    id: "install",
    number: "04",
    title: "INSTALL",
    description: "Proceed with solar panel and system installation according to the project requirements and configuration.",
    service: "Solar Installation"
  },
  {
    id: "support",
    number: "05",
    title: "SUPPORT",
    description: "Provide maintenance, repair and service support as required after installation.",
    service: "Solar Maintenance"
  }
];

export default function HowArkgoWorks() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleLinesRef = useRef([]);
  const introRef = useRef(null);
  const lineContainerRef = useRef(null);
  const horizontalLineRef = useRef(null);
  const verticalLineRef = useRef(null);
  const stagesRef = useRef([]);

  const [activeStage, setActiveStage] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(headerRef.current, { y: 20, opacity: 0 });
      gsap.set(titleLinesRef.current, { y: 30, opacity: 0 });
      gsap.set(introRef.current, { y: 20, opacity: 0 });
      gsap.set(stagesRef.current, { opacity: 0, y: 20 });
      
      mm.add("(min-width: 1024px)", () => {
        // Desktop Setup
        gsap.set(horizontalLineRef.current, { scaleX: 0, transformOrigin: "left center" });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 })
          .to(titleLinesRef.current, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4")
          .to(introRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
          .to(horizontalLineRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.2")
          .to(stagesRef.current, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=1.0");
      });

      mm.add("(max-width: 1023px)", () => {
        // Mobile/Tablet Setup
        gsap.set(verticalLineRef.current, { scaleY: 0, transformOrigin: "top center" });
        gsap.set(stagesRef.current, { opacity: 0, x: -10, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 })
          .to(titleLinesRef.current, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4")
          .to(introRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
          .to(verticalLineRef.current, { scaleY: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.2")
          .to(stagesRef.current, { opacity: 1, x: 0, duration: 0.6, stagger: 0.2 }, "-=1.2");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current,
            ...titleLinesRef.current,
            introRef.current,
            ...stagesRef.current,
            horizontalLineRef.current,
            verticalLineRef.current
          ],
          {
            y: 0,
            x: 0,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 0.6,
            stagger: 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#FAFCF9] relative overflow-hidden border-t border-[#DCE4E8]/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header section */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24 flex flex-col items-center">
          <div ref={headerRef} className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-[#0755A5]" />
            OUR APPROACH
            <span className="w-8 h-px bg-[#0755A5]" />
          </div>
          
          <div className="flex flex-col gap-y-2 overflow-hidden mb-8">
            <h2 
              ref={el => titleLinesRef.current[0] = el}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight"
            >
              FROM REQUIREMENT TO
            </h2>
            <h2 
              ref={el => titleLinesRef.current[1] = el}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#17202A] leading-tight"
            >
              SOLAR SOLUTION
            </h2>
          </div>
          
          <p ref={introRef} className="text-lg md:text-xl text-[#53616F] leading-relaxed max-w-3xl">
            ARKGO Solutions brings together consultation, site assessment, system design, installation and ongoing service to address different solar energy requirements.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto" ref={lineContainerRef}>
          
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-px bg-[#DCE4E8] z-0">
             <div ref={horizontalLineRef} className="absolute inset-0 h-full bg-[#0755A5]/20" />
          </div>

          {/* Mobile/Tablet Vertical Line */}
          <div className="lg:hidden absolute top-[44px] bottom-0 left-[23px] w-px bg-[#DCE4E8] z-0">
             <div ref={verticalLineRef} className="absolute inset-0 w-full bg-[#0755A5]/20" />
          </div>

          {/* Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-x-8 relative z-10">
            {processStages.map((stage, index) => (
              <div 
                key={stage.id}
                ref={el => stagesRef.current[index] = el}
                className="group relative flex flex-row lg:flex-col items-start cursor-default"
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
              >
                {/* Number Indicator */}
                <div className="flex flex-col items-center flex-shrink-0 lg:w-full">
                  <div className="w-12 h-12 lg:w-24 lg:h-24 bg-[#FAFCF9] border border-[#DCE4E8] rounded-full flex items-center justify-center transition-colors duration-300 relative z-10"
                    style={{
                      borderColor: activeStage === stage.id ? '#48A942' : '#DCE4E8',
                    }}
                  >
                    <span className="text-lg lg:text-3xl font-heading font-light tracking-tighter transition-colors duration-300"
                      style={{ color: activeStage === stage.id ? '#48A942' : '#0755A5' }}
                    >
                      {stage.number}
                    </span>
                  </div>
                  
                  {/* Small connecting tick (Desktop) */}
                  <div className="hidden lg:block w-px h-6 bg-[#DCE4E8]" />
                </div>

                {/* Content */}
                <div className="ml-6 lg:ml-0 lg:mt-6 flex flex-col pt-2 lg:pt-0">
                  <h3 className="text-lg lg:text-xl font-heading font-bold uppercase tracking-wide text-[#17202A] mb-3 transition-colors duration-300"
                    style={{ color: activeStage === stage.id ? '#0755A5' : '#17202A' }}
                  >
                    {stage.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-[#53616F] leading-relaxed mb-4 lg:mb-6 flex-grow">
                    {stage.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block text-[10px] lg:text-xs font-mono text-[#0755A5] uppercase tracking-widest px-2 py-1 bg-[#EAF6FF] rounded-sm transition-colors duration-300"
                      style={{
                        backgroundColor: activeStage === stage.id ? '#EFF8EA' : '#EAF6FF',
                        color: activeStage === stage.id ? '#48A942' : '#0755A5'
                      }}
                    >
                      {stage.service}
                    </span>
                  </div>
                </div>

                {/* Hover line highlight (Desktop) */}
                <div className="hidden lg:block absolute top-[44px] left-1/2 w-full h-[2px] bg-[#48A942] origin-left transition-transform duration-500 transform scale-x-0 opacity-0 -translate-y-1/2 z-0"
                    style={{
                      transform: activeStage === stage.id && index !== processStages.length - 1 ? 'scaleX(1)' : 'scaleX(0)',
                      opacity: activeStage === stage.id && index !== processStages.length - 1 ? 1 : 0
                    }}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
