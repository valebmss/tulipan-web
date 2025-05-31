"use client";

import Link from "next/link";

interface HeaderProps {
  dict: {
    nav_quehacemos: string;
    nav_casos: string;
    nav_equipo: string;
    nav_contacto: string;
  };
}

export default function Header({ dict }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-10 py-4 bg-black/70 backdrop-blur-sm z-50 flex justify-between items-center border-b border-white/10">
      <Link href="/" className="flex items-center">
        <img
          src="/logos/Tulipann.png"
          alt="Tulipán"
          className="h-18 w-auto"
        />
      </Link>

      <nav className="hidden md:flex space-x-6 text-sm text-gray-300">
        <Link href="#quehacemos" className="hover:text-white">{dict.nav_quehacemos}</Link>
        <Link href="#casos" className="hover:text-white">{dict.nav_casos}</Link>
        <Link href="#equipo" className="hover:text-white">{dict.nav_equipo}</Link>
        <Link href="#contacto" className="hover:text-white">{dict.nav_contacto}</Link>
      </nav>
    </header>
  );
}
