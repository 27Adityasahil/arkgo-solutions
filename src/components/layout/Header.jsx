"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FFFFFF]",
        "h-[72px] flex items-center lg:h-auto lg:block border-b border-[#E5E7EB]",
        isScrolled ? "lg:py-3 lg:shadow-md shadow-[0_2px_12px_rgba(7,59,115,0.08)]" : "lg:py-5 shadow-[0_2px_12px_rgba(7,59,115,0.08)] lg:shadow-none"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] w-full">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="ARKGO Solutions" 
              width={160} 
              height={50} 
              className="w-auto h-8 lg:h-10" 
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-heading font-medium transition-colors",
                  pathname === link.href ? "text-secondary font-bold" : "text-text-dark hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-secondary text-white rounded-sm font-heading font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button - Solar Panel Inspired */}
          <button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm group z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Solar Panel Icon (Closed State) */}
              <div 
                className={clsx(
                  "absolute inset-0 grid grid-cols-2 grid-rows-3 gap-[1px] p-[1px] border border-primary transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                  isMobileMenuOpen ? "opacity-0 scale-125 rotate-12" : "opacity-100 scale-100 rotate-0"
                )}
              >
                <div className="bg-primary/90 relative overflow-hidden group-hover:bg-primary transition-colors">
                   <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out motion-reduce:transition-none" />
                </div>
                <div className="bg-primary/90 relative group-hover:bg-primary transition-colors">
                   <div className="absolute top-0 right-0 w-[2px] h-[2px] bg-white/70" />
                </div>
                <div className="bg-primary/90 group-hover:bg-primary transition-colors" />
                <div className="bg-primary/90 group-hover:bg-primary transition-colors" />
                <div className="bg-primary/90 group-hover:bg-primary transition-colors" />
                <div className="bg-primary/90 group-hover:bg-primary transition-colors" />
                {/* Red accent indicator */}
                <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-secondary rounded-full border border-white" />
              </div>

              {/* Close X (Open State) */}
              <div 
                className={clsx(
                  "absolute inset-0 flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-50"
                )}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className={clsx("absolute w-6 h-[2px] bg-secondary transition-transform duration-300 motion-reduce:transition-none", isMobileMenuOpen ? "rotate-45" : "rotate-0")} />
                  <div className={clsx("absolute w-6 h-[2px] bg-secondary transition-transform duration-300 motion-reduce:transition-none", isMobileMenuOpen ? "-rotate-45" : "rotate-0")} />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        id="mobile-menu"
        className={clsx(
          "lg:hidden fixed left-0 right-0 bottom-0 bg-[#FAF7F0] z-40 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-y-auto overscroll-contain",
          "top-[72px]", // Directly below the header
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col min-h-full px-6 py-8 relative">
          
          {/* Subtle Energy Line Animation */}
          <div className="absolute top-0 left-0 h-[2px] bg-secondary transition-all duration-700 ease-out motion-reduce:transition-none" style={{ width: isMobileMenuOpen ? '100%' : '0%' }} />

          {/* Minimal Solar Visual in Background */}
          <div 
            className={clsx(
              "absolute top-8 right-6 pointer-events-none transition-all duration-1000 motion-reduce:transition-none",
              isMobileMenuOpen ? "opacity-5 rotate-0" : "opacity-0 -rotate-12"
            )}
          >
            <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="12" r="4" stroke="#073B73" strokeWidth="1"/>
              <path d="M12 28L36 28M16 28L12 40M32 28L36 40M12 40L36 40M16 34L32 34M24 28L24 40" stroke="#073B73" strokeWidth="1" strokeLinecap="square"/>
            </svg>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-[18px] mb-12 relative z-10">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <div 
                  key={link.name} 
                  className={clsx(
                    "transition-all duration-400 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${isMobileMenuOpen ? 50 + (i * 45) : 0}ms` }}
                >
                  <Link
                    href={link.href}
                    className="group flex flex-col w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF7F0] rounded-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className={clsx("text-sm font-heading font-bold transition-colors", isActive ? "text-secondary" : "text-[#8FA8BF] group-hover:text-primary")}>
                        0{i + 1}
                      </span>
                      <span className={clsx("text-[26px] font-heading font-extrabold uppercase tracking-wide transition-colors leading-none", isActive ? "text-primary" : "text-primary group-hover:text-secondary")}>
                        {link.name}
                      </span>
                    </div>
                    {/* Active indicator line */}
                    {isActive && (
                      <div className="w-full h-[2px] bg-secondary mt-1.5 ml-[34px] w-[calc(100%-34px)]" />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="w-full h-px bg-primary/10 mb-8 mt-auto" />

          {/* CTAs */}
          <div 
            className={clsx(
              "flex flex-col gap-4 relative z-10 transition-all duration-400 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${isMobileMenuOpen ? 400 : 0}ms` }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-between w-full min-h-[48px] px-6 bg-secondary text-white font-heading font-bold uppercase tracking-widest text-xs transition-colors hover:bg-[#c23e28] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F0]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>GET A QUOTE</span>
              <span>→</span>
            </Link>
            <Link
              href="https://wa.me/917979055407"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full min-h-[48px] px-6 border border-primary text-primary font-heading font-bold uppercase tracking-widest text-xs transition-colors hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F0]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>WHATSAPP US</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
