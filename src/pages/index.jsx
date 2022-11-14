import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import Header from "../components/header";
import News from "../components/news";
import { DarkTheme, LigthTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Global } from "../styles/global";
import { NewsContext } from "../context/newsContext";

export default function Home({ newsData }) {
  const { theme } = useContext(ThemeContext);
  const { setNews } = useContext(NewsContext);

  useEffect(() => {
    setNews(newsData)
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "ligth" ? LigthTheme : DarkTheme}>
        <Global />
        <Header data={newsData}/>
        <News />
      </ThemeProvider>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://noticesjsonserver.herokuapp.com/notices"
  );

  const data = await response.json();

  return {
    props: {
      newsData: data,
    },
  };
};
