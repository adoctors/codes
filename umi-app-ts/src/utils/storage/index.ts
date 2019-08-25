import localStorageMap from './localStorageMap';

export const getLocalItem = (key: string): any => {
  let result;
  if (localStorage.getItem(key)) result = JSON.parse(localStorage.getItem(key) as string);
  return result;
};

export const setLocalItem = (key: string, item?: any): any => {
  if (!item) {
    return localStorage.removeItem(key);
  }
  return localStorage.setItem(key, JSON.stringify(item));
};

export const clearLocalStorage = (): void => {
  for (let i = 0; i < localStorageMap.length; i += 1) {
    if (localStorageMap[i].clear) setLocalItem(localStorageMap[i].name);
  }
};
