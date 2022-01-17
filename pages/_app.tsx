import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: skyblue;
        }
      `}</style>
    </>
  );
}