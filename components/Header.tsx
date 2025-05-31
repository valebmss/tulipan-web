"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

interface HeaderProps {
  dict: {
    nav_quehacemos: string;
    nav_casos: string;
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
            <img src="/logos/Tulipann.png" alt="Tulipán" className="h-10 w-auto" />
          </Link>
          {/* Language switcher visible SOLO en móviles */}
          <div className="md:hidden ml-10">{LanguageSwitcher}</div>
        </div>

        {/* Botón hamburguesa en móviles */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menú + Language switcher en escritorio */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          <Link href="#quehacemos" className="hover:text-white">{dict.nav_quehacemos}</Link>
          <Link href="#casos" className="hover:text-white">{dict.nav_casos}</Link>
          <Link href="#equipo" className="hover:text-white">{dict.nav_equipo}</Link>
          <Link href="#contacto" className="hover:text-white">{dict.nav_contacto}</Link>
          {/* Language visible solo en desktop */}
          <div className="ml-2">{LanguageSwitcher}</div>
        </div>
      </div>

      {/* Menú colapsable solo en móviles */}
      <nav
        className={`md:hidden flex-col absolute top-20 left-0 w-full bg-black/90 px-6 py-4 space-y-4 text-sm text-gray-300 transition-all duration-300 z-40 ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        <Link href="#quehacemos" onClick={() => setMenuOpen(false)}>{dict.nav_quehacemos}</Link>
        <Link href="#casos" onClick={() => setMenuOpen(false)}>{dict.nav_casos}</Link>
        <Link href="#equipo" onClick={() => setMenuOpen(false)}>{dict.nav_equipo}</Link>
        <Link href="#contacto" onClick={() => setMenuOpen(false)}>{dict.nav_contacto}</Link>
      </nav>
    </header>
  );
}
