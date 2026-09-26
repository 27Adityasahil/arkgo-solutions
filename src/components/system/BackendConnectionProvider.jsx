"use client";
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const BackendConnectionContext = createContext(null);

export const useBackendConnection = () => {
  const context = useContext(BackendConnectionContext);
  if (!context) {
    throw new Error('useBackendConnection must be used within a BackendConnectionProvider');
  }
  return context;
};

const HEALTH_CHECK_TIMEOUT = 20000;
const MAX_INITIAL_RETRIES = 2;

export default function BackendConnectionProvider({ children }) {
  const [status, setStatus] = useState('CONNECTING');
  const checkPromiseRef = useRef(null);
  const retryCountRef = useRef(0);

  const checkConnection = useCallback(async (isInitial = false) => {
    if (checkPromiseRef.current) {
      await checkPromiseRef.current;
      return;
    }

    setStatus('CONNECTING');

    const doCheck = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), HEALTH_CHECK_TIMEOUT);

      try {
        const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || 'http://localhost:3001';
        const res = await fetch(`${apiUrl}/health`, {
          signal: controller.signal,
          headers: { 'Cache-Control': 'no-cache' }
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json().catch(() => ({}));
          if (data.status === 'ok') {
            return true;
          }
        }
        return false;
      } catch (err) {
        clearTimeout(timeoutId);
        return false;
      }
    };

    checkPromiseRef.current = (async () => {
      let success = await doCheck();

      while (!success && isInitial && retryCountRef.current < MAX_INITIAL_RETRIES) {
        retryCountRef.current++;
        await new Promise(r => setTimeout(r, 2000));
        success = await doCheck();
      }

      if (success) {
        setStatus('CONNECTED');
      } else {
        setStatus('NOT_CONNECTED');
      }

      checkPromiseRef.current = null;
      return success;
    })();

    await checkPromiseRef.current;
  }, []);

  useEffect(() => {
    checkConnection(true);
  }, [checkConnection]);

  // Expose checkConnection if forms want to manually trigger a re-check
  const value = {
    status,
    checkConnection: () => {
      retryCountRef.current = 0;
      return checkConnection(true);
    }
  };

  return (
    <BackendConnectionContext.Provider value={value}>
      {children}
    </BackendConnectionContext.Provider>
  );
}
