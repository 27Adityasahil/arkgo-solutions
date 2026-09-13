"use client";

import { createContext, useContext, useState, useCallback } from "react";

const QuoteModalContext = createContext();

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState(null);

  const openModal = useCallback((data = null) => {
    setInitialData(data);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setInitialData(null), 300); // Clear after animation
  }, []);

  return (
    <QuoteModalContext.Provider value={{ isOpen, initialData, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
