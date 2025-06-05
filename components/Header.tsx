"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

interface HeaderProps {
  dict: {
    nav_quienes: string;
    nav_quehacemos: string;
    nav_como: string;
    nav_casos: string;
    nav_porque: string;
    nav_equipo: string;
    nav_contacto: string;
  };
}

export default function Header({ dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentLang = useMemo(() => {
    if (pathname.startsWith("/en")) return "en";
    return "es";
  }, [pathname]);

  const alternateLang = currentLang === "es" ? "en" : "es";
  const newPath = pathname.replace(/^\/(es|en)/, `/${alternateLang}`);

  const LanguageSwitcher = (
    <Link
      href={newPath}
      className="flex items-center bg-gray-800/70 hover:bg-gray-700 px-2 py-1 rounded-full transition-all duration-300 border border-white/10"
    >
      <img src="/icons/flags/es.svg" alt="Español" className="w-5 h-5" />
      <div className="relative w-10 h-5 bg-gray-600 rounded-full mx-2">
        <div
          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
            currentLang === "es" ? "left-1" : "left-[calc(100%-1.25rem)]"
          }`}
        />
      </div>
      <img src="/icons/flags/us.svg" alt="English" className="w-5 h-5" />
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-10 py-4 bg-black/70 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="flex justify-between items-center w-full">
        {/* Logo + Language (Mobile Only) */}
        <div className="flex items-center gap-4">
          <Link href={`/${currentLang}`} className="flex items-center">
            <img
              src="/logos/Tulipann.png"
              alt="Tulipán"
              className=" h-12 w-auto"
            />
          </Link>
          {/* Language switcher visible SOLO en móviles */}
          <div className="md:hidden ml-10">{LanguageSwitcher}</div>
        </div>

        {/* Botón hamburguesa en móviles */}
        <button
          className="md:hidden text-white text-2xl h-12 w-12 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú + Language switcher en escritorio */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          <Link href="sobrenosotros" className="hover:text-white">
            {dict.nav_quienes}
          </Link>
          <Link href="#capacidad" className="hover:text-white">
            {dict.nav_quehacemos}
          </Link>
          <Link href="#casos" className="hover:text-white">
            {dict.nav_como}
          </Link>
          <Link href="#proceso" className="hover:text-white">
            {dict.nav_casos}
          </Link>
          <Link href="#porque_tulipan" className="hover:text-white">
            {dict.nav_porque}
          </Link>
          <Link href="#contacto" className="hover:text-white">
            {dict.nav_contacto}
          </Link>
          {/* Language visible solo en desktop */}
          <div className="ml-2">{LanguageSwitcher}</div>
        </div>
      </div>

      {/* Menú colapsable solo en móviles */}
      <nav
        className={`md:hidden flex-col absolute left-0 w-full bg-black/90 px-6 py-4 space-y-4 text-sm text-gray-300 transition-all duration-300 z-40 ${
          menuOpen ? "flex animate-fade-in-down" : "hidden"
        }`}
      >
        {[
          { href: "#quehacemos", label: dict.nav_quienes },
          { href: "#quehacemos", label: dict.nav_quehacemos },
          { href: "#como", label: dict.nav_como },
          { href: "#casos", label: dict.nav_casos },
          { href: "#porque", label: dict.nav_porque },
          { href: "#contacto", label: dict.nav_contacto },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:pl-6 hover:text-cyan-400"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
