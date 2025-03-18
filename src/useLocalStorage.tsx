import { useState, useEffect } from "react";

export const useLocalStorage = (key: string) => {
  const initialValue: string | null = null;
  const getInitialValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  const [savedValue, setSavedValue] = useState(getInitialValue);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(savedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, savedValue]);

  const setItem = (newValue: string) => {
    setSavedValue(newValue);
  };

  const removeItem = () => {
    setSavedValue(null);
    window.localStorage.removeItem(key);
  };

  return [savedValue, { setItem, removeItem }];
};
