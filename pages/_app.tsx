import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../public/static/fonts/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
