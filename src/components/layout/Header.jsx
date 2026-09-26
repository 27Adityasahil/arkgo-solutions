"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronDown, User } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

export default function Header() {
  const { openModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // threshold to hide top bar
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (name) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(name);
  };
  
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileSubmenu = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedMobileMenu(expandedMobileMenu === name ? null : name);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const loginLinks = [
    { name: "Customer Login", href: process.env.NEXT_PUBLIC_CRM_URL ? `${process.env.NEXT_PUBLIC_CRM_URL}/login/customer` : "#" },
    { name: "Employee Login", href: process.env.NEXT_PUBLIC_CRM_URL ? `${process.env.NEXT_PUBLIC_CRM_URL}/login/employee` : "#" },
    { name: "Partner Login", href: process.env.NEXT_PUBLIC_CRM_URL ? `${process.env.NEXT_PUBLIC_CRM_URL}/login/admin` : "#" },
    { name: "Investor Login", href: process.env.NEXT_PUBLIC_CRM_URL ? `${process.env.NEXT_PUBLIC_CRM_URL}/login/investor` : "#" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar - Contact & Information */}
      <div 
        className={clsx(
          "bg-primary-dark text-white/90 transition-all duration-300 hidden lg:block relative z-20",
          isScrolled ? "h-0 opacity-0 overflow-hidden pointer-events-none" : "h-[36px] opacity-100 overflow-visible"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] h-full flex items-center justify-between text-[13px] font-sans">
          <div className="flex items-center">
            <span className="tracking-wide">Reliable Solar Solutions for Homes & Businesses</span>
          </div>
          
          <div className="flex items-center h-full">
            <div className="flex items-center space-x-5 mr-5">
              <a href="tel:+917979055407" className="flex items-center hover:text-secondary transition-colors">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                Call Us: +91 79790 55407
              </a>
              <span className="text-white/30">|</span>
              <a href="mailto:info@arkgosolutions.com" className="flex items-center hover:text-secondary transition-colors">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                Email: info@arkgosolutions.com
              </a>
            </div>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("Login")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center hover:text-secondary transition-colors cursor-pointer pl-5 border-l border-white/20 h-full">
                <User className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                Portal Login
                <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70" />
              </button>
              
              <div 
                className={clsx(
                  "absolute top-[36px] right-0 w-48 bg-white border border-gray-200 rounded-none transition-all duration-200 origin-top shadow-md",
                  activeDropdown === "Login" ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-95 pointer-events-none"
                )}
              >
                <div className="py-2">
                  {loginLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      className="block px-4 py-2.5 text-sm font-sans text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div 
        className={clsx(
          "bg-white transition-all duration-300 border-b border-gray-200",
          "h-[72px] lg:h-[80px] flex items-center"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center relative z-50 h-full" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="ARKGO Solutions" 
              width={180} 
              height={56} 
              className="w-auto h-10 lg:h-12" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 h-full" onMouseLeave={handleMouseLeave}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const isDropdownOpen = activeDropdown === link.name;
              const hasSubmenu = !!link.submenu;

              return (
                <div 
                  key={link.name} 
                  className="relative flex items-center h-full px-4"
                  onMouseEnter={() => hasSubmenu ? handleMouseEnter(link.name) : handleMouseEnter(null)}
                >
                  <Link
                    href={hasSubmenu ? "#" : link.href}
                    className={clsx(
                      "flex items-center text-[15px] font-sans font-medium transition-all duration-200 py-2 px-4 rounded-full group cursor-pointer",
                      isActive 
                        ? "text-white bg-primary font-bold shadow-sm" 
                        : "text-gray-800 hover:bg-gray-100 hover:text-primary"
                    )}
                    onClick={(e) => {
                      if (hasSubmenu) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {link.name}
                    {hasSubmenu && (
                      <ChevronDown className={clsx("w-4 h-4 ml-1 transition-transform duration-200", isDropdownOpen ? "rotate-180 text-primary" : "text-gray-400 group-hover:text-primary")} />
                    )}
                  </Link>

                  {hasSubmenu && (
                    <div 
                      className={clsx(
                        "absolute top-[90px] left-0 w-[500px] bg-white border border-gray-200 border-t-2 border-t-primary rounded-none shadow-sm transition-all duration-200 ease-out origin-top",
                        isDropdownOpen ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-95 pointer-events-none"
                      )}
                    >
                      <div className="absolute -top-[2px] left-0 right-0 h-[2px] bg-transparent" />
                      <div className="p-6">
                         <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                           {link.submenu.map((sub, i) => (
                             <Link key={sub.name} href={sub.href} className="group flex flex-col p-3 rounded-none hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200" onClick={() => setActiveDropdown(null)}>
                                <span className="text-[15px] font-sans font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">{sub.name}</span>
                                <span className="text-[13px] font-sans text-gray-600">{sub.desc}</span>
                             </Link>
                           ))}
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => openModal()}
              className="px-6 py-2.5 bg-primary text-white font-sans font-bold text-sm tracking-wide uppercase hover:bg-primary-dark transition-colors cursor-pointer rounded-none border-2 border-primary"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={clsx("h-[2px] w-full bg-current transition-transform duration-300", isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : "")} />
              <span className={clsx("h-[2px] w-full bg-current transition-opacity duration-300", isMobileMenuOpen ? "opacity-0" : "")} />
              <span className={clsx("h-[2px] w-full bg-current transition-transform duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : "")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={clsx(
          "lg:hidden fixed left-0 right-0 bottom-0 bg-white z-40 transition-all duration-300 overflow-y-auto",
          "top-[72px]", 
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 h-full">
          <nav className="flex flex-col space-y-2 mb-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const hasSubmenu = !!link.submenu;
              const isExpanded = expandedMobileMenu === link.name;
              
              return (
                <div key={link.name} className="flex flex-col border-b border-gray-100">
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href={link.href}
                      className={clsx(
                        "text-[17px] font-sans font-medium transition-colors", 
                        isActive ? "text-primary font-bold" : "text-gray-800"
                      )}
                      onClick={() => !hasSubmenu && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    
                    {hasSubmenu && (
                      <button 
                        className="p-2 text-gray-500"
                        onClick={(e) => toggleMobileSubmenu(e, link.name)}
                      >
                        <ChevronDown className={clsx("w-5 h-5 transition-transform duration-300", isExpanded ? "rotate-180 text-secondary" : "")} />
                      </button>
                    )}
                  </div>

                  {hasSubmenu && (
                    <div className={clsx("overflow-hidden transition-all duration-300", isExpanded ? "max-h-[400px] mb-4" : "max-h-0")}>
                      <div className="flex flex-col pl-4 space-y-3 border-l-2 border-gray-200 ml-2">
                        {link.submenu.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="text-base font-sans text-gray-600 py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Mobile Login Links */}
            <div className="flex flex-col border-b border-gray-100">
              <div className="flex items-center justify-between py-4">
                <span className="text-lg font-sans font-bold text-gray-800">Login Portal</span>
                <button 
                  className="p-2 text-gray-500"
                  onClick={(e) => toggleMobileSubmenu(e, "MobileLogin")}
                >
                  <ChevronDown className={clsx("w-5 h-5 transition-transform duration-300", expandedMobileMenu === "MobileLogin" ? "rotate-180 text-secondary" : "")} />
                </button>
              </div>
              <div className={clsx("overflow-hidden transition-all duration-300", expandedMobileMenu === "MobileLogin" ? "max-h-[400px] mb-4" : "max-h-0")}>
                <div className="flex flex-col pl-4 space-y-3 border-l-2 border-gray-200 ml-2">
                  {loginLinks.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.href} 
                      className="text-base font-sans text-gray-600 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="flex items-center justify-center w-full py-3.5 bg-primary text-white font-sans font-bold text-[15px] uppercase tracking-wide border-2 border-primary rounded-none transition-colors hover:bg-primary-dark cursor-pointer"
            >
              GET A QUOTE
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 text-sm text-gray-600">
              <a href="tel:+917979055407" className="flex items-center py-2">
                <Phone className="w-5 h-5 mr-3 text-primary" /> +91 79790 55407
              </a>
              <a href="mailto:info@arkgosolutions.com" className="flex items-center py-2">
                <Mail className="w-5 h-5 mr-3 text-primary" /> info@arkgosolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
