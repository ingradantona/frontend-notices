import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import HeaderNews from "../components/headerNews";
import MainNews from "../components/mainNews";
import { ThemeContext } from "../context/themeContext";
import { Global } from "../styles/global";
import { DarkTheme, LigthTheme } from "../styles/theme";

export default function News({ news }) {
  const { theme } = useContext(ThemeContext);
  const [seeNews, setSeeNews] = useState(null);

  useEffect(() => {
    const id = window.localStorage.getItem("NetNews");

    const findNews = news.find((element) => element.id == id);

    setSeeNews(findNews);
  }, []);
  
  return (
    <ThemeProvider theme={theme === "ligth" ? LigthTheme : DarkTheme}>
      <Global />
      <HeaderNews />
      {seeNews ? (
        <>
          <MainNews news={seeNews} />
        </>
      ) : (
        <></>
      )}
    </ThemeProvider>
    
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://noticesjsonserver.herokuapp.com/notices"
  );

  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
};
