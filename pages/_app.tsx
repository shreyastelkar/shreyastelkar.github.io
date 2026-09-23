import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// Geist Sans (Vercel, OFL) — variable weight file, self-hosted.
const geist = localFont({
  src: "../fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geist.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
