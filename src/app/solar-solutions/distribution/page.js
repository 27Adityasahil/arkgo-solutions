export const metadata = {
  title: "Solar Distribution & Retail",
  description: "Premium solar components including Tier-1 PV modules, inverters, and batteries supplied by ARKGO Solutions.",
};

export default function DistributionPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Wholesale & Retail
            </span>
            <span className="w-8 h-1 bg-secondary ml-4 inline-block"></span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
            Distribution & Retail
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We supply premium solar components to local integrators, businesses, and direct consumers across Bihar.
          </p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-none border border-gray-200 shadow-none">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-6">
            Quality Components
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            A solar power system is only as reliable as its components. We partner with top-tier manufacturers to ensure you get the best equipment available in the market.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 mb-8 mt-10">
            <div>
              <h3 className="font-heading font-bold text-primary mb-3">Solar Panels</h3>
              <p className="text-gray-600 text-sm">Tier-1 Mono PERC and Half-Cut solar modules with high efficiency and extended warranties.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary mb-3">Inverters</h3>
              <p className="text-gray-600 text-sm">Reliable On-Grid, Off-Grid, and Hybrid inverters from industry-leading brands.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary mb-3">Batteries</h3>
              <p className="text-gray-600 text-sm">Advanced Lithium-ion and deep cycle batteries for robust energy storage.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary mb-3">BoS (Balance of System)</h3>
              <p className="text-gray-600 text-sm">High-quality DC cables, AC/DC distribution boxes, earthing kits, and GI structures.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/contact?type=distribution" 
              className="inline-block bg-secondary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors"
            >
              Enquire About Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
