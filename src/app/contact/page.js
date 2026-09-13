import LeadForm from "@/components/forms/LeadForm";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: 'Contact Us | Request a Solar Quote',
  description: 'Get in touch with ARKGO Solutions for your solar requirements in Bihar. We offer residential, commercial, and industrial solar installations.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">

        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Contact Us
            </span>
            <span className="w-8 h-1 bg-secondary ml-4 inline-block"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
            Let&apos;s Talk Solar
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about solar installation or want a free quote? Our team is ready to help you switch to clean, affordable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">

          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white p-10 rounded-none border border-gray-200 shadow-none h-full">
              <h3 className="text-2xl font-heading font-extrabold text-primary mb-8 uppercase tracking-wider">Reach Out</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-none bg-primary/5 flex items-center justify-center flex-shrink-0 mr-5 border border-primary/10 text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary uppercase tracking-widest text-sm mb-1">Phone</h4>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-600 hover:text-secondary transition-colors">{siteConfig.contact.phone}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-none bg-primary/5 flex items-center justify-center flex-shrink-0 mr-5 border border-primary/10 text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary uppercase tracking-widest text-sm mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-secondary transition-colors">{siteConfig.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-none bg-primary/5 flex items-center justify-center flex-shrink-0 mr-5 border border-primary/10 text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary uppercase tracking-widest text-sm mb-1">Office</h4>
                    <a href={siteConfig.contact.googleMaps} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition-colors leading-relaxed">
                      {siteConfig.contact.address.line1}<br />{siteConfig.contact.address.line2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
