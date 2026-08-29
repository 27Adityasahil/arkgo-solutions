import LeadForm from "@/components/forms/LeadForm";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: 'Contact Us | Request a Solar Quote',
  description: 'Get in touch with ARKGO Solutions for your solar requirements in Bihar. We offer residential, commercial, and industrial solar installations.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D94A32] font-heading font-bold uppercase tracking-widest text-sm mb-4 block">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#073B73] mb-6">
            Let&apos;s Talk Solar
          </h1>
          <p className="text-lg text-gray-600">
            Have questions about solar installation or want a free quote? Our team is ready to help you switch to clean, affordable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="bg-[#F7F9FB] p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-[#073B73] mb-6">Reach Out</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-4 shadow-sm text-[#F2B632]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-600 hover:text-[#073B73] transition-colors">{siteConfig.contact.phone}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-4 shadow-sm text-[#F2B632]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-[#073B73] transition-colors">{siteConfig.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-4 shadow-sm text-[#F2B632]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Office</h4>
                    <a href={siteConfig.contact.googleMaps} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#073B73] transition-colors leading-relaxed">
                      {siteConfig.contact.address.line1}<br />{siteConfig.contact.address.line2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
