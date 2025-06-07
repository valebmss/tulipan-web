"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  const prev = () => setCurrent((prev) => (prev - 1 + successCases.length) % successCases.length);

  const caseData = successCases[current];

  return (
    <section id="casos" className="relative z-10 py-28 bg-neutral-900 text-white w-full overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-cyan-400 text-3xl md:text-5xl font-bold mb-12 tracking-tight"
        >
          {dict.math_to_results}
        </motion.h2>

        <div className="relative bg-[#111] p-8 rounded-xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300">
                {caseData.title}
              </h3>
              <ul className="space-y-3 text-lg text-gray-200">
                {caseData.points.map((p, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
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
            >
              <FaChevronLeft size={24} />
            </button>
            <span className="text-gray-400 text-sm">
              {current + 1}/{successCases.length}
            </span>
            <button
              onClick={next}
              className="text-cyan-400 hover:text-cyan-200 transition-transform hover:scale-110"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}