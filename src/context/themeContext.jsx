import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = async () => {
    theme === "ligth" ? setTheme("dark") : setTheme("ligth");
  };

  useEffect(() => {
    window.localStorage.setItem("NetNewsTheme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{theme, changeTheme}}>{children}</ThemeContext.Provider>;
};
