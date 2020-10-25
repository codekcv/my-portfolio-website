import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  "text-primary": "#21242c",
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
