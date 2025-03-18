import { useState, useEffect } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const value = null;
  const getInitialValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error) {
      console.error(error);
      return value;
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

  const setItem = (newValue: LocalStorageSetValue) => {
    setSavedValue(newValue);
  };

  const removeItem = () => {
    setSavedValue(null);
    window.localStorage.removeItem(key);
  };

  return [savedValue, { setItem, removeItem }];
};
