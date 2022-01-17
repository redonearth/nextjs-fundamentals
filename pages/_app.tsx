import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: skyblue;
        }
      `}</style>
    </Layout>
  );
}
