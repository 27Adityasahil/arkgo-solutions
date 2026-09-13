"use client";

const applications = [
  {
    id: "01",
    title: "RESIDENTIAL",
    description: "Solar solutions for residential energy requirements."
  },
  {
    id: "02",
    title: "COMMERCIAL",
    description: "Solar solutions for commercial properties and business requirements."
  },
  {
    id: "03",
    title: "INDUSTRIAL",
    description: "Solar solutions for larger industrial energy requirements."
  }
];

export default function WhatSetsUsApart() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6 flex flex-col pt-4">
            <div className="flex items-center mb-8">
              <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
              <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
                The Bigger Picture
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
              Solar Is Not One Solution. It Is A <span className="text-secondary">Project-Specific</span> Decision.
            </h2>
            
            <p className="text-lg text-white/80 font-sans leading-relaxed max-w-xl">
              Different buildings, businesses and energy requirements call for different approaches. ARKGO Solutions works across residential, commercial and industrial requirements, with system configurations that include On-Grid, Off-Grid and Hybrid Solar.
            </p>

            <div className="mt-12 border-t border-white/20 pt-6">
              <span className="text-xs font-heading font-bold text-white/60 uppercase tracking-widest mb-2 block">
                System Configurations
              </span>
              <div className="text-sm font-heading font-bold text-white uppercase tracking-widest">
                ON-GRID <span className="text-secondary mx-3">•</span> 
                OFF-GRID <span className="text-secondary mx-3">•</span> 
                HYBRID
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col pt-4">
            <div className="bg-white rounded-none shadow-none overflow-hidden border border-gray-200">
              {applications.map((app, index) => (
                <div 
                  key={app.id}
                  className={`flex flex-col md:flex-row items-start p-8 ${index !== applications.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="text-4xl font-heading font-black text-secondary shrink-0 md:w-20 mb-4 md:mb-0">
                    {app.id}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-heading font-extrabold text-primary uppercase tracking-wider mb-2">
                      {app.title}
                    </h3>
                    <p className="text-gray-600 font-sans leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
