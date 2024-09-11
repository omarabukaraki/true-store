import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { productStore } from "./api/productStore";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={productStore}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>;
}
