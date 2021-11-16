import { useState, useEffect } from 'react';

export const useDebounce = (value: string): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 800);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
