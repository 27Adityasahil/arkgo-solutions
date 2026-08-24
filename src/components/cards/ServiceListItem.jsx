"use client";

import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function ServiceListItem({ service, isActive, onInteract }) {
  const { number, title } = service;

  return (
    <button
      type="button"
      className={clsx(
        "group relative flex items-center justify-between w-full py-5 lg:py-6 border-b border-border-edge text-left transition-colors duration-300 focus:outline-none focus-visible:bg-tint-green",
        isActive ? "bg-tint-green" : "hover:bg-tint-green/50"
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
      
      <div className="flex items-center space-x-6 lg:space-x-8 px-6 lg:px-8">
        <span className={clsx(
          "text-lg font-heading font-semibold transition-colors duration-300",
          isActive ? "text-secondary" : "text-text-muted group-hover:text-secondary/70"
        )}>
          {number}
        </span>
        <h3 className={clsx(
          "text-lg md:text-xl lg:text-2xl font-heading font-bold transition-colors duration-300 uppercase tracking-wide",
          isActive ? "text-text-dark" : "text-text-muted group-hover:text-text-dark"
        )}>
          {title}
        </h3>
      </div>
      
      <div className="px-6 lg:px-8">
        <ArrowRight className={clsx(
          "w-5 h-5 transition-all duration-300",
          isActive ? "text-secondary translate-x-2" : "text-border-edge group-hover:text-secondary group-hover:translate-x-2"
        )} />
      </div>
    </button>
  );
}
