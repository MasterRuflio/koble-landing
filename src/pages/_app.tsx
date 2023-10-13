import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Koble</title>
        <link rel='shortcut icon' href='/images/khoble_magenta_blue.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
