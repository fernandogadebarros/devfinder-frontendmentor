import { PageProvider } from 'context/PageContext';
import type { AppProps } from 'next/app';
import { Space_Mono } from 'next/font/google';
import Head from 'next/head';
import 'styles/main.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Devfinder - Challenge Frontmentor</title>
        <meta name="description" content="online challenge using github API" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>

      <PageProvider>
        <main className={spaceMono.className}>
          <Component {...pageProps} />
        </main>
      </PageProvider>
    </>
  );
}
