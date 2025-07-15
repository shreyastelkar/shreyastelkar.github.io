import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Shreyas Telkar - Software Engineer and Creative Developer. Specializing in embedded systems, full-stack development, and innovative software solutions."
        />
        <meta
          name="keywords"
          content="software engineer, embedded systems, full-stack development, computer engineering, UCSC"
        />
        <meta name="author" content="Shreyas Telkar" />
        <meta
          property="og:title"
          content="Shreyas Telkar - Software Engineer"
        />
        <meta
          property="og:description"
          content="Innovative Computer Engineer and Software Developer crafting modern solutions for real-world challenges."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shreyastelkar.github.io" />
        <meta property="og:image" content="/profile_pic.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shreyas Telkar - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Innovative Computer Engineer and Software Developer crafting modern solutions for real-world challenges."
        />
        <meta name="twitter:image" content="/profile_pic.jpeg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
