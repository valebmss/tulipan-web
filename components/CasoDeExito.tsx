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
  const prev = () => setCurrent((curr) => (curr - 1 + successCases.length) % successCases.length);
  const caseData = successCases[current];

  // ⏱️ Autoplay
  useEffect(() => {
    const interval = setInterval(next, 8000); // cambia cada 5 segundos
    return () => clearInterval(interval); // limpiar intervalo al desmontar
  }, [successCases.length]);

  return (
    <section id="casos" className="relative z-10 py-20 md:py-28  text-white w-full overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">

        <div className="relative bg-[#111] px-4 py-6 sm:px-8 sm:py-10 rounded-xl shadow-xl overflow-hidden">
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

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prev}
              className="text-cyan-400 hover:text-cyan-200 transition-transform hover:scale-110"
              aria-label="Anterior"
            >
              <FaChevronLeft size={24} />
            </button>
            <span className="text-gray-400 text-sm">
              {current + 1}/{successCases.length}
            </span>
            <button
              onClick={next}
              className="text-cyan-400 hover:text-cyan-200 transition-transform hover:scale-110"
              aria-label="Siguiente"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
