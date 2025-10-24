import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${playfair.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
