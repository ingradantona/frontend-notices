import { NewsContextProvider } from "../context/newsContext";
import { ThemeContextProvider } from "../context/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <NewsContextProvider>
        <Component {...pageProps} />
      </NewsContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
