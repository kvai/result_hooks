import { useEffect, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

const eventOptions = {
  passive: true,
};

export const useViewportSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const getCurrentSize = () => ({
    width: window?.innerWidth ?? 0,
    height: window?.innerHeight ?? 0,
  });

  const setSize = () => {
    setWindowSize(getCurrentSize());
  };

  useWindowEvent("resize", setSize, eventOptions);
  
  useWindowEvent("orientationchange", setSize, eventOptions);
  useEffect(setSize, []);

  return windowSize;
};