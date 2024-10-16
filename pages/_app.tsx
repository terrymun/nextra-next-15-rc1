import './styles.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps<object>) => (
  <main>
    <Component {...pageProps} />
  </main>
);
export default MyApp;
