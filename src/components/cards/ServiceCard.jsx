"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function ServiceCard({ service, index }) {
  const { number, title, description, ctaText, id, isPriority } = service;

  return (
    <div className={clsx(
      "service-card group flex flex-col h-full bg-white border transition-all duration-500",
      isPriority 
        ? "border-slate-200 shadow-md hover:shadow-xl hover:border-primary/30" 
        : "border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200"
    )}>

      <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-slate-200 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-75" />

        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium z-20 transition-transform duration-700 group-hover:scale-105">
          [ IMAGE: {title.toUpperCase()} ]
        </div>

        <div className="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-sm text-primary font-heading font-bold px-3 py-1 text-sm">
          {number}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 lg:p-8">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Link 
            href={`/services/${id}`}
            className="inline-flex items-center text-primary font-heading font-semibold group/link"
          >
            {ctaText || `Explore ${title}`}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
