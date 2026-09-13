"use client";

import { ShieldCheck, BatteryCharging, Wrench, Headphones } from "lucide-react";

const trustPoints = [
  {
    icon: BatteryCharging,
    title: "Complete Solar Solutions",
    description: "From consultation to final installation.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description: "Premium panels and reliable components.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Setup by certified solar technicians.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description: "Maintenance for optimal performance.",
  }
];

export default function WhyArkgo() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-block bg-secondary text-primary font-bold px-4 py-1 uppercase tracking-widest text-sm">
              THE ARKGO ADVANTAGE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-black text-white leading-tight uppercase">
            WHY CHOOSE ARKGO?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-8 bg-primary-dark border-2 border-white/10 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
              >
                <div className="w-16 h-16 rounded-none bg-white/10 flex items-center justify-center mb-6 text-secondary border border-secondary/30">
                  <Icon size={32} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl font-sans font-bold text-white mb-3 uppercase">
                  {point.title}
                </h3>
                
                <p className="text-base text-white/90 font-sans leading-relaxed font-medium">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
