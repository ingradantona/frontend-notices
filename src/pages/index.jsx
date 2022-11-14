import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Header from "../components/header";
import News from "../components/news";
import { DarkTheme, LigthTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Global } from "../styles/global";

export default function Home({ news }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={theme === "ligth" ? LigthTheme : DarkTheme}>
        <Global />
        <Header />
        <News news={news} />
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
      news: data,
    },
  };
};
