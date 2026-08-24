"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { recognitions } from "@/data/recognition";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function Recognition() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mainDocRef = useRef(null);
  const secondaryDocsRef = useRef(null);
  const rulesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(headerRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(mainDocRef.current, { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 });
      gsap.set(secondaryDocsRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(rulesRef.current, { scaleX: 0, transformOrigin: "left center" });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(headerRef.current?.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 })
          .to(mainDocRef.current, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.2, ease: "power2.inOut" }, "-=0.4")
          .to(rulesRef.current, { scaleX: 1, duration: 0.8, ease: "power2.inOut", stagger: 0.2 }, "-=0.6")
          .to(secondaryDocsRef.current?.children, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, "-=0.4");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current?.children,
            mainDocRef.current,
            rulesRef.current,
            secondaryDocsRef.current?.children
          ],
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            scaleX: 1,
            duration: 0.6,
            stagger: 0.1,
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

  const setRuleRef = (el) => {
    if (el && !rulesRef.current.includes(el)) {
      rulesRef.current.push(el);
    }
  };

  const mainRecognition = recognitions[0];
  const secondaryRecognitions = recognitions.slice(1);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-base border-t border-border-edge">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Editorial Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-stretch mb-20 lg:mb-24">
          
          {/* Left: Content Area (45%) */}
          <div ref={headerRef} className="lg:col-span-5 flex flex-col justify-center py-4 lg:py-8 lg:pr-8">
            <div className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
              RECOGNITION & CREDENTIALS
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-heading font-bold text-text-dark mb-8 leading-[1.1]">
              RECOGNIZED FOR OUR COMMITMENT TO SOLAR ENERGY
            </h2>
            
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-lg font-sans">
              ARKGO Solutions&apos; work has received recognition from government and institutional stakeholders, reflecting its commitment to quality service and solar project execution.
            </p>
          </div>

          {/* Right / Main: Featured Document Area (55%) */}
          <div className="lg:col-span-7 relative flex flex-col w-full h-full min-h-[450px] lg:min-h-[500px]">
            <article 
              ref={mainDocRef}
              className="relative w-full h-full flex flex-col bg-white border border-border-edge p-6 lg:p-10 transition-colors duration-300 hover:border-secondary/50 group cursor-pointer"
            >
              <div className="flex-grow flex items-center justify-center bg-base border border-border-edge shadow-sm relative overflow-hidden min-h-[300px] mb-8 transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-md">
                
                {mainRecognition.image ? (
                  <Image 
                    src={mainRecognition.image} 
                    alt={mainRecognition.alt} 
                    fill 
                    className="object-contain p-4" 
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                ) : (
                  <div className="text-center p-6 opacity-60">
                    <span className="block mb-2 font-heading font-bold text-text-muted uppercase tracking-widest text-sm md:text-base">
                      [ OFFICIAL DOCUMENT PLACEHOLDER ]
                    </span>
                    <span className="text-xs text-text-muted">
                      High-resolution certificate visual
                    </span>
                  </div>
                )}

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-base px-6 py-3 border border-secondary/20 text-secondary font-heading font-bold text-xs uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    VIEW DOCUMENT &rarr;
                  </div>
                </div>

              </div>
              
              <div className="mt-auto">
                <div className="text-xs font-heading font-bold text-text-muted uppercase tracking-widest mb-2">
                  {mainRecognition.label}
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-text-dark mb-3 group-hover:text-secondary transition-colors duration-300">
                  {mainRecognition.title}
                </h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed">
                  {mainRecognition.description}
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Structural Divider */}
        <div ref={setRuleRef} className="w-full h-px bg-border-edge mb-12 lg:mb-16" />

        {/* Secondary Credentials */}
        <div ref={secondaryDocsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {secondaryRecognitions.map((rec) => (
            <article 
              key={rec.id} 
              className="flex flex-col sm:flex-row items-stretch bg-white border border-border-edge transition-colors duration-300 hover:border-secondary/40 group cursor-pointer"
            >
              {/* Thumbnail Area */}
              <div className="w-full sm:w-1/3 min-h-[160px] sm:min-h-[220px] bg-base border-b sm:border-b-0 sm:border-r border-border-edge flex items-center justify-center relative overflow-hidden shrink-0">
                
                {rec.image ? (
                  <Image 
                    src={rec.image} 
                    alt={rec.alt} 
                    fill 
                    className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.03]" 
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : (
                  <div className="text-center p-4 opacity-50 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <span className="block font-heading font-bold text-text-muted uppercase tracking-widest text-[10px] md:text-xs">
                      [ DOC PLACEHOLDER ]
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-secondary text-white w-8 h-8 rounded-[4px] flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Text Content Area */}
              <div className="p-6 lg:p-8 flex flex-col justify-center w-full">
                <div className="text-[10px] md:text-xs font-heading font-bold text-text-muted uppercase tracking-widest mb-2">
                  {rec.label}
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-text-dark mb-3 group-hover:text-secondary transition-colors duration-300">
                  {rec.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                  {rec.description}
                </p>
                <div className="mt-auto text-primary group-hover:text-secondary font-heading font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                  VIEW DETAILS &rarr;
                </div>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
