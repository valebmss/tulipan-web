"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  dict: {
    math_to_results: string;
    success_cases: {
      title: string;
      points: string[];
    }[];
  };
};

export default function CasosDeExitoCarousel({ dict }: Props) {
  const [current, setCurrent] = useState(0);
  const successCases = dict.success_cases ?? [];

  if (!successCases.length) return null;

  const next = () => setCurrent((prev) => (prev + 1) % successCases.length);
  const prev = () =>
    setCurrent(
      (curr) => (curr - 1 + successCases.length) % successCases.length
    );
  const caseData = successCases[current];

  // ⏱️ Autoplay
  useEffect(() => {
    const interval = setInterval(next, 8000); // cambia cada 5 segundos
    return () => clearInterval(interval); // limpiar intervalo al desmontar
  }, [successCases.length]);

  return (
    <section
      id="casos"
      className="relative z-10 py-20 md:py-28  text-white w-full overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <div className="relative px-6 py-8 sm:px-10 sm:py-12 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md bg-[#1A1A23]/90 overflow-hidden transition-all duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white">
                {caseData.title}
              </h3>

              <ul className="space-y-3 text-base sm:text-lg text-gray-200 text-left sm:text-center px-1">
                {caseData.points.map((p, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    • {p}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-10 px-4">
            <button
              onClick={prev}
              className="text-cyan-400 hover:text-white transition-all hover:scale-125 p-2 bg-white/5 rounded-full shadow-md"
              aria-label="Anterior"
            >
              <FaChevronLeft size={20} />
            </button>
            <span className="text-gray-400 text-sm font-medium tracking-wide">
              {current + 1} / {successCases.length}
            </span>
            <button
              onClick={next}
              className="text-cyan-400 hover:text-white transition-all hover:scale-125 p-2 bg-white/5 rounded-full shadow-md"
              aria-label="Siguiente"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
