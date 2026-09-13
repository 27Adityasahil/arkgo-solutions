export const metadata = {
  title: "Solar Installation & Maintenance",
  description: "Safe, code-compliant solar installations and comprehensive after-sales service by ARKGO Solutions.",
};

export default function InstallationPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1000px]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Engineering & Support
            </span>
            <span className="w-8 h-1 bg-secondary ml-4 inline-block"></span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
            Installation & Service
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our engineering team ensures safe, code-compliant installations. We also offer comprehensive after-sales service and maintenance.
          </p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-none border border-gray-200 shadow-none">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-6">
            Built to Last
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The longevity of a solar plant heavily depends on the quality of its installation. Our skilled technicians adhere to strict safety and quality standards, ensuring your system withstands extreme weather conditions and operates optimally for decades.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Professional, code-compliant electrical wiring and structural mounting.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Rigorous testing and commissioning procedures before handover.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Routine O&M (Operations & Maintenance) packages available.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary flex-shrink-0 mr-3"></span>
              <span className="text-gray-600">Prompt troubleshooting and repair services across Bihar.</span>
            </li>
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/contact?type=service" 
              className="inline-block bg-secondary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors"
            >
              Request Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
