export const saveToLS = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLS = function (key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};
