import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header/Header";
import store from "@/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      {router.pathname !== "/rooms/payment" && <Header />}
      <Component {...pageProps} />
    </Provider>
  );
}
