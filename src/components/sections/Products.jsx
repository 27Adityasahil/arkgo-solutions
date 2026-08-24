"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/products";
import ProductListItem from "@/components/cards/ProductListItem";

export default function Products() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(headerRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(listRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(imageContainerRef.current, { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 });

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
          .to(imageContainerRef.current, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.2, ease: "power2.inOut" }, "-=0.4")
          .to(listRef.current?.children, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.8");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(
          [
            headerRef.current?.children,
            imageContainerRef.current,
            listRef.current?.children
          ],
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

  // Handle subtle image scale and crossfade on index change
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, 
        { scale: 1.05, opacity: 0.6 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  const activeProduct = products[activeIndex];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-base border-t border-border-edge">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-12 lg:mb-20">
          <div className="text-sm font-heading font-bold text-primary uppercase tracking-widest mb-6">
            OUR PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-text-dark mb-8 leading-tight max-w-4xl">
            COMPONENTS FOR COMPLETE SOLAR SOLUTIONS
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed font-sans">
            From solar generation and energy storage to installation essentials, ARKGO Solutions provides the components required for dependable solar systems.
          </p>
        </div>

        {/* Editorial Split Catalogue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: 60% Service Directory */}
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
            <div ref={listRef} className="flex flex-col border-t border-border-edge w-full">
              {products.map((product, index) => (
                <ProductListItem 
                  key={product.id} 
                  product={product} 
                  isActive={activeIndex === index}
                  onInteract={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right: 40% Large Visual Area */}
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[700px] xl:h-[750px] order-1 lg:order-2 lg:sticky lg:top-32">
            <div 
              ref={imageContainerRef} 
              className="absolute inset-0 w-full h-full bg-white border border-border-edge overflow-hidden shadow-sm"
            >
              <div 
                ref={imageRef} 
                className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 text-center transition-colors duration-700 ${activeProduct.bgClass || "bg-tint-blue"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent mix-blend-multiply z-10" />
                
                {/* Image Placeholder text */}
                <div className="z-20 flex flex-col items-center mt-auto pb-6">
                  <span className="block mb-2 font-heading font-bold text-white uppercase tracking-widest text-sm md:text-base">
                    [ {activeProduct.title.toUpperCase()} ]
                  </span>
                  <span className="text-sm text-white/80 max-w-[250px] leading-relaxed">
                    Corporate product photography placement
                  </span>
                </div>
              </div>
            </div>
            
            {/* Subtle structural accent */}
            <div className="absolute top-8 -right-4 w-1 h-32 bg-secondary hidden lg:block z-20" />
            
            {/* Technical block accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 hidden lg:block -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
