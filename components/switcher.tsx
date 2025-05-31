'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Switcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.split('/')[1] as 'es' | 'en';
  const newLang = currentLang === 'es' ? 'en' : 'es';
  const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);

  return (
    <button
      onClick={() => router.push(newPath)}
      className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition"
    >
      {newLang === 'es' ? 'Español' : 'English'}
    </button>
  );
}
