import { AppProps } from "next/app";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

const theme = {
  "text-primary": { light: "#ffffffd6", dark: "#21242c" },
  background: {
    dark: "#21242c",
  },
};

const themeType = { theme };

type ThemeType = typeof themeType;

const GlobalStyles = createGlobalStyle(
  ({ theme }: ThemeType) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      background: ${theme.background.dark};
    }

    a {
      /* color: inherit; */
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
