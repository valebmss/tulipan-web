"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface HeaderProps {
  dict: {
    nav_quehacemos: string;
    nav_casos: string;
    nav_equipo: string;
    nav_contacto: string;
  };
}

export default function Header({ dict }: HeaderProps) {
  const pathname = usePathname();

  const currentLang = useMemo(() => {
    if (pathname.startsWith("/en")) return "en";
    return "es";
  }, [pathname]);

  const alternateLang = currentLang === "es" ? "en" : "es";
  const newPath = pathname.replace(/^\/(es|en)/, `/${alternateLang}`);

  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-10 py-4 bg-black/70 backdrop-blur-sm z-50 flex justify-between items-center border-b border-white/10">
      <Link href={`/${currentLang}`} className="flex items-center">
        <img src="/logos/Tulipann.png" alt="Tulipán" className="h-18 w-auto" />
      </Link>

      <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
        <Link href="#quehacemos" className="hover:text-white">{dict.nav_quehacemos}</Link>
        <Link href="#casos" className="hover:text-white">{dict.nav_casos}</Link>
        <Link href="#equipo" className="hover:text-white">{dict.nav_equipo}</Link>
        <Link href="#contacto" className="hover:text-white">{dict.nav_contacto}</Link>

        {/* Switch de idioma con imágenes */}
        <Link
          href={newPath}
          className="ml-6 relative flex items-center bg-gray-800/70 hover:bg-gray-700 px-2 py-1 rounded-full transition-all duration-300 border border-white/10"
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
      </nav>
    </header>
  );
}
