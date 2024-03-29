import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <ProgressBar
        height="2px"
        color="#00FF00"
        options={{ showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
