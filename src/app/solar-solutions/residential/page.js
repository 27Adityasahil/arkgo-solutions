export const metadata = {
  title: "Residential Solar | PM Surya Ghar Yojana",
  description: "Transition to solar energy with ARKGO Solutions. Learn about residential rooftop solar and the PM Surya Ghar Yojana in Bihar.",
};

export default function ResidentialSolarPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Residential Solutions
            </span>
            <span className="w-8 h-1 bg-secondary ml-4 inline-block"></span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
            Residential Solar
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Power your home with clean energy. We help homeowners transition to solar energy effortlessly, leveraging the PM Surya Ghar Yojana framework.
          </p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-none border border-gray-200 shadow-none">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-6">
            PM Surya Ghar Yojana
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The PM Surya Ghar Yojana offers significant subsidies to homeowners installing rooftop solar systems. Our team handles the entire process, from feasibility checks and system design to net metering setup and subsidy processing.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Reduce your monthly electricity bills drastically.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Gain energy independence with a reliable rooftop solar system.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">End-to-end support for government subsidies and net metering.</span>
            </li>
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/contact?type=residential" 
              className="inline-block bg-secondary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
