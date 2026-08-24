"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { recognitions } from "@/data/recognitions";
import { FileText } from "lucide-react";

export default function Recognition() {
  const [activeId, setActiveId] = useState(recognitions[0].id);
  const activeRec = recognitions.find(r => r.id === activeId);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const docContainerRef = useRef(null);
  const listContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(headerRef.current, { y: 20, opacity: 0 });
      gsap.set(titleRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 20, opacity: 0 });
      gsap.set(docContainerRef.current, { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 });
      
      const listItems = listContainerRef.current?.children ? Array.from(listContainerRef.current.children) : [];
      listItems.forEach(item => {
        gsap.set(item, { y: 20, opacity: 0 });
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

        tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.6 })
          .to(titleRef.current?.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4")
          .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
          .to(docContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.2, ease: "power2.inOut" }, "-=0.2")
          .to(listItems, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.8");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current,
            titleRef.current?.children,
            subtitleRef.current,
            docContainerRef.current,
            ...listItems
          ].filter(Boolean),
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-tint-warm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-4xl">
          <div ref={headerRef} className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
            RECOGNITION & ACHIEVEMENTS
          </div>
          <div ref={titleRef} className="flex flex-col gap-y-2 overflow-hidden mb-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-bold text-text-dark leading-[1.15]">
              RECOGNITION THAT
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-bold text-text-dark leading-[1.15]">
              REFLECTS OUR WORK
            </h2>
          </div>
          <p ref={subtitleRef} className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl">
            ARKGO Solutions&apos; project execution and contribution have received recognition from institutional and district-level stakeholders.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Document Viewer */}
          <div className="lg:col-span-6 relative w-full aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] bg-white border border-border-edge shadow-sm p-8 flex flex-col items-center justify-center text-center" ref={docContainerRef}>
            {/* Neutral placeholder for certificate */}
            <div className="w-16 h-16 rounded-full bg-tint-blue flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-heading font-bold text-text-muted uppercase tracking-widest mb-2">
              DOCUMENT PLACEHOLDER
            </p>
            <h4 className="text-xl font-heading font-bold text-text-dark mb-4 px-4">
              {activeRec.title}
            </h4>
            <p className="text-sm text-text-muted max-w-xs mx-auto">
              Actual certificates and recognition documents will be displayed here when available.
            </p>
          </div>

          {/* Right: Recognition Index */}
          <div className="lg:col-span-6 flex flex-col" ref={listContainerRef}>
            {recognitions.map((rec) => {
              const isActive = activeId === rec.id;
              
              return (
                <button 
                  key={rec.id}
                  onClick={() => setActiveId(rec.id)}
                  className={`flex flex-col md:flex-row items-start md:items-center text-left py-8 border-b border-border-edge group transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div className="w-full md:w-24 mb-4 md:mb-0">
                    <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-text-muted group-hover:text-primary'}`}>
                      {rec.number}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-primary'}`}>
                        {rec.label}
                      </span>
                    </div>
                    <h3 className={`text-lg md:text-xl font-heading font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-text-dark' : 'text-text-muted group-hover:text-text-dark'}`}>
                      {rec.title}
                    </h3>
                    <p className={`text-base leading-relaxed transition-colors duration-300 ${isActive ? 'text-text-muted' : 'text-text-muted'}`}>
                      {rec.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
