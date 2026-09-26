"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, Zap, Sun, CheckCircle, ArrowRight } from "lucide-react";
import { calculateRecommendedKW, calculateEstimatedBill, calculateRecommendedProject } from "@/lib/solarCalculator";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

export default function SolarCalculator() {
  const { openModal } = useQuoteModal();
  const [consumption, setConsumption] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (e) => {
    e?.preventDefault();
    
    const units = parseFloat(consumption);
    
    if (isNaN(units) || units <= 0) {
      setError("Please enter a valid positive number.");
      setResults(null);
      return;
    }
    
    if (units > 100000) {
      setError("Value too large. Please contact us for custom industrial sizing.");
      setResults(null);
      return;
    }

    setError("");

    const estimatedBill = calculateEstimatedBill(units);
    const recommendedKW = calculateRecommendedKW(units);
    const recommendedProject = calculateRecommendedProject(units);
    
    setResults({
      bill: estimatedBill.toLocaleString("en-IN"),
      kw: recommendedKW === "Custom" ? "Custom" : Number(recommendedKW).toFixed(1),
      project: recommendedProject,
      units: units
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[800px]">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-sans font-bold text-gray-800 tracking-widest uppercase mb-3 bg-white px-3 py-1 border border-gray-900 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Solar Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-4 uppercase">
            Discover Your Solar Potential
          </h2>
          <p className="text-lg text-gray-800 font-sans leading-relaxed max-w-xl mx-auto font-medium">
            Enter your monthly electricity consumption to instantly get the recommended solar system size for your property.
          </p>
        </div>

        {/* Centered Form Card */}
        <div className="bg-white rounded-none border-2 border-gray-900 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] p-8 md:p-10 w-full">
            <div className="mb-8">
              <label htmlFor="consumptionInput" className="block text-sm font-sans font-medium text-gray-700 mb-3">
                Monthly Electricity Consumption
              </label>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    id="consumptionInput"
                    type="number"
                    min="1"
                    placeholder="e.g. 300"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-4 pr-16 py-3.5 bg-gray-50 border border-gray-300 rounded text-lg font-medium text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none">
                    Units
                  </div>
                </div>
                
                <button 
                  onClick={handleCalculate}
                  className="bg-primary text-white px-8 py-3.5 rounded-none font-sans font-bold transition-colors hover:bg-primary-dark whitespace-nowrap uppercase tracking-wide border-2 border-primary"
                >
                  CALCULATE
                </button>
              </div>
              
              {error && (
                <p className="mt-3 text-sm text-red-500">{error}</p>
              )}
            </div>

            {results && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-center mb-8">
                  <span className="text-xs md:text-sm font-sans font-bold text-gray-500 uppercase tracking-widest block mb-3">Your Solar Recommendation</span>
                  <div className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-3">{results.project}</div>
                  <p className="text-gray-600 font-sans">Best-fit project based on your estimated monthly electricity consumption.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8 border-y border-gray-100 py-6">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-sm font-sans font-medium text-gray-500 mb-1">Recommended Capacity</div>
                    <div className="text-xl font-sans font-bold text-gray-900">{results.kw === "Custom" ? "Custom Size" : `${results.kw} kW`}</div>
                  </div>

                  <div className="hidden sm:block w-px h-12 bg-gray-200"></div>

                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-sm font-sans font-medium text-gray-500 mb-1">Estimated Monthly Bill</div>
                    <div className="text-xl font-sans font-bold text-gray-900">₹{results.bill}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => openModal({
                      capacity: `${results.kw}kW`,
                      message: `I consume ${results.units} units of electricity monthly. My estimated bill is ₹${results.bill}. Please contact me regarding a ${results.project}.`
                    })}
                    className="inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-none font-sans font-bold hover:bg-primary-dark transition-colors cursor-pointer uppercase tracking-wide border-2 border-primary"
                  >
                    CONTACT FOR SOLAR PROJECT
                  </button>
                </div>
                
                <div className="mt-8 text-xs text-gray-500 text-center max-w-xl mx-auto leading-relaxed">
                  This is an indicative recommendation based on your monthly electricity consumption. Final system capacity and project configuration will be confirmed after site assessment.
                </div>
              </div>
            )}
            
          </div>
      </div>
    </section>
  );
}
