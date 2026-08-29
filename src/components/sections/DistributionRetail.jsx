"use client";

import Link from "next/link";
import { ArrowRight, Package, Home } from "lucide-react";

export default function DistributionRetail() {
  return (
    <section className="py-20 lg:py-24 bg-[#E8F1F8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-start mb-4">
            <div className="w-[3px] h-4 bg-secondary mr-4 mt-0.5" />
            <div className="text-sm font-heading font-bold text-primary uppercase tracking-widest">
              HOW WE WORK
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold text-primary leading-[1.1] mb-6">
            SUPPORTING BOTH RETAILERS AND CONSUMERS.
          </h2>
          <p className="text-base md:text-lg text-text-muted font-sans leading-relaxed">
            ARKGO Solutions operates across the solar supply chain, providing high-quality products to both wholesale partners and end consumers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Retailers Card */}
          <div className="bg-white p-8 lg:p-12 rounded-sm shadow-sm border border-primary/5 hover:border-secondary/30 transition-colors flex flex-col">
            <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-primary mb-4 uppercase">
              For Retailers
            </h3>
            <p className="text-text-muted mb-8 flex-grow">
              Product sourcing and supply support for solar retailers and contractors. Access a wide range of reliable solar components for your own projects.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-secondary font-heading font-bold uppercase tracking-widest text-xs group"
            >
              ENQUIRE FOR WHOLESALE
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Consumers Card */}
          <div className="bg-white p-8 lg:p-12 rounded-sm shadow-sm border border-primary/5 hover:border-secondary/30 transition-colors flex flex-col">
            <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-primary mb-4 uppercase">
              For End Consumers
            </h3>
            <p className="text-text-muted mb-8 flex-grow">
              Complete end-to-end service including high-quality products, professional installation, and ongoing maintenance for your home or business.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-secondary font-heading font-bold uppercase tracking-widest text-xs group"
            >
              DISCUSS YOUR INSTALLATION
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
