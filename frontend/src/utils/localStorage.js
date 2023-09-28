export const getLocalStorageItem = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (data !== null) {
      const localData = JSON.parse(data);
      return localData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error Retrieving Data: ", error);
    return null;
  }
};

export const setLocalStorageItem = (key, data) => {
  const dataVal = JSON.stringify(data);
  localStorage.setItem(key, dataVal);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
