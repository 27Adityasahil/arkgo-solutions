"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import LeadForm from "@/components/forms/LeadForm";

export default function QuoteModal() {
  const { isOpen, closeModal, initialData } = useQuoteModal();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      
      {/* Background click listener */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={closeModal}
        aria-label="Close modal"
      />

      {/* Modal Content */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-none shadow-2xl flex flex-col max-h-[95vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto w-full max-h-[95vh] custom-scrollbar p-1">
          <LeadForm initialData={initialData} />
        </div>
      </div>

    </div>
  );
}
