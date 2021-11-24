//set to local Storage
export const setToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

//get theme from loacal storage
export const getFromLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);

  //if key exists return value
  if (value) return JSON.parse(value);
};
