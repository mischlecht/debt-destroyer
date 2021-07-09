import type { AppProps } from "next/app";
import AppLayout from "../components/Layout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
export default MyApp;
