"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-10 py-4 bg-black/70 backdrop-blur-sm z-50 flex justify-between items-center border-b border-white/10">
<Link href="/" className="flex items-center">
  <img
    src="/logos/Tulipan_Blanco.png" // asegúrate que esté en /public
    alt="Tulipán"
    className="h-8 w-auto"
  />
</Link>

      <nav className="hidden md:flex space-x-6 text-sm text-gray-300">
        <Link href="#quehacemos" className="hover:text-white">Qué hacemos</Link>
        <Link href="#casos" className="hover:text-white">Casos</Link>
        <Link href="#equipo" className="hover:text-white">Equipo</Link>
        <Link href="#contacto" className="hover:text-white">Contacto</Link>
      </nav>
    </header>
  );
}