import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <link rel="icon" href="/brand/favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg" />
        <link rel="apple-touch-icon" href="/brand/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
