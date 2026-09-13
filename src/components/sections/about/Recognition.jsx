"use client";

import { useState } from "react";
import { recognitions } from "@/data/recognitions";
import { FileText } from "lucide-react";

export default function Recognition() {
  const [activeId, setActiveId] = useState(recognitions[0].id);
  const activeRec = recognitions.find(r => r.id === activeId);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <div className="flex items-center mb-6">
            <span className="w-8 h-1 bg-secondary mr-4 inline-block"></span>
            <span className="text-sm font-heading font-bold text-secondary uppercase tracking-[0.15em]">
              Recognition & Achievements
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight mb-6">
            Recognition That Reflects Our Work.
          </h2>
          
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            ARKGO Solutions&apos; project execution and contribution have received recognition from institutional and district-level stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6 relative w-full aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] bg-[#F8FAFC] border border-gray-200 rounded-none shadow-none p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-none bg-white border border-gray-200 shadow-none flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-heading font-bold text-gray-400 uppercase tracking-widest mb-2">
              DOCUMENT PLACEHOLDER
            </p>
            <h4 className="text-xl font-heading font-bold text-primary mb-4 px-4">
              {activeRec.title}
            </h4>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              Actual certificates and recognition documents will be displayed here when available.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            {recognitions.map((rec) => {
              const isActive = activeId === rec.id;
              
              return (
                <button 
                  key={rec.id}
                  onClick={() => setActiveId(rec.id)}
                  className={`flex flex-col md:flex-row items-start md:items-center text-left p-6 md:p-8 border rounded-none mb-4 transition-all duration-300 ${isActive ? 'bg-white border-primary shadow-none' : 'bg-[#F8FAFC] border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="w-full md:w-24 mb-4 md:mb-0">
                    <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-gray-400'}`}>
                      {rec.number}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-heading font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-gray-500'}`}>
                        {rec.label}
                      </span>
                    </div>
                    <h3 className={`text-lg md:text-xl font-heading font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-700'}`}>
                      {rec.title}
                    </h3>
                    <p className={`text-base leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                      {rec.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
