export const metadata = {
  title: "Commercial & Industrial Solar",
  description: "Large-scale solar solutions designed to cut operational costs for businesses, factories, and institutions in Bihar.",
};

export default function CommercialSolarPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Business Solutions
            </span>
            <span className="w-8 h-1 bg-secondary ml-4 inline-block"></span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
            Commercial & Industrial
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Large-scale solar solutions designed to cut operational costs for businesses, factories, and institutions.
          </p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-none border border-gray-200 shadow-none">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-6">
            Optimize Your Operations
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Energy costs represent a major overhead for most businesses. By transitioning to solar, you lock in a lower fixed cost for electricity, protecting your business from fluctuating grid tariffs and ensuring long-term profitability.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Comprehensive site surveying and structural load analysis.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Custom engineering and high-efficiency system design.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Tax benefits (Accelerated Depreciation) for commercial entities.</span>
            </li>
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/contact?type=commercial" 
              className="inline-block bg-secondary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors"
            >
              Request a Site Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
