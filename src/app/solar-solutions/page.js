export const metadata = {
  title: "Solar Solutions",
  description: "Comprehensive solar solutions for residential, commercial, and industrial needs across Bihar. Distribution, installation, and after-sales support.",
};

export default function SolarSolutionsPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Our Expertise
            </span>
            <span className="w-8 h-1 bg-secondary ml-4 inline-block"></span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
            Complete Solar Solutions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            From high-quality component distribution to full-scale project installation, ARKGO Solutions delivers end-to-end solar energy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-10 rounded-none border border-gray-200 shadow-none transition-colors hover:border-gray-300" id="residential">
            <div className="w-16 h-16 bg-primary/5 rounded-none flex items-center justify-center text-secondary mb-6 border border-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Residential Solar (PM Surya Ghar)</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We help homeowners transition to solar energy, leveraging the PM Surya Ghar Yojana framework. Reduce electricity bills and gain energy independence with a reliable rooftop solar system.
            </p>
          </div>

          <div className="bg-white p-10 rounded-none border border-gray-200 shadow-none transition-colors hover:border-gray-300" id="commercial">
            <div className="w-16 h-16 bg-primary/5 rounded-none flex items-center justify-center text-secondary mb-6 border border-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Commercial & Industrial</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Large-scale solar solutions designed to cut operational costs for businesses, factories, and institutions. We manage everything from site surveying and structural design to full deployment.
            </p>
          </div>

          <div className="bg-white p-10 rounded-none border border-gray-200 shadow-none transition-colors hover:border-gray-300" id="distribution">
            <div className="w-16 h-16 bg-primary/5 rounded-none flex items-center justify-center text-secondary mb-6 border border-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Solar Distribution & Retail</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We supply premium solar components including Tier-1 PV modules, inverters, batteries, cables, and structural materials to local integrators and direct consumers.
            </p>
          </div>

          <div className="bg-white p-10 rounded-none border border-gray-200 shadow-none transition-colors hover:border-gray-300" id="installation">
            <div className="w-16 h-16 bg-primary/5 rounded-none flex items-center justify-center text-secondary mb-6 border border-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Installation & Maintenance</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our engineering team ensures safe, code-compliant installations. We also offer comprehensive after-sales service and maintenance to keep your solar investment operating efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
