"use client";

import { useState, useEffect } from "react";
import { submitLead } from "@/lib/api";
import { useBackendConnection } from "@/components/system/BackendConnectionProvider";

export default function LeadForm({ initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: "Residential",
    estimatedCapacity: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error, connecting_backend, not_connected_backend
  const [errorMessage, setErrorMessage] = useState("");
  const { status: backendStatus, checkConnection } = useBackendConnection();

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...(initialData.capacity && { estimatedCapacity: initialData.capacity }),
        ...(initialData.message && { message: initialData.message }),
      }));
      return;
    }

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const capacity = params.get("capacity");
      const message = params.get("message");

      if (capacity || message) {
        setFormData((prev) => ({
          ...prev,
          ...(capacity && { estimatedCapacity: capacity }),
          ...(message && { message: message }),
        }));
      }
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please provide at least your name and phone number.");
      setStatus("error");
      return;
    }

    if (backendStatus === "CONNECTING") {
      setStatus("connecting_backend");
      return;
    }

    if (backendStatus === "NOT_CONNECTED") {
      setStatus("not_connected_backend");
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
      if (error instanceof TypeError) {
        setErrorMessage("Connection interrupted. Please try again.");
      } else {
        setErrorMessage(error.message || "Something went wrong. Please try submitting again.");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#E6F3EA] text-[#0A5C36] p-8 rounded-none text-center border border-[#0A5C36]/20 shadow-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2">Request Received</h3>
        <p>Thank you. Your enquiry has been received. Our solar team will contact you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2 border border-[#0A5C36] text-[#0A5C36] rounded-none font-medium hover:bg-[#0A5C36]/5 transition-colors"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border-4 border-gray-100 p-6 md:p-8 relative">
      {/* Decorative Red Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
      
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-heading font-black text-gray-900 mb-2 uppercase border-b-2 border-secondary pb-3 inline-block">
          Get Your Free Solar Quote
        </h3>
        <p className="text-gray-700 font-sans mt-3 font-medium">
          Fill out the form below and our solar experts will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-sans font-bold text-gray-900 mb-2 uppercase tracking-wider">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 disabled:bg-gray-100"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-sans font-bold text-gray-900 mb-2 uppercase tracking-wider">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 disabled:bg-gray-100"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-sans font-bold text-gray-900 mb-2 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 disabled:bg-gray-100"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-sans font-bold text-gray-900 mb-2 uppercase tracking-wider">
              Location / City
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 disabled:bg-gray-100"
              placeholder="Where are you located?"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="propertyType" className="block text-sm font-sans font-bold text-gray-900 mb-2 uppercase tracking-wider">
              Property Type
            </label>
            <div className="relative">
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none text-gray-900 disabled:bg-gray-100"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Institutional">Institutional</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="estimatedCapacity" className="block text-sm font-sans font-bold text-gray-900 mb-2 uppercase tracking-wider">
              Estimated Capacity (if known)
            </label>
            <input
              type="text"
              id="estimatedCapacity"
              name="estimatedCapacity"
              value={formData.estimatedCapacity}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 disabled:bg-gray-100"
              placeholder="e.g. 3kW, 10kW, 50kW"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-sans font-bold text-gray-900 mb-2 uppercase tracking-wider">
            Requirement Details
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 resize-none disabled:bg-gray-100"
            placeholder="Tell us a bit more about your solar requirements..."
          ></textarea>
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-50 text-red-600 rounded-none border border-red-200 text-sm">
            {errorMessage || "Something went wrong. Please try submitting again."}
          </div>
        )}

        {status === "connecting_backend" && (
          <div className="p-3 bg-blue-50 text-blue-600 rounded-none border border-blue-200 text-sm">
            <p className="font-bold">Connecting to ARKGO...</p>
            <p>Please wait a moment while we connect to our server.</p>
          </div>
        )}

        {status === "not_connected_backend" && (
          <div className="p-3 bg-red-50 text-red-600 rounded-none border border-red-200 text-sm flex flex-col items-start gap-2">
            <div>
              <p className="font-bold">Unable to connect right now.</p>
              <p>We couldn&apos;t connect to the ARKGO server. Please try again in a moment.</p>
            </div>
            <button 
              type="button" 
              onClick={() => { checkConnection(); setStatus('idle'); }}
              className="px-4 py-1.5 bg-red-100 hover:bg-red-200 text-red-800 font-medium text-sm rounded border border-red-300 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary text-white font-sans font-bold text-lg px-8 py-4 hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center uppercase tracking-wide border-2 border-primary shadow-[4px_4px_0px_rgba(255,193,7,1)]"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            "SUBMIT QUOTE REQUEST"
          )}
        </button>
      </form>
    </div>
  );
}
