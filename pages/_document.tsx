import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Shreyas Telkar — full stack &amp; data engineer at Altimate AI."
        />
        <meta
          name="keywords"
          content="software engineer, data infrastructure, AI agents, full-stack development, Snowflake, Databricks, computer engineering"
        />
        <meta name="author" content="Shreyas Telkar" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="og:title"
          content="Shreyas Telkar — Software Engineer"
        />
        <meta
          property="og:description"
          content="Software Engineer at Altimate AI building AI-powered data infrastructure. Full-stack, data platforms, and mobile."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shreyastelkar.github.io" />
        <meta property="og:image" content="/profile_pic.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shreyas Telkar — Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Software Engineer at Altimate AI building AI-powered data infrastructure."
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
