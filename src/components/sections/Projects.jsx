"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import clsx from "clsx";

const projectsList = [
  {
    id: "01",
    location: "MASAPUR, BIHAR",
    type: "SOLAR INSTALLATION",
    image: "/images/projects/masapur-installation.jpg"
  },
  {
    id: "02",
    location: "SAKRA, BIHAR",
    type: "SOLAR INSTALLATION",
    image: "/images/projects/sakra-installation-1.jpg"
  },
  {
    id: "03",
    location: "PATNA, BIHAR",
    type: "SOLAR INSTALLATION",
    image: "/images/projects/patna-installation.jpg"
  },
  {
    id: "04",
    location: "FARIDPUR, SAKRA",
    type: "SOLAR INSTALLATION",
    image: "/images/projects/sakra-installation-2.jpg"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const featuredImageContainerRef = useRef(null);
  const featuredImageRef = useRef(null);
  const overlayRef = useRef(null);
  const galleryListRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current], { y: 20, opacity: 0 });
      gsap.set(featuredImageContainerRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(overlayRef.current, { opacity: 0, y: 10 });
      gsap.set(galleryListRef.current?.children, { opacity: 0, x: 20 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          defaults: { ease: "power3.out" }
        });

        tl.to(numberRef.current, { opacity: 0.08, duration: 1.5 }, 0)
          .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.2)
          .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(featuredImageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" }, 0.5)
          .to(overlayRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
          .to(galleryListRef.current?.children, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }, 0.8);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            featuredImageContainerRef.current,
            overlayRef.current,
            galleryListRef.current?.children
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Handle subtle image scale and crossfade on index change
  useEffect(() => {
    if (featuredImageRef.current && overlayRef.current) {
      gsap.fromTo(featuredImageRef.current,
        { scale: 1.03, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" }
      );
      gsap.fromTo(overlayRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [activeIndex]);

  const activeProject = projectsList[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#FAF7F0] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute bottom-10 left-10 md:bottom-20 md:left-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        05
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div ref={eyebrowRef} className="flex items-center mb-6">
            <span className="w-1 h-4 bg-secondary mr-3 inline-block"></span>
            <span className="text-sm font-heading font-bold text-primary uppercase tracking-widest">
              PROJECT EXPERIENCE
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight max-w-2xl">
              FROM SOLAR SYSTEMS TO REAL PROJECTS.
            </h2>
            <p ref={copyRef} className="text-base md:text-lg text-text-muted font-sans leading-relaxed max-w-md lg:mb-2">
              Explore a selection of solar installations executed by ARKGO Solutions across Bihar.
            </p>
          </div>
        </div>

        {/* Editorial Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-stretch h-auto lg:h-[700px] xl:h-[800px]">
          
          {/* Left: 70% Featured Image Area */}
          <div className="lg:col-span-8 relative w-full h-[400px] sm:h-[500px] lg:h-full">
            <div 
              ref={featuredImageContainerRef}
              className="absolute inset-0 w-full h-full bg-primary overflow-hidden"
            >
              <Image
                ref={featuredImageRef}
                src={activeProject.image}
                alt={`Solar installation project in ${activeProject.location}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority
              />
              
              {/* Subtle Gradient for Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              
              {/* Information Overlay */}
              <div ref={overlayRef} className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 flex flex-col">
                <div className="flex items-center mb-2">
                  <span className="w-1.5 h-1.5 bg-secondary mr-3" />
                  <span className="text-sm md:text-base font-heading font-bold text-white uppercase tracking-widest">
                    {activeProject.id}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-2">
                  {activeProject.location}
                </h3>
                <span className="text-xs md:text-sm font-heading font-bold text-white/70 uppercase tracking-[0.15em]">
                  {activeProject.type}
                </span>
              </div>
            </div>
          </div>

          {/* Right: 30% Supporting Projects Area */}
          <div className="lg:col-span-4 flex flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x lg:snap-none hide-scrollbar">
            <div ref={galleryListRef} className="flex lg:flex-col gap-4 w-max lg:w-full h-full">
              {projectsList.map((project, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={project.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={clsx(
                      "group relative flex flex-col lg:flex-row items-stretch text-left w-[260px] lg:w-full h-[300px] lg:h-[24%] snap-center shrink-0 lg:shrink bg-white overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                      isActive ? "shadow-md scale-100" : "shadow-sm scale-[0.98] lg:scale-100 hover:shadow-md opacity-70 hover:opacity-100"
                    )}
                    aria-selected={isActive}
                    role="tab"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-full h-[60%] lg:h-full lg:w-[45%] overflow-hidden bg-primary/10">
                      <Image
                        src={project.image}
                        alt={`Thumbnail of ${project.location}`}
                        fill
                        className={clsx(
                          "object-cover transition-transform duration-700 ease-out",
                          isActive ? "scale-100" : "scale-[1.03] group-hover:scale-100"
                        )}
                        sizes="(max-width: 1024px) 260px, 30vw"
                      />
                    </div>
                    
                    {/* Details Block */}
                    <div className="flex flex-col justify-center p-5 lg:p-4 xl:p-6 w-full lg:w-[55%] relative">
                      {/* Active Indicator Line */}
                      <div className={clsx(
                        "absolute top-0 left-0 w-full h-1 lg:w-1 lg:h-full transition-colors duration-300",
                        isActive ? "bg-secondary" : "bg-transparent group-hover:bg-secondary/40"
                      )} />
                      
                      <span className={clsx(
                        "text-xs font-heading font-bold mb-2 transition-colors duration-300",
                        isActive ? "text-secondary" : "text-text-muted"
                      )}>
                        {project.id}
                      </span>
                      <h4 className="text-sm md:text-base font-heading font-extrabold text-primary uppercase leading-tight mb-1">
                        {project.location}
                      </h4>
                      <span className="text-[10px] font-heading font-semibold text-text-muted uppercase tracking-widest hidden lg:block">
                        {project.type}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
