import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tulipán",
  description: "Resolvemos los problemas más difíciles con matemáticas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-black text-white antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
