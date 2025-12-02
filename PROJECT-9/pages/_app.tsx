import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../styles/globals.css'; // Ensure global styles are imported

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ritesh | DevOps Portfolio</title>
        <meta name="description" content="Ritesh's DevOps portfolio showcasing expertise in cloud, CI/CD, and automation." />
        {/* Favicon links from Favicon.io */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Additional sizes */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
