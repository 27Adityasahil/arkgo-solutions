import LeadForm from "@/components/forms/LeadForm";

export default function EnquirySection() {
  return (
    <section className="py-20 bg-[#F7F9FB]" id="enquiry">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D94A32] font-heading font-bold uppercase tracking-widest text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#073B73] mb-6 leading-tight">
              Start Your Solar Journey with ARKGO
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl text-lg">
              Whether you need residential solar under the PM Surya Ghar Yojana, a commercial installation, or high-quality solar products, our experts are ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#073B73]/5 flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#073B73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#073B73]">Expert Consultation</h4>
                  <p className="text-sm text-gray-500">Free site survey and energy assessment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#073B73]/5 flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#073B73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#073B73]">Trusted Quality</h4>
                  <p className="text-sm text-gray-500">Premium products and professional installation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
