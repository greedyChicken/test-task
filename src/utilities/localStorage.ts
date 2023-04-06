const localStorageKey = "colors";

export const saveColorsInLocalStorage = (colors: string[]) =>
  localStorage.setItem(localStorageKey, JSON.stringify(colors));

export const getColorsFromLocalStorage = () => {
  const value = localStorage.getItem(localStorageKey);
  return typeof value === "string" ? JSON.parse(value) : [];
};
