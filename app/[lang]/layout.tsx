import "../globals.css";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getDictionary } from '@/lib/dictionary';


export const metadata: Metadata = {
  title: "Tulipán",
  description: "Resolvemos los problemas más difíciles con matemáticas.",
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: 'es' | 'en' } }) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className="bg-black text-white antialiased font-sans">
<Header
  dict={{
    nav_quehacemos: dict.nav_quehacemos,
    nav_casos: dict.nav_casos,
    nav_equipo: dict.nav_equipo,
    nav_contacto: dict.nav_contacto
  }}
/>
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
