import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";


import { IBM_Plex_Sans } from "next/font/google";
const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tulipán",
  description: "Resolvemos los problemas más difíciles con matemáticas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
<body className={`${ibm.variable} bg-black text-white antialiased font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}