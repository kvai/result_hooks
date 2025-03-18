import { useEffect } from 'react';

type AddEventListenerOptions = {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};

export const useWindowEvent = (
  type: keyof WindowEventMap, 
  listener: (event: Event) => void, 
  options: AddEventListenerOptions) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}