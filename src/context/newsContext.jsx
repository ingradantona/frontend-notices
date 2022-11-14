import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext({});

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  return <NewsContext.Provider value={{news, setNews}}>{children}</NewsContext.Provider>;
};
