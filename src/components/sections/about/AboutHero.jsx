"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-primary w-full pt-[100px] lg:pt-[150px] pb-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="w-full lg:w-1/2 flex flex-col pt-10 lg:pt-0 z-10 text-white">
            <div className="flex items-center mb-6 space-x-3">
              <span className="w-8 h-1 bg-secondary"></span>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                About Arkgo
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-heading font-extrabold leading-[1.1] tracking-tight mb-6">
              Building Solar Solutions Around Real Energy Requirements.
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-sans leading-relaxed mb-8 max-w-lg">
              ARKGO Solutions provides solar energy solutions for residential, commercial and industrial requirements, with projects and service capabilities extending across Bihar.
            </p>

            <div className="pt-6 border-t border-white/20 inline-block">
              <span className="text-xs font-heading font-bold text-secondary uppercase tracking-widest leading-loose">
                Solar Energy • Practical Solutions • Real Projects
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-none overflow-hidden shadow-none border border-white/20">
              <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] relative">
                <Image
                  src="/images/ai/arkgo-corporate-solar-infrastructure.webp"
                  alt="Modern corporate solar infrastructure"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-6 right-6 z-10 hidden sm:flex items-center bg-white px-4 py-2 border-l-4 border-secondary shadow-none rounded-none border border-gray-200">
                <span className="text-xs font-heading font-bold text-primary uppercase tracking-wider">
                  Muzaffarpur, Bihar
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
