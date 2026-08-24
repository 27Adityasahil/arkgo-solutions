"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function ProductCard({ product }) {
  const { number, title, description, ctaText, id, isFeatured, bgClass } = product;

  return (
    <div className={clsx(
      "product-card group relative flex flex-col overflow-hidden transition-all duration-500",
      bgClass || "bg-base",
      isFeatured 
        ? "h-full border border-border-edge" 
        : "h-full border-b border-border-edge hover:opacity-95 p-6"
    )}>
      
      {/* Featured Image Layout */}
      {isFeatured && (
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-square xl:aspect-[4/3] bg-tint-blue overflow-hidden border-b border-border-edge">
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
          
          <div className="absolute inset-0 flex items-center justify-center text-text-muted font-heading font-medium text-lg z-0 transition-transform duration-700 group-hover:scale-105">
            [ IMAGE: {title.toUpperCase()} ]
          </div>
          
          <div className="absolute top-0 left-0 z-20 bg-primary text-white font-heading font-bold px-4 py-2 text-sm tracking-widest">
            {number}
          </div>
        </div>
      )}

      {/* Featured Content Layout */}
      {isFeatured ? (
        <div className={clsx("p-8 lg:p-12 flex flex-col justify-end border-t-4 border-primary", bgClass || "bg-white")}>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-heading font-bold text-text-dark mb-4 group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-muted mb-8 max-w-lg text-lg leading-relaxed">
            {description}
          </p>
          <div>
            <Link 
              href="/contact"
              className="inline-flex items-center text-primary font-heading font-bold uppercase tracking-widest text-sm group/link hover:text-secondary transition-colors"
            >
              {ctaText}
              <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" />
            </Link>
          </div>
        </div>
      ) : (
        /* Secondary List/Card Layout */
        <div className="flex flex-col h-full relative">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-heading font-bold text-text-muted tracking-widest">{number}</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-text-dark mb-3 group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-muted mb-8 flex-grow text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-auto pt-4 border-t border-border-edge">
            <Link 
              href="/contact"
              className="inline-flex items-center text-primary font-heading font-bold uppercase tracking-widest text-xs group/link hover:text-secondary transition-colors"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
            </Link>
          </div>
          {/* Decorative hover accent */}
          <div className="absolute top-0 left-0 w-0.5 h-0 bg-secondary transition-all duration-300 group-hover:h-full -ml-6" />
        </div>
      )}
    </div>
  );
}
