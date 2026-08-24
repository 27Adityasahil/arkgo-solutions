"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function TrackRecord() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  
  const dominantNumRef = useRef(null);
  const dominantLabelRef = useRef(null);
  
  const suppNum1Ref = useRef(null);
  const suppLabel1Ref = useRef(null);
  const suppNum2Ref = useRef(null);
  const suppLabel2Ref = useRef(null);
  const suppNum3Ref = useRef(null);
  const suppLabel3Ref = useRef(null);
  
  const credBandRef = useRef(null);
  const credItem1Ref = useRef(null);
  const credItem2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial States
      gsap.set(numberRef.current, { opacity: 0 });
      gsap.set([eyebrowRef.current, headingRef.current, copyRef.current], { y: 20, opacity: 0 });
      
      gsap.set(dominantNumRef.current, { y: 40, opacity: 0 });
      gsap.set(dominantLabelRef.current, { opacity: 0 });
      
      gsap.set([suppNum1Ref.current, suppLabel1Ref.current, suppNum2Ref.current, suppLabel2Ref.current, suppNum3Ref.current, suppLabel3Ref.current], { y: 15, opacity: 0 });
      
      gsap.set(credBandRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set([credItem1Ref.current, credItem2Ref.current], { opacity: 0, x: -20 });

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
          .to(copyRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
          .to(dominantNumRef.current, { y: 0, opacity: 1, duration: 1, ease: "back.out(1.2)" }, 0.4)
          .to(dominantLabelRef.current, { opacity: 1, duration: 0.6 }, 0.8)
          .to([suppNum1Ref.current, suppLabel1Ref.current], { y: 0, opacity: 1, duration: 0.6 }, 0.8)
          .to([suppNum2Ref.current, suppLabel2Ref.current], { y: 0, opacity: 1, duration: 0.6 }, 0.9)
          .to([suppNum3Ref.current, suppLabel3Ref.current], { y: 0, opacity: 1, duration: 0.6 }, 1.0)
          .to(credBandRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.inOut" }, 1.0)
          .to([credItem1Ref.current, credItem2Ref.current], { opacity: 1, x: 0, duration: 0.6, stagger: 0.2 }, 1.4);

        // Fast number counting animation
        gsap.fromTo(dominantNumRef.current, 
          { textContent: 0 }, 
          { 
            textContent: 30, 
            duration: 1.2, 
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              if (dominantNumRef.current) dominantNumRef.current.innerHTML = Math.round(this.targets()[0].textContent) + "+";
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%"
            }
          }
        );

        gsap.fromTo(suppNum1Ref.current, 
          { textContent: 0 }, 
          { 
            textContent: 20, 
            duration: 1, 
            ease: "power1.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              if (suppNum1Ref.current) suppNum1Ref.current.innerHTML = Math.round(this.targets()[0].textContent) + "+";
            },
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            numberRef.current,
            eyebrowRef.current,
            headingRef.current,
            copyRef.current,
            dominantNumRef.current,
            dominantLabelRef.current,
            suppNum1Ref.current, suppLabel1Ref.current,
            suppNum2Ref.current, suppLabel2Ref.current,
            suppNum3Ref.current, suppLabel3Ref.current,
            credBandRef.current,
            credItem1Ref.current, credItem2Ref.current
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

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#FAF7F0] overflow-hidden z-0">
      
      {/* Background Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-10 right-10 md:top-20 md:right-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter"
        aria-hidden="true"
      >
        04
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start mb-16 lg:mb-24">
          
          {/* LEFT: Intro Content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div ref={eyebrowRef} className="flex items-center mb-8">
              <span className="w-1 h-5 bg-secondary mr-4 block" />
              <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
                EXPERIENCE IN NUMBERS
              </span>
            </div>
            
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
              PROJECT EXPERIENCE THAT SPEAKS FOR ITSELF.
            </h2>
            
            <p ref={copyRef} className="text-base lg:text-lg text-text-primary font-sans leading-relaxed max-w-lg">
              ARKGO Solutions has worked across residential, commercial and industrial solar requirements, with projects extending across Bihar.
            </p>
          </div>

          {/* RIGHT: Metric Wall (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Dominant Metric */}
            <div className="mb-12 lg:mb-16 border-b border-[#DCE3E8] pb-12 group cursor-default">
              <div 
                ref={dominantNumRef} 
                className="text-8xl md:text-[140px] lg:text-[160px] xl:text-[180px] font-heading font-black text-primary leading-[0.85] tracking-tighter transition-colors duration-500 group-hover:text-secondary mb-4"
              >
                30+
              </div>
              <div ref={dominantLabelRef} className="flex items-center mt-2">
                <span className="w-0 h-6 bg-secondary mr-0 block transition-all duration-300 group-hover:w-[3px] group-hover:mr-4 opacity-0 group-hover:opacity-100" />
                <span className="text-xl md:text-2xl font-heading font-extrabold text-text-secondary uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-primary">
                  PROJECTS
                </span>
              </div>
            </div>

            {/* Supporting Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              
              <div className="group cursor-default border-t border-[#DCE3E8] pt-6 sm:border-t-0 sm:pt-0">
                <div ref={suppNum1Ref} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-none tracking-tighter mb-4 transition-colors duration-300 group-hover:text-secondary">
                  20+
                </div>
                <div ref={suppLabel1Ref} className="flex items-center">
                  <span className="text-xs md:text-sm font-heading font-bold text-text-secondary uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-primary">
                    CLIENTS
                  </span>
                </div>
              </div>

              <div className="group cursor-default border-t border-[#DCE3E8] pt-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <div ref={suppNum2Ref} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-none tracking-tighter mb-4 transition-colors duration-300 group-hover:text-secondary">
                  1+ MW
                </div>
                <div ref={suppLabel2Ref} className="flex items-center">
                  <span className="text-xs md:text-sm font-heading font-bold text-text-secondary uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-primary">
                    SOLAR PROJECTS<br/>EXECUTED
                  </span>
                </div>
              </div>

              <div className="group cursor-default border-t border-[#DCE3E8] pt-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <div ref={suppNum3Ref} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-none tracking-tighter mb-4 transition-colors duration-300 group-hover:text-secondary">
                  100%
                </div>
                <div ref={suppLabel3Ref} className="flex items-center">
                  <span className="text-xs md:text-sm font-heading font-bold text-text-secondary uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-primary">
                    CLIENT<br/>SATISFACTION
                  </span>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* Panoramic Project Photography Strip */}
        <div className="w-full h-[180px] md:h-[250px] lg:h-[300px] relative mb-12 lg:mb-16 bg-primary overflow-hidden">
          <div className="absolute inset-0 w-full h-full scale-[1.05]">
            <Image
              src="/images/ai/arkgo-solar-track-record-stats.webp"
              alt="Massive ground-mounted solar farm"
              fill
              className="object-cover object-center mix-blend-multiply opacity-20"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Corporate Credential Band */}
        <div 
          ref={credBandRef}
          className="w-full bg-primary py-12 px-8 md:px-16 lg:px-20 border-l-[6px] border-secondary flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start md:items-center"
        >
          {/* Subtle grid texture overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] -z-0" />

          {/* Credential 1 */}
          <div ref={credItem1Ref} className="flex flex-col relative z-10 w-full md:w-[45%]">
            <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-secondary tracking-tighter leading-none mb-3">
              TOP 10
            </span>
            <span className="text-sm md:text-base font-heading font-bold text-white uppercase tracking-widest leading-relaxed">
              NBPDCL VENDOR<br/>
              <span className="text-white/60 text-xs tracking-widest mt-1 block">UNDER PM SURYA GHAR YOJANA</span>
            </span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-white/10" />
          <div className="md:hidden w-full h-px bg-white/10" />

          {/* Credential 2 */}
          <div ref={credItem2Ref} className="flex flex-col relative z-10 w-full md:w-[45%] md:pl-12 lg:pl-16">
            <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-secondary tracking-tighter leading-none mb-3">
              3×
            </span>
            <span className="text-sm md:text-base font-heading font-bold text-white uppercase tracking-widest leading-relaxed">
              DISTRICT MAGISTRATE<br/>
              <span className="text-white/60 text-xs tracking-widest mt-1 block">SAMASTIPUR RECOGNITION</span>
            </span>
          </div>
          
        </div>

      </div>
    </section>
  );
}
