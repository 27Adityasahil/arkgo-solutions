"use client";

import { useState } from "react";
import { Plus, Minus, ArrowDown } from "lucide-react";

const considerations = [
  { id: "01", title: "ENERGY REQUIREMENT" },
  { id: "02", title: "SITE CONDITIONS" },
  { id: "03", title: "SYSTEM CONFIGURATION" },
  { id: "04", title: "APPLICATION" }
];

const faqs = [
  {
    id: "01",
    question: "WHAT TYPES OF SOLAR SERVICES DOES ARKGO PROVIDE?",
    answer: "ARKGO Solutions provides solar consultation, site survey, solar system design, solar panel installation, inverter installation, battery solutions, solar maintenance and solar repair and service."
  },
  {
    id: "02",
    question: "DOES ARKGO PROVIDE RESIDENTIAL, COMMERCIAL AND INDUSTRIAL SOLAR SOLUTIONS?",
    answer: "Yes. ARKGO Solutions works across residential, commercial and industrial solar requirements."
  },
  {
    id: "03",
    question: "WHAT TYPES OF SOLAR SYSTEMS DOES ARKGO WORK WITH?",
    answer: "ARKGO Solutions works with On-Grid, Off-Grid and Hybrid solar system configurations, depending on the requirements of the project."
  },
  {
    id: "04",
    question: "HOW DO I KNOW WHICH SOLAR SYSTEM IS RIGHT FOR MY PROJECT?",
    answer: "The appropriate configuration depends on factors such as the project's energy requirement, site conditions, application and relationship with the electricity grid. ARKGO can assess the requirement and discuss the appropriate approach."
  },
  {
    id: "05",
    question: "DOES ARKGO PROVIDE SITE SURVEY AND SYSTEM DESIGN?",
    answer: "Yes. Site survey and solar system design are part of ARKGO's service capabilities."
  },
  {
    id: "06",
    question: "DOES ARKGO PROVIDE SOLAR INSTALLATION?",
    answer: "Yes. ARKGO provides solar panel installation, inverter installation and related installation services as part of its solar project capabilities."
  },
  {
    id: "07",
    question: "DOES ARKGO PROVIDE MAINTENANCE AND REPAIR?",
    answer: "Yes. ARKGO provides solar maintenance and solar repair and service support."
  },
  {
    id: "08",
    question: "WHERE DOES ARKGO PROVIDE SOLAR SERVICES?",
    answer: "ARKGO Solutions is currently working across all districts of Bihar."
  },
  {
    id: "09",
    question: "CAN I DISCUSS MY PROJECT BEFORE DECIDING ON A SYSTEM?",
    answer: "Yes. You can contact ARKGO Solutions to discuss your requirement and project conditions before deciding on the appropriate system configuration."
  }
];

export default function ProjectConsiderationsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden z-0">
      <div className="absolute top-10 left-10 lg:top-20 lg:left-20 text-[200px] md:text-[350px] lg:text-[450px] font-heading font-black text-primary leading-none select-none pointer-events-none -z-10 tracking-tighter opacity-[0.04]" aria-hidden="true">
        06
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-20 lg:mb-32 relative z-10">
          <div className="flex items-center justify-center mb-6 lg:mb-8">
            <span className="w-1 h-5 bg-secondary mr-4 block" />
            <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
              PROJECT CONSIDERATIONS
            </span>
            <div className="w-1 h-5 bg-secondary ml-4 block lg:hidden" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-heading font-extrabold text-primary leading-[1.1] tracking-tight mb-12 lg:mb-16 max-w-4xl">
            EVERY SOLAR PROJECT STARTS WITH THE RIGHT QUESTIONS.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl mb-12">
            {considerations.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col items-center border border-[#DCE3E8] p-6 lg:p-8"
              >
                <span className="text-xl font-heading font-black text-primary/30 mb-3">{item.id}</span>
                <span className="text-sm lg:text-base font-heading font-bold text-primary uppercase tracking-widest text-center">{item.title}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center bg-[#FAF7F0] w-full max-w-5xl p-8 lg:p-10 border border-[#DCE3E8]">
            <div className="flex flex-wrap justify-center items-center gap-y-3 text-xs md:text-sm font-heading font-bold text-primary uppercase tracking-widest text-center mb-6">
              <span>REQUIREMENT</span>
              <span className="text-secondary mx-3 md:mx-4">+</span>
              <span>SITE</span>
              <span className="text-secondary mx-3 md:mx-4">+</span>
              <span>CONFIGURATION</span>
              <span className="text-secondary mx-3 md:mx-4">+</span>
              <span>APPLICATION</span>
            </div>
            
            <ArrowDown className="w-5 h-5 text-secondary mb-6" />
            
            <div className="text-base md:text-lg lg:text-xl font-heading font-black text-secondary uppercase tracking-[0.2em] text-center">
              PROJECT-SPECIFIC SOLUTION
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 flex flex-col pt-4 relative z-10">
            <div className="flex items-center mb-6 lg:mb-8">
              <span className="w-1 h-5 bg-secondary mr-4 block" />
              <span className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">
                FAQ
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-[46px] font-heading font-extrabold text-primary leading-[1.05] tracking-tight mb-6 lg:mb-8">
              QUESTIONS BEFORE YOU START?
            </h3>
            
            <p className="text-base lg:text-lg text-text-primary font-sans leading-relaxed max-w-sm">
              Here are answers to some common questions about ARKGO&apos;s solar services and project requirements.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col w-full relative z-10 pt-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${faq.id}`;
              const triggerId = `faq-trigger-${faq.id}`;
              
              return (
                <div 
                  key={faq.id}
                  className="group relative flex flex-col border-b border-[#DCE3E8]"
                >
                  <button
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-6 md:py-8 flex items-start gap-4 md:gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white group-hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-300 ${isOpen ? "bg-secondary" : "bg-transparent group-hover:bg-[#DCE3E8]"}`} />
                    
                    <span className={`text-xl md:text-2xl font-heading font-black pl-4 tracking-widest transition-colors duration-300 ${isOpen ? "text-secondary" : "text-primary/40 group-hover:text-primary/60"}`}>
                      {faq.id}
                    </span>
                    
                    <span className={`flex-1 text-base md:text-lg font-heading font-bold uppercase tracking-wider leading-relaxed pr-4 transition-colors duration-300 ${isOpen ? "text-[#0a2340]" : "text-primary"}`}>
                      {faq.question}
                    </span>
                    
                    <span className={`shrink-0 mt-1 transition-colors duration-300 ${isOpen ? "text-secondary" : "text-primary/40 group-hover:text-primary"}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  <div 
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-[64px] md:pl-[84px] pr-8 lg:pr-16 text-base md:text-lg text-text-primary font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
