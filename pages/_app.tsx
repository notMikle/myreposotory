import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {TechDataProvider} from '@/data/techDataContext';

function App({ Component, pageProps }: AppProps) {
  return (
      <TechDataProvider>
        <Component {...pageProps} />
      </TechDataProvider>
  );
}
export default App;