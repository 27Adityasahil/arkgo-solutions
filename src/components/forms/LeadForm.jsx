"use client";

import { useState } from "react";
import { submitLead } from "@/lib/api";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: "Residential",
    estimatedCapacity: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please provide at least your name and phone number.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    
    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        location: formData.location.trim() || undefined,
        propertyType: formData.propertyType || undefined,
        estimatedCapacity: formData.estimatedCapacity.trim() || undefined,
        requirement: formData.message.trim() || undefined,
      };

      await submitLead(payload);
      
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        propertyType: "Residential",
        estimatedCapacity: "",
        message: "",
      });
    } catch (error) {
      console.error("Lead submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try submitting again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#E6F3EA] text-[#0A5C36] p-8 rounded-lg text-center border border-[#0A5C36]/20 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2">Request Received</h3>
        <p>Thank you. Your enquiry has been received. Our solar team will contact you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2 border border-[#0A5C36] text-[#0A5C36] rounded-md font-medium hover:bg-[#0A5C36]/5 transition-colors"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#073B73] mb-2">Tell Us About Your Solar Requirement</h3>
        <p className="text-gray-600 text-sm">Fill out the form below and we&apos;ll get back to you with a customized solar solution.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2B632] focus:border-transparent transition-all disabled:bg-gray-50"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2B632] focus:border-transparent transition-all disabled:bg-gray-50"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2B632] focus:border-transparent transition-all disabled:bg-gray-50"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location / City</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2B632] focus:border-transparent transition-all disabled:bg-gray-50"
              placeholder="Where are you located?"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2B632] focus:border-transparent transition-all bg-white disabled:bg-gray-50"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Institutional">Institutional</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Capacity (if known)</label>
            <input
              type="text"
              name="estimatedCapacity"
              value={formData.estimatedCapacity}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2B632] focus:border-transparent transition-all disabled:bg-gray-50"
              placeholder="e.g. 3kW, 10kW, 50kW"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Requirement Details</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2B632] focus:border-transparent transition-all resize-none disabled:bg-gray-50"
            placeholder="Tell us a bit more about your solar requirements..."
          ></textarea>
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-50 text-red-600 rounded border border-red-200 text-sm">
            {errorMessage || "Something went wrong. Please try submitting again."}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 px-6 bg-[#073B73] text-white font-bold tracking-wider uppercase rounded-md hover:bg-[#062c56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#073B73] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Get My Solar Quote"
          )}
        </button>
      </form>
    </div>
  );
}
