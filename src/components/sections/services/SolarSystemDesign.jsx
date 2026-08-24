"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Settings } from "lucide-react";

const designStages = [
  {
    id: "requirements",
    number: "01",
    title: "PROJECT REQUIREMENTS",
    description: "Understanding the project's energy requirements and intended solar application."
  },
  {
    id: "configuration",
    number: "02",
    title: "SYSTEM CONFIGURATION",
    description: "Selecting an appropriate solar system configuration based on the project requirements."
  },
  {
    id: "planning",
    number: "03",
    title: "INSTALLATION PLANNING",
    description: "Planning the solar installation around the project's site and system requirements."
  }
];

export default function SolarSystemDesign() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleLinesRef = useRef([]);
  const introRef = useRef(null);
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
      gsap.set(verticalLineRef.current, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(stagesRef.current, { opacity: 0, x: 20 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        // Left Content
        tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 })
          .to(titleLinesRef.current, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4")
          .to(introRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
          
        // Right Content (Vertical Line + Stages)
          .to(verticalLineRef.current, { scaleY: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.4");

        designStages.forEach((_, idx) => {
          if (stagesRef.current[idx]) {
            tl.to(stagesRef.current[idx], { opacity: 1, x: 0, duration: 0.5 }, idx === 0 ? "-=1.0" : "-=0.4");
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current,
            ...titleLinesRef.current,
            introRef.current,
            ...stagesRef.current
          ],
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%"
            }
          }
        );
        gsap.to(verticalLineRef.current, {
          scaleY: 1,
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#FAFCF9] relative overflow-hidden border-t border-[#DCE4E8]/50">
      
      {/* Background Technical Grid (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#0755A5 1px, transparent 1px), linear-gradient(90deg, #0755A5 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Content Header */}
          <div className="flex flex-col max-w-xl">
            <div ref={headerRef} className="text-sm font-heading font-bold text-[#0755A5] uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[#0755A5]" />
              05 / SYSTEM DESIGN
            </div>
            
            <div className="flex flex-col gap-y-2 overflow-hidden mb-8">
              <h2 
                ref={el => titleLinesRef.current[0] = el}
                className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-[#17202A] leading-tight"
              >
                DESIGNING THE RIGHT
              </h2>
              <h2 
                ref={el => titleLinesRef.current[1] = el}
                className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-[#17202A] leading-tight"
              >
                SOLAR SYSTEM
              </h2>
              <h2 
                ref={el => titleLinesRef.current[2] = el}
                className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-[#17202A] leading-tight"
              >
                FOR THE PROJECT
              </h2>
            </div>
            
            <div ref={introRef} className="space-y-6">
              <p className="text-lg md:text-xl text-[#53616F] leading-relaxed border-l-2 border-[#F5C542] pl-6">
                ARKGO Solutions provides solar system design services based on the requirements and conditions of each project.
              </p>
              <p className="text-base text-[#53616F] leading-relaxed pl-6">
                System design forms the foundation for selecting an appropriate solar configuration and planning the installation.
              </p>
            </div>
          </div>

          {/* RIGHT: Methodology Steps */}
          <div className="relative pl-6 md:pl-12 pt-4">
            
            {/* Vertical Engineering Line */}
            <div 
              ref={verticalLineRef}
              className="absolute left-0 top-6 bottom-6 w-px bg-[#DCE4E8]"
            />
            
            <div className="flex flex-col gap-12 lg:gap-16">
              {designStages.map((stage, index) => (
                <div 
                  key={stage.id}
                  ref={el => stagesRef.current[index] = el}
                  className="group relative cursor-default"
                  onMouseEnter={() => setActiveStage(stage.id)}
                  onMouseLeave={() => setActiveStage(null)}
                >
                  {/* Timeline Node / Indicator */}
                  <div className="absolute -left-6 md:-left-12 top-1 w-3 h-3 bg-white border-2 border-[#DCE4E8] rounded-full transition-colors duration-300 transform -translate-x-[5px]"
                    style={{
                      borderColor: activeStage === stage.id ? '#48A942' : '#DCE4E8',
                      backgroundColor: activeStage === stage.id ? '#EFF8EA' : '#FAFCF9'
                    }}
                  />
                  
                  {/* Highlight line overlay on hover */}
                  <div className="absolute -left-[23px] md:-left-[47px] top-4 w-px h-full bg-[#48A942] origin-top transition-transform duration-500 transform scale-y-0 opacity-0"
                    style={{
                      transform: activeStage === stage.id && index !== designStages.length - 1 ? 'scaleY(1)' : 'scaleY(0)',
                      opacity: activeStage === stage.id && index !== designStages.length - 1 ? 1 : 0
                    }}
                  />

                  <div className="flex flex-col transition-transform duration-300"
                    style={{ transform: activeStage === stage.id ? 'translateX(4px)' : 'translateX(0)' }}
                  >
                    <span className="text-sm font-mono font-bold tracking-widest mb-2 transition-colors duration-300"
                      style={{ color: activeStage === stage.id ? '#48A942' : '#0755A5' }}
                    >
                      {stage.number}
                    </span>
                    
                    <h3 className="text-xl lg:text-2xl font-heading font-bold uppercase tracking-wide text-[#17202A] mb-4">
                      {stage.title}
                    </h3>
                    
                    <p className="text-base text-[#53616F] leading-relaxed max-w-md">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Abstract Technical Graphic Element (Bottom Right) */}
            <div className="hidden lg:flex absolute bottom-0 right-0 opacity-20 pointer-events-none items-center gap-2">
              <Settings className="w-8 h-8 text-[#0755A5] animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="w-16 h-px bg-[#0755A5]" />
              <div className="w-2 h-2 rounded-full bg-[#F5C542]" />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
