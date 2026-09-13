"use client";

import Image from "next/image";

export default function TrackRecord() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start mb-16 lg:mb-20">
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                Experience in Numbers
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight mb-6">
              Project Experience That Speaks For Itself.
            </h2>
            
            <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-lg">
              ARKGO Solutions has worked across residential, commercial and industrial solar requirements, with projects extending across Bihar.
            </p>
          </div>

          <div className="flex flex-col pt-2">
            <div className="mb-10 pb-10 border-b border-gray-200">
              <div className="text-7xl md:text-8xl lg:text-9xl font-heading font-black text-primary leading-none tracking-tighter mb-2">
                30+
              </div>
              <div className="text-xl font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                Projects
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-primary leading-none tracking-tighter mb-3">
                  20+
                </div>
                <div className="text-sm font-heading font-bold text-gray-500 uppercase tracking-[0.15em]">
                  Clients
                </div>
              </div>

              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <div className="text-4xl md:text-5xl font-heading font-black text-primary leading-none tracking-tighter mb-3">
                  1+ MW
                </div>
                <div className="text-sm font-heading font-bold text-gray-500 uppercase tracking-[0.15em]">
                  Solar Projects Executed
                </div>
              </div>

              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <div className="text-4xl md:text-5xl font-heading font-black text-primary leading-none tracking-tighter mb-3">
                  100%
                </div>
                <div className="text-sm font-heading font-bold text-gray-500 uppercase tracking-[0.15em]">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative h-[250px] md:h-[300px] rounded-none overflow-hidden shadow-none border border-gray-200">
            <Image
              src="/images/ai/arkgo-solar-track-record-stats.webp"
              alt="Massive ground-mounted solar farm"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          <div className="bg-primary p-8 md:p-10 rounded-none shadow-none border border-primary text-white flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-3xl font-heading font-extrabold text-secondary tracking-tighter leading-none mb-2 block">
                Top 10
              </span>
              <span className="text-base font-heading font-bold uppercase tracking-widest leading-snug">
                NBPDCL Vendor
              </span>
              <span className="text-white/70 text-xs uppercase tracking-widest mt-1 block">
                Under PM Surya Ghar Yojana
              </span>
            </div>

            <div className="w-full h-px bg-white/10 mb-8" />

            <div>
              <span className="text-3xl font-heading font-extrabold text-secondary tracking-tighter leading-none mb-2 block">
                3×
              </span>
              <span className="text-base font-heading font-bold uppercase tracking-widest leading-snug">
                District Magistrate
              </span>
              <span className="text-white/70 text-xs uppercase tracking-widest mt-1 block">
                Samastipur Recognition
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
