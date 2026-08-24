"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import clsx from "clsx";

function FAQItem({ faq, index, isOpen, onClick }) {
  const answerRef = useRef(null);
  const formattedNumber = (index + 1).toString().padStart(2, '0');

  return (
    <div className="border-b border-border-edge">
      <button
        type="button"
        onClick={onClick}
        className="w-full py-8 lg:py-10 flex items-start text-left focus:outline-none group hover:opacity-95"
        aria-expanded={isOpen}
        aria-controls={faq.id}
      >
        <span className={clsx(
          "w-12 sm:w-16 flex-shrink-0 text-sm font-heading font-bold tracking-widest mt-1 transition-colors duration-300",
          isOpen ? "text-secondary" : "text-text-muted group-hover:text-secondary group-focus:text-secondary"
        )}>
          {formattedNumber}
        </span>
        
        <span className={clsx(
          "flex-1 text-lg sm:text-xl lg:text-2xl font-heading font-bold pr-8 transition-colors duration-300",
          isOpen ? "text-secondary" : "text-text-dark group-hover:text-secondary group-focus:text-secondary"
        )}>
          {faq.question}
        </span>
        
        <span className="flex-shrink-0 ml-4 mt-1">
          {isOpen ? (
            <Minus className="w-6 h-6 text-secondary transition-transform duration-300 rotate-0" />
          ) : (
            <Plus className="w-6 h-6 text-text-muted group-hover:text-secondary group-focus:text-secondary transition-transform duration-300 rotate-90" />
          )}
        </span>
      </button>

      <div
        id={faq.id}
        ref={answerRef}
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[400px] opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"
        )}
      >
        <div className="pl-12 sm:pl-16 pr-12">
          <p className="text-base text-text-muted leading-relaxed max-w-2xl">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(headerRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(listRef.current?.children, { y: 20, opacity: 0 });

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
          .to(listRef.current?.children, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.6");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current?.children,
            listRef.current?.children
          ],
          {
            opacity: 1,
            y: 0,
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

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left: Typography (40%) */}
          <div ref={headerRef} className="lg:col-span-5 flex flex-col lg:sticky lg:top-32">
            <div className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-text-dark mb-8 leading-[1.1] max-w-md">
              QUESTIONS BEFORE YOU GO SOLAR?
            </h2>
            <p className="text-lg md:text-xl text-text-muted max-w-md leading-relaxed mb-10 font-sans">
              Here are some of the common questions customers may have before starting their solar project with ARKGO Solutions.
            </p>

            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary hover:text-secondary text-sm tracking-widest uppercase font-bold group/link transition-colors duration-300"
              >
                CONTACT ARKGO 
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Right: Accordion List (60%) */}
          <div className="lg:col-span-7">
            <div ref={listRef} className="flex flex-col border-t border-border-edge">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
