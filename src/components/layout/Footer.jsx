"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);
  const ctaRef = useRef(null);
  const colsRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
      gsap.set(colsRef.current?.children, { opacity: 0, y: 20 });
      gsap.set(bottomRef.current, { opacity: 0 });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });

        if (ctaRef.current) {
          tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        }
        
        tl.to(colsRef.current?.children, { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out" 
        }, ctaRef.current ? "-=0.2" : 0)
        .to(bottomRef.current, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const targets = [ctaRef.current, colsRef.current?.children, bottomRef.current].filter(Boolean);
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar solutions with ARKGO.");
  const whatsappUrl = `https://wa.me/91${siteConfig.contact.whatsapp}?text=${whatsappMessage}`;
  
  // Google Maps fallback search link using the address
  const addressQuery = encodeURIComponent(`${siteConfig.contact.address.line1} ${siteConfig.contact.address.line2}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <footer ref={footerRef} className="bg-primary text-white/80 border-t border-primary/20 pt-16 lg:pt-24 pb-8 relative overflow-hidden">
      
      {/* Optional Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Subtle CTA */}
        <div ref={ctaRef} className="mb-16 lg:mb-20 pb-12 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-wide">
            READY TO EXPLORE SOLAR?
          </h3>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white hover:border-secondary hover:bg-secondary/10 transition-all duration-300 rounded-[4px] font-heading font-bold uppercase tracking-widest text-xs px-6 py-3 group"
          >
            GET A QUOTE 
            <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-secondary" />
          </Link>
        </div>

        {/* Main Footer Navigation Grid */}
        <div ref={colsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20">
          
          {/* Brand Block (3 cols) */}
          <div className="lg:col-span-3 lg:pr-8">
            <Link href="/" className="inline-block mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm">
              <Image 
                src="/logo.png" 
                alt="ARKGO Solutions" 
                width={180} 
                height={60} 
                className="w-auto h-10 lg:h-12 brightness-0 invert" 
              />
            </Link>
            <div className="text-sm font-heading font-bold text-white uppercase tracking-widest mb-4">
              &quot;Forget About Electricity Bills — Go Solar with Arkgo&quot;
            </div>
            <p className="text-sm text-text-on-dark leading-relaxed">
              Reliable solar solutions for residential, commercial and industrial requirements across Bihar.
            </p>
          </div>

          {/* Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-3 inline-block">
              COMPANY
            </h4>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">About</Link></li>
              <li><Link href="/projects" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Projects</Link></li>
              <li><Link href="/recognition" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Recognition</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-3 inline-block">
              SOLUTIONS
            </h4>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><Link href="/solutions/residential" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Residential Solar</Link></li>
              <li><Link href="/solutions/commercial" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Commercial Solar</Link></li>
              <li><Link href="/solutions/industrial" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Industrial Solar</Link></li>
              <li><Link href="/solutions/on-grid" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">On-Grid Solar</Link></li>
              <li><Link href="/solutions/off-grid" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Off-Grid Solar</Link></li>
              <li><Link href="/solutions/hybrid" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Hybrid Solar</Link></li>
            </ul>
          </div>

          {/* Products (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-3 inline-block">
              PRODUCTS
            </h4>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><Link href="/products/panels" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Solar Panels</Link></li>
              <li><Link href="/products/inverters" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Inverters</Link></li>
              <li><Link href="/products/batteries" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Batteries</Link></li>
              <li><Link href="/products/structures" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Solar Structures</Link></li>
              <li><Link href="/products/cables" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Cables</Link></li>
              <li><Link href="/products/materials" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Installation Materials</Link></li>
              <li><Link href="/products/accessories" className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-secondary">Solar Accessories</Link></li>
            </ul>
          </div>

          {/* Contact Information (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-3 inline-block">
              GET IN TOUCH
            </h4>
            
            <address className="flex flex-col space-y-5 not-italic text-sm">
              <div className="flex flex-col">
                <span className="text-[10px] font-heading font-bold text-text-on-dark uppercase tracking-widest mb-1">PHONE</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-white hover:text-white transition-colors focus:outline-none focus-visible:text-secondary">
                  {siteConfig.contact.phone}
                </a>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] font-heading font-bold text-text-on-dark uppercase tracking-widest mb-1">WHATSAPP</span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors focus:outline-none focus-visible:text-secondary">
                  {siteConfig.contact.whatsapp}
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-heading font-bold text-text-on-dark uppercase tracking-widest mb-1">EMAIL</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-white transition-colors focus:outline-none focus-visible:text-secondary">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex flex-col pt-2">
                <span className="text-[10px] font-heading font-bold text-text-on-dark uppercase tracking-widest mb-1">OFFICE</span>
                <address className="not-italic flex flex-col">
                  <a 
                    href={siteConfig.contact.googleMaps}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors leading-relaxed focus:outline-none focus-visible:text-secondary"
                  >
                    {siteConfig.contact.address.line1}<br />
                    {siteConfig.contact.address.line2}
                  </a>
                </address>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div ref={bottomRef} className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} ARKGO Solutions. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none focus-visible:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors focus:outline-none focus-visible:text-white">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
