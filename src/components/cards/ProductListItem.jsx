"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import Button from "@/components/buttons/Button";

export default function ProductListItem({ product, isActive, onInteract }) {
  const { number, title, description, ctaText, bgClass } = product;

  return (
    <button
      type="button"
      className={clsx(
        "group relative flex flex-col items-start w-full py-8 lg:py-10 border-b border-border-edge text-left transition-colors duration-300 focus:outline-none focus-visible:bg-tint-blue",
        isActive ? (bgClass || "bg-tint-blue") : `hover:${bgClass || "bg-tint-blue"}/50`
      )}
      onMouseEnter={onInteract}
      onClick={onInteract}
      onFocus={onInteract}
      aria-expanded={isActive}
    >
      {/* Active state accent line */}
      <div 
        className={clsx(
          "absolute left-0 top-0 bottom-0 w-1 bg-secondary transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0"
        )} 
      />
      
      <div className="w-full px-6 lg:px-10 flex flex-col sm:flex-row sm:items-start sm:justify-between">
        
        <div className="flex-1 max-w-xl">
          <div className="flex items-center space-x-4 mb-4">
            <span className={clsx(
              "text-sm font-heading font-bold tracking-widest transition-colors duration-300",
              isActive ? "text-secondary" : "text-text-muted group-hover:text-secondary/70"
            )}>
              {number}
            </span>
            <h3 className={clsx(
              "text-xl lg:text-2xl font-heading font-bold transition-colors duration-300 uppercase tracking-wider",
              isActive ? "text-text-dark" : "text-text-muted group-hover:text-text-dark"
            )}>
              {title}
            </h3>
          </div>
          
          <p className="text-text-muted text-base leading-relaxed mb-6 sm:mb-0 max-w-md">
            {description}
          </p>
        </div>

        {/* Desktop CTA alignment */}
        <div className="sm:ml-8 sm:mt-4 flex-shrink-0">
          <Link
            href="/contact"
            tabIndex={-1}
            className="inline-flex items-center justify-center bg-secondary text-white hover:bg-primary transition-all duration-300 rounded-sm font-heading font-semibold uppercase tracking-widest text-xs px-6 py-2.5 group/btn"
          >
            {ctaText}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>

      </div>
    </button>
  );
}
