import { ReactNode } from "react";
import "../globals.css";
import { getDictionary } from "@/lib/dictionary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tulipan 1637",
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string }; // usa string y haces cast luego
}) {
  const lang = params.lang as "es" | "en";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <Header dict={dict} />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
