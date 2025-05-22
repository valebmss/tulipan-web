"use client";
import { useEffect, useState } from "react";
export default function SectionBackground({ index }: { index: number }) {
  const [style, setStyle] = useState("");
  useEffect(() => {
    switch (index) {
      case 1:
        setStyle("bg-gradient-to-br from-cyan-800/10 via-cyan-900/10 to-black");
        break;
      case 2:
        setStyle("bg-gradient-to-br from-purple-900/10 via-black to-black");
        break;
      case 3:
        setStyle("bg-gradient-to-br from-green-900/10 via-black to-black");
        break;
      default:
        setStyle("bg-black");
    }
  }, [index]);
  return (
    <div className={`absolute inset-0 -z-10 transition-all duration-1000 ease-in-out ${style}`} />
  );
}