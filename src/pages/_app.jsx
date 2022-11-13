import { ThemeProvider } from "styled-components"
import { Global } from "../styles/global"
import { DarkTheme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={DarkTheme}>
    <Component {...pageProps} />
    <Global/>
    </ThemeProvider>
  )
}

export default MyApp
