"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Props = {
  dict: {
    how_we_do_it_title: string;
    how_we_do_it_steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
};

export default function HowWeDoIt({ dict }: Props) {
  const steps = dict.how_we_do_it_steps;
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineLength, setLineLength] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setLineLength({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="my-12 py-20 px-6 text-white relative overflow-hidden">
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-16"
      >
        {/* Línea horizontal para escritorio */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute hidden md:block top-[30px] left-0 right-0 h-1 bg-cyan-500/30 z-0"
        />

        {/* Luz animada horizontal escritorio */}
        <motion.div
          animate={{ x: [0, lineLength.width] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute hidden md:block top-[30px] h-1 w-24 bg-cyan-300 blur-md opacity-70 z-10"
        />

        {/* Línea vertical para móvil */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute md:hidden left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-cyan-500/30 z-0"
        />

        {/* Luz vertical móvil */}
        <motion.div
          animate={{ y: [0, lineLength.height] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute md:hidden left-1/2 -translate-x-1/2 top-0 w-1 h-24 bg-cyan-300 blur-md opacity-70 z-10"
        />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative z-20 group w-full md:w-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-cyan-400 text-black font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 uppercase">{step.title}</h3>
              <p className="text-sm text-gray-300 max-w-xs px-2">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
