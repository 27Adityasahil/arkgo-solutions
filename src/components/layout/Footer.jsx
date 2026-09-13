"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

export default function Footer() {
  const { openModal } = useQuoteModal();
  const whatsappMessage = encodeURIComponent("Hello, I am interested in exploring solar solutions with ARKGO.");
  const whatsappUrl = `https://wa.me/91${siteConfig.contact.whatsapp}?text=${whatsappMessage}`;

  const addressQuery = encodeURIComponent(`${siteConfig.contact.address.line1} ${siteConfig.contact.address.line2}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <footer className="bg-white border-t-4 border-gray-100">
      
      {/* Top CTA Strip */}
      <div className="bg-gray-50 border-b border-gray-200 py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary uppercase tracking-wide mb-6 md:mb-0">
              READY TO EXPLORE SOLAR?
            </h3>
            <button 
              onClick={() => openModal()}
              className="inline-flex items-center justify-center bg-secondary text-gray-900 font-sans font-bold text-base px-8 py-4 transition-colors hover:bg-secondary/90 shadow-[2px_2px_0px_rgba(211,47,47,0.3)] cursor-pointer uppercase tracking-wide border-2 border-secondary"
            >
              GET A QUOTE 
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          <div className="lg:col-span-3 lg:pr-8">
            <Link href="/" className="inline-block mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-none">
              <Image 
                src="/logo.png" 
                alt="ARKGO Solutions" 
                width={180} 
                height={60} 
                className="w-auto h-10 lg:h-12" 
              />
            </Link>
            <div className="text-sm font-heading font-bold text-gray-900 uppercase tracking-widest mb-4">
              &quot;FORGET ABOUT ELECTRICITY BILLS — GO SOLAR WITH ARKGO&quot;
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed font-sans font-medium">
              Reliable solar solutions for residential, commercial and industrial requirements across Bihar.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Recognition', path: '/recognition' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-[15px] font-sans font-medium text-gray-700 hover:text-primary transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2.5"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider">
              Solar Solutions
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Residential Solar', path: '/solar-solutions/residential' },
                { name: 'Commercial Solar', path: '/solar-solutions/commercial' },
                { name: 'Distribution & Retail', path: '/solar-solutions/distribution' },
                { name: 'Installation & Service', path: '/solar-solutions/installation' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-[15px] font-sans font-medium text-gray-700 hover:text-primary transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2.5"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Projects', 'Gallery', 'Reviews'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' us', '').replace(' ', '-')}`} className="text-[15px] font-sans font-medium text-gray-700 hover:text-primary transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2.5"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider">
              Get In Touch
            </h4>
            
            <address className="flex flex-col space-y-5 not-italic text-sm">
              <div className="flex flex-col">
                <span className="text-[10px] font-heading font-bold text-gray-500 uppercase tracking-widest mb-1">PHONE</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-[15px] text-gray-900 font-medium hover:text-primary transition-colors focus:outline-none focus-visible:text-primary">
                  {siteConfig.contact.phone}
                </a>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] font-heading font-bold text-gray-500 uppercase tracking-widest mb-1">WHATSAPP</span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-900 font-medium hover:text-primary transition-colors focus:outline-none focus-visible:text-primary">
                  {siteConfig.contact.whatsapp}
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-heading font-bold text-gray-500 uppercase tracking-widest mb-1">EMAIL</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[15px] text-gray-900 font-medium hover:text-primary transition-colors focus:outline-none focus-visible:text-primary">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex flex-col pt-2">
                <span className="text-[10px] font-heading font-bold text-gray-500 uppercase tracking-widest mb-1">OFFICE</span>
                <address className="not-italic flex flex-col">
                  <a 
                    href={mapsUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[15px] text-gray-700 font-medium hover:text-primary transition-colors leading-relaxed focus:outline-none focus-visible:text-primary"
                  >
                    {siteConfig.contact.address.line1}<br />
                    {siteConfig.contact.address.line2}
                  </a>
                </address>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="bg-[#1a202c] border-t border-[#2d3748] py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-center text-[13px] md:text-sm text-gray-400 space-y-4 md:space-y-0">
            <div>
              &copy; {new Date().getFullYear()} ARKGO Solutions. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none focus-visible:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors focus:outline-none focus-visible:text-white">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
