export const getStorageItem = (name: string): any => {
  const storedData = localStorage.getItem(`${name}`) || '';
  return storedData ? JSON.parse(storedData) : null;
};

export const setStorageItem = (name: string, value: any): void =>
  localStorage.setItem(`${name}`, JSON.stringify(value));

export const removeStorageItem = (name: string): void =>
  localStorage.removeItem(`${name}`);
