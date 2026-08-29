"use client";

import Link from "next/link";
import { ArrowRight, Zap, Battery, Sun, Wrench, Shield, Plug } from "lucide-react";

const products = [
  { name: "Solar Panels", icon: <Sun className="w-6 h-6 text-secondary" /> },
  { name: "Inverters", icon: <Zap className="w-6 h-6 text-secondary" /> },
  { name: "Batteries", icon: <Battery className="w-6 h-6 text-secondary" /> },
  { name: "C-Channel", icon: <Wrench className="w-6 h-6 text-secondary" /> },
  { name: "Purlins", icon: <Wrench className="w-6 h-6 text-secondary" /> },
  { name: "Mid Clamps", icon: <Wrench className="w-6 h-6 text-secondary" /> },
  { name: "Side Clamps", icon: <Wrench className="w-6 h-6 text-secondary" /> },
  { name: "Earthing Components", icon: <Shield className="w-6 h-6 text-secondary" /> },
  { name: "Lightning Arresters", icon: <Shield className="w-6 h-6 text-secondary" /> },
  { name: "AC/DC Wires", icon: <Plug className="w-6 h-6 text-secondary" /> },
  { name: "Installation Materials", icon: <Wrench className="w-6 h-6 text-secondary" /> },
];

export default function Products() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-start mb-6">
              <div className="w-[3px] h-4 bg-secondary mr-4 mt-0.5" />
              <div className="text-sm font-heading font-bold text-primary uppercase tracking-widest">
                PRODUCT CAPABILITIES
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold text-primary leading-[1.1]">
              QUALITY COMPONENTS FOR EVERY INSTALLATION.
            </h2>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-secondary text-white hover:bg-[#b83b27] rounded-[4px] font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors group whitespace-nowrap"
          >
            ASK ABOUT PRODUCTS
            <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center text-center p-6 bg-[#FAF7F0] border border-primary/5 rounded-sm hover:border-secondary/30 transition-colors"
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                {product.icon}
              </div>
              <span className="text-sm font-heading font-bold text-primary">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
