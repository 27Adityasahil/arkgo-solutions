"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const systems = [
  {
    id: "01",
    title: "ON-GRID SOLAR",
    shortTitle: "ON-GRID",
    description: "A grid-connected solar system designed for projects where the solar installation operates in connection with the electricity grid.",
    diagram: "on-grid"
  },
  {
    id: "02",
    title: "OFF-GRID SOLAR",
    shortTitle: "OFF-GRID",
    description: "A solar system designed for applications where energy storage is part of the system configuration and grid dependence needs to be addressed.",
    diagram: "off-grid"
  },
  {
    id: "03",
    title: "HYBRID SOLAR",
    shortTitle: "HYBRID",
    description: "A solar system configuration that combines solar generation with energy storage and grid connectivity, depending on project requirements.",
    diagram: "hybrid"
  }
];

export default function Systems() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const selectorRef = useRef(null);
  const diagramRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSystem = systems[activeIndex];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(headerRef.current?.children, { y: 20, opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0, x: -20 });
      gsap.set(diagramRef.current, { opacity: 0, x: 20 });
      gsap.set(selectorRef.current?.children, { opacity: 0, y: 10 });
      gsap.set(numberRef.current, { opacity: 0 });

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
          .to(headerRef.current?.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 0.2)
          .to(contentRef.current, { opacity: 1, x: 0, duration: 0.8 }, 0.6)
          .to(diagramRef.current, { opacity: 1, x: 0, duration: 0.8 }, 0.8)
          .to(selectorRef.current?.children, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 1.0);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            headerRef.current?.children,
            contentRef.current,
            diagramRef.current,
            selectorRef.current?.children
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Handle active index transitions
  useEffect(() => {
    if (contentRef.current && diagramRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
      
      const diagramLines = diagramRef.current.querySelectorAll('.diagram-line');
      const diagramNodes = diagramRef.current.querySelectorAll('.diagram-node');
      
      tl.fromTo(
        diagramRef.current,
        { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
        { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.6 },
        "-=0.3"
      );
      
      if (diagramLines.length) {
        gsap.fromTo(diagramLines, 
          { strokeDasharray: 200, strokeDashoffset: 200 },
          { strokeDashoffset: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
        );
      }
      
      if (diagramNodes.length) {
        gsap.fromTo(diagramNodes,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.2)", delay: 0.2 }
        );
      }
    }
  }, [activeIndex]);

  const renderDiagram = (type) => {
    return (
      <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4">
        {type === "on-grid" && (
          <svg viewBox="0 0 500 300" className="w-full max-w-[500px] h-auto overflow-visible font-heading" fill="none">
            {/* Grid Definition */}
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#E8F1F8" />
              </marker>
              <marker id="arrowhead-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#D94A32" />
              </marker>
              <marker id="arrowhead-bidir" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#D94A32" />
              </marker>
            </defs>
            
            {/* Lines */}
            <path d="M 250 40 L 250 110" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            <path d="M 250 160 L 250 230" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            <path d="M 320 135 L 420 135" stroke="#D94A32" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="diagram-line" />
            <path d="M 420 145 L 320 145" stroke="#D94A32" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="diagram-line" />
            
            {/* Nodes */}
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="180" y="0" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="250" y="25" textAnchor="middle" fill="#E8F1F8">SOLAR</text>
            </g>
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="180" y="115" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="250" y="140" textAnchor="middle" fill="#E8F1F8">INVERTER</text>
            </g>
            <g className="diagram-node text-white font-bold text-[10px] tracking-widest uppercase">
              <rect x="180" y="235" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="250" y="258" textAnchor="middle" fill="#E8F1F8">HOME / BUSINESS</text>
            </g>
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="420" y="120" width="80" height="40" fill="transparent" stroke="#D94A32" strokeWidth="1" />
              <text x="460" y="145" textAnchor="middle" fill="#D94A32">GRID</text>
            </g>
          </svg>
        )}
        
        {type === "off-grid" && (
          <svg viewBox="0 0 500 400" className="w-full max-w-[500px] h-auto overflow-visible font-heading" fill="none">
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#E8F1F8" />
              </marker>
              <marker id="arrowhead-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#D94A32" />
              </marker>
            </defs>
            <path d="M 250 40 L 250 90" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            <path d="M 250 140 L 250 190" stroke="#D94A32" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="diagram-line" />
            <path d="M 250 240 L 250 290" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="180" y="0" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="250" y="25" textAnchor="middle" fill="#E8F1F8">SOLAR</text>
            </g>
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="180" y="95" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="250" y="120" textAnchor="middle" fill="#E8F1F8">INVERTER</text>
            </g>
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="180" y="195" width="140" height="40" fill="transparent" stroke="#D94A32" strokeWidth="1" />
              <text x="250" y="220" textAnchor="middle" fill="#D94A32">BATTERY</text>
            </g>
            <g className="diagram-node text-white font-bold text-[10px] tracking-widest uppercase">
              <rect x="180" y="295" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="250" y="318" textAnchor="middle" fill="#E8F1F8">HOME / BUSINESS</text>
            </g>
          </svg>
        )}
        
        {type === "hybrid" && (
          <svg viewBox="0 0 600 350" className="w-full max-w-[600px] h-auto overflow-visible font-heading" fill="none">
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#E8F1F8" />
              </marker>
              <marker id="arrowhead-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#D94A32" />
              </marker>
            </defs>
            
            <path d="M 300 40 L 300 90" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            
            {/* To Grid (Left) */}
            <path d="M 230 115 L 140 115" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            <path d="M 140 125 L 230 125" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            
            {/* To Battery (Right) */}
            <path d="M 370 120 L 440 120" stroke="#D94A32" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="diagram-line" />
            <path d="M 440 130 L 370 130" stroke="#D94A32" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="diagram-line" />
            
            {/* To Home */}
            <path d="M 300 140 L 300 230" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            <path d="M 100 140 L 100 250 L 230 250" stroke="#E8F1F8" strokeWidth="2" markerEnd="url(#arrowhead)" className="diagram-line" />
            <path d="M 490 145 L 490 250 L 370 250" stroke="#D94A32" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="diagram-line" />

            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="230" y="0" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="300" y="25" textAnchor="middle" fill="#E8F1F8">SOLAR</text>
            </g>
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="230" y="95" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="300" y="120" textAnchor="middle" fill="#E8F1F8">INVERTER</text>
            </g>
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="40" y="100" width="100" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="90" y="125" textAnchor="middle" fill="#E8F1F8">GRID</text>
            </g>
            <g className="diagram-node text-white font-bold text-sm tracking-widest uppercase">
              <rect x="440" y="105" width="100" height="40" fill="transparent" stroke="#D94A32" strokeWidth="1" />
              <text x="490" y="130" textAnchor="middle" fill="#D94A32">BATTERY</text>
            </g>
            <g className="diagram-node text-white font-bold text-[10px] tracking-widest uppercase">
              <rect x="230" y="235" width="140" height="40" fill="transparent" stroke="#E8F1F8" strokeWidth="1" />
              <text x="300" y="258" textAnchor="middle" fill="#E8F1F8">HOME / BUSINESS</text>
            </g>
          </svg>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#073B73] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute bottom-20 right-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-white leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        08
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] flex flex-col h-full min-h-[800px]">
        
        {/* Top: Section Header */}
        <div ref={headerRef} className="mb-12 lg:mb-20">
          <div className="flex items-center mb-6">
            <span className="w-1 h-4 bg-secondary mr-3 inline-block"></span>
            <span className="text-sm font-heading font-bold text-white uppercase tracking-widest">
              SOLAR SYSTEMS
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-heading font-extrabold text-white leading-[1.05] tracking-tight max-w-2xl">
              THREE WAYS TO BUILD YOUR SOLAR SYSTEM.
            </h2>
            <p className="text-base md:text-lg text-[#B8C8D5] font-sans leading-relaxed max-w-md lg:mb-2">
              ARKGO Solutions works with different solar system configurations depending on the requirements and application of the project.
            </p>
          </div>
        </div>

        {/* Middle: Content & Diagram Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-grow mb-16 lg:mb-24">
          
          {/* Left: Content */}
          <div ref={contentRef} className="lg:col-span-5 flex flex-col pt-8 lg:pt-0 border-t lg:border-t-0 border-[#B8C8D5]/20 order-2 lg:order-1">
            <div className="text-6xl md:text-7xl lg:text-[100px] font-heading font-black text-secondary leading-none tracking-tighter mb-6 transition-all duration-300">
              {activeSystem.id}
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold text-white uppercase leading-tight mb-6">
              {activeSystem.title}
            </h3>
            <p className="text-lg lg:text-xl text-[#B8C8D5] font-sans leading-relaxed mb-10 max-w-md">
              {activeSystem.description}
            </p>
            <div>
              <Link 
                href="/services" 
                className="inline-flex items-center text-xs md:text-sm font-heading font-bold text-secondary uppercase tracking-[0.2em] group/link hover:text-white transition-colors duration-300"
              >
                EXPLORE SOLAR SERVICES
                <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Right: Diagram */}
          <div ref={diagramRef} className="lg:col-span-7 flex justify-center items-center w-full min-h-[300px] order-1 lg:order-2 border border-[#B8C8D5]/10 bg-[#073B73]/50 backdrop-blur-sm p-4 md:p-8">
            {renderDiagram(activeSystem.diagram)}
          </div>
          
        </div>

        {/* Bottom: Horizontal Selector */}
        <div ref={selectorRef} className="flex flex-col md:flex-row border-t border-[#B8C8D5]/20 mt-auto">
          {systems.map((sys, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveIndex(index)}
                className={clsx(
                  "group relative flex items-center w-full md:w-1/3 py-6 px-4 lg:px-8 border-b md:border-b-0 md:border-r border-[#B8C8D5]/20 last:border-0 transition-all duration-300 focus:outline-none",
                  isActive ? "bg-white/5" : "hover:bg-white-[0.02]"
                )}
                aria-selected={isActive}
                role="tab"
              >
                {/* Active Indicator Line */}
                <div 
                  className={clsx(
                    "absolute left-0 bottom-0 md:top-0 md:bottom-auto w-full md:w-full h-1 md:h-1 bg-secondary transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )} 
                />
                
                <span className={clsx(
                  "text-xs md:text-sm font-heading font-black mr-4 transition-colors duration-300",
                  isActive ? "text-secondary" : "text-[#B8C8D5]"
                )}>
                  {sys.id}
                </span>
                <span className={clsx(
                  "text-sm md:text-base font-heading font-bold uppercase tracking-widest transition-colors duration-300",
                  isActive ? "text-white" : "text-[#B8C8D5] group-hover:text-white"
                )}>
                  {sys.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
