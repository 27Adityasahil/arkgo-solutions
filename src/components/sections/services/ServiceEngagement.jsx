"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

const stages = [
  {
    id: "01",
    title: "UNDERSTAND",
    description: "Solar consultation and project requirement."
  },
  {
    id: "02",
    title: "ASSESS",
    description: "Site survey and practical site assessment."
  },
  {
    id: "03",
    title: "DESIGN",
    description: "Solar system design around the project requirement."
  },
  {
    id: "04",
    title: "INSTALL",
    description: "Solar panel, inverter and related system installation."
  },
  {
    id: "05",
    title: "SUPPORT",
    description: "Maintenance, repair and service after installation."
  }
];

export default function ServiceEngagement() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  
  const processLineRef = useRef(null);
  const processVerticalLineRef = useRef(null);
  const stageRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current], { y: 20, opacity: 0 });
      
      if (processLineRef.current) gsap.set(processLineRef.current, { scaleX: 0, transformOrigin: "left center" });
      if (processVerticalLineRef.current) gsap.set(processVerticalLineRef.current, { scaleY: 0, transformOrigin: "top center" });
      
      stageRefs.current.forEach((el) => {
        if (!el) return;
        const number = el.querySelector('.stage-number');
        const dot = el.querySelector('.stage-dot');
        const content = el.querySelector('.stage-content');
        
        gsap.set([number, dot], { opacity: 0, y: 10 });
        gsap.set(content, { y: 20, opacity: 0 });
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
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.2)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4);

        // Desktop horizontal line
        if (processLineRef.current) {
          tl.to(processLineRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0.6);
        }
        
        // Mobile vertical line
        if (processVerticalLineRef.current) {
          tl.to(processVerticalLineRef.current, { scaleY: 1, duration: 1.5, ease: "power2.inOut" }, 0.6);
        }

        stageRefs.current.forEach((el, index) => {
          if (!el) return;
          const number = el.querySelector('.stage-number');
          const dot = el.querySelector('.stage-dot');
          const content = el.querySelector('.stage-content');
          
          tl.to([number, dot], { y: 0, opacity: 1, duration: 0.4 }, 0.8 + (index * 0.15))
            .to(content, { y: 0, opacity: 1, duration: 0.5 }, 0.9 + (index * 0.15));
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const nums = stageRefs.current.map(el => el?.querySelector('.stage-number')).filter(Boolean);
        const dots = stageRefs.current.map(el => el?.querySelector('.stage-dot')).filter(Boolean);
        const contents = stageRefs.current.map(el => el?.querySelector('.stage-content')).filter(Boolean);
        
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            processLineRef.current,
            processVerticalLineRef.current,
            ...nums,
            ...dots,
            ...contents
          ],
          {
            opacity: 1,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            duration: 0.6,
            stagger: 0.05,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-[100px] bg-[#E8F1F8] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-10 left-10 lg:top-16 lg:left-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        03
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* TOP: Intro Content */}
        <div className="flex flex-col mb-12 lg:mb-16 max-w-4xl relative z-10">
          <div ref={eyebrowRef} className="flex items-center mb-6 lg:mb-8">
            <span className="w-1 h-5 bg-secondary mr-4 block" />
            <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
              HOW WE WORK
            </span>
          </div>
          
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[46px] xl:text-[54px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-6 lg:mb-8">
            FROM FIRST REQUIREMENT TO SYSTEM SUPPORT.
          </h2>
          
          <p ref={copyRef} className="text-base lg:text-lg text-text-primary font-sans leading-relaxed max-w-3xl lg:max-w-4xl pt-6 border-t border-[#DCE3E8]">
            Every project has its own requirements. ARKGO&apos;s service capabilities cover the key stages involved in understanding, designing, installing and supporting a solar system.
          </p>
        </div>

        {/* BOTTOM: Engineering Process Line */}
        <div className="relative w-full">
          
          {/* Desktop Horizontal Line Structure */}
          <div className="hidden md:block relative w-full mb-8 lg:mb-0">
            {/* The actual drawn line */}
            <div ref={processLineRef} className="absolute top-[37px] left-[10%] right-[10%] h-[1px] bg-[#B9C9D5] -z-10" />
            
            {/* The stages row */}
            <div className="grid grid-cols-5 gap-4 w-full">
              {stages.map((stage, index) => (
                <div 
                  key={stage.id} 
                  ref={el => { if (!stageRefs.current[index]) stageRefs.current[index] = el; }}
                  className="group flex flex-col items-center relative cursor-default"
                >
                  <div className="stage-number text-xl lg:text-[22px] font-heading font-bold text-[#8FA8BF] mb-3 leading-none transition-colors duration-300 group-hover:text-secondary bg-[#E8F1F8] px-3 py-1">
                    {stage.id}
                  </div>
                  
                  <div className="stage-dot w-[6px] h-[6px] rounded-full bg-[#B9C9D5] transition-colors duration-300 group-hover:bg-secondary">
                  </div>
                  
                  <div className="stage-content flex flex-col items-center text-center mt-10">
                    <h3 className="text-[18px] lg:text-[20px] font-heading font-bold text-primary uppercase tracking-widest mb-3 transition-colors duration-300 group-hover:text-secondary">
                      {stage.title}
                    </h3>
                    <p className="text-sm lg:text-[16px] text-text-primary font-sans leading-[1.6] max-w-[200px] transition-colors duration-300 group-hover:text-primary">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Line Structure */}
          <div className="md:hidden relative w-full px-2">
            {/* The vertical drawn line */}
            <div ref={processVerticalLineRef} className="absolute top-[40px] bottom-[100px] left-[25px] w-[1px] bg-[#B9C9D5] -z-10" />
            
            <div className="flex flex-col gap-10">
              {stages.map((stage, index) => (
                <div 
                  key={stage.id} 
                  ref={el => { if (!stageRefs.current[index]) stageRefs.current[index] = el; }}
                  className="group flex flex-col items-start relative cursor-default pl-4"
                >
                  <div className="stage-number text-[20px] font-heading font-bold text-[#8FA8BF] mb-2 leading-none transition-colors duration-300 group-hover:text-secondary bg-[#E8F1F8] py-1">
                    {stage.id}
                  </div>
                  
                  <div className="stage-dot w-[6px] h-[6px] rounded-full bg-[#B9C9D5] ml-[7px] mb-5 transition-colors duration-300 group-hover:bg-secondary"></div>
                  
                  <div className="stage-content flex flex-col mb-2">
                    <h3 className="text-[18px] font-heading font-bold text-primary uppercase tracking-widest mb-3 transition-colors duration-300 group-hover:text-secondary">
                      {stage.title}
                    </h3>
                    <p className="text-[16px] text-text-primary font-sans leading-[1.6] max-w-[280px] transition-colors duration-300 group-hover:text-primary">
                      {stage.description}
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
