"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <div className="relative">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] overflow-hidden border-8 border-gray-100 shadow-lg">
              <Image
                src="/images/ai/arkgo-solar-technician-portrait.webp"
                alt="ARKGO Solutions Solar Technician"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pl-8">
            <div className="flex items-center mb-6">
              <span className="inline-block bg-secondary text-primary font-bold px-4 py-1 uppercase tracking-widest text-sm">
                ABOUT ARKGO
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-black text-gray-900 leading-[1.1] tracking-tight mb-6 uppercase">
              Powering a Better Tomorrow with Solar Energy
            </h2>

            <p className="text-lg text-gray-800 font-sans leading-relaxed mb-8 font-medium">
              ARKGO provides complete solar solutions across Bihar, from high-quality solar products and retail distribution to professional installation and reliable after-sales service.
            </p>

            <ul className="space-y-4 mb-10 border-t border-b border-gray-200 py-6">
              {[
                "End-to-End Solar Project Management",
                "Premium Tier-1 Solar Products",
                "Certified Expert Installation Team"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-secondary flex items-center justify-center shrink-0 border border-gray-900">
                    <Check className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="font-sans font-bold text-gray-900 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex mt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center bg-white text-primary font-sans font-bold text-lg px-10 py-4 transition-colors hover:bg-gray-50 shadow-sm uppercase tracking-wide border-2 border-primary"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
