"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dynamic from "next/dynamic";
import Link from "next/link";
import HeroCards from "./CardsImage";
import OurTeam from "./ourteam";
import Asesores from "./asesores";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

export default function HomeClient({ dict }: { dict: any }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const amount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const logos = Array.from({ length: 34 }, (_, i) => ({
    src: `/logos/logo-${i + 1}.png`,
    alt: `Logo ${i + 1}`,
  }));

  const cards = dict.cards;
  const fases = dict.fases;
  const razones = dict.razones;

  const centerIndex = 14;

  return (
    <main className="relative min-h-screen w-full items-center justify-center pt-32 md:pt-24 overflow-hidden ">
      <ParticlesBg type="cobweb" bg={true} color="#06b6d4" />
      <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          {dict.hero_title} <br />
          <span className="text-cyan-400">{dict.hero_math}</span>.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          {dict.hero_subtitle}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contacto"
            className="px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400 hover:scale-105 shadow-md hover:shadow-cyan-400/40"
          >
            {dict.cta_1}
          </Link>
          <Link
            href="#contacto"
            className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-full font-semibold transition-all duration-300  hover:scale-105 shadow-md hover:shadow-cyan-400/40"
          >
            {dict.cta_2}
          </Link>
        </div>
      </section>
      <section
        id="sobrenosotros"
        className="relative z-10 py-28  bg-neutral-900 text-white w-full overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
            className="space-y-8"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              {dict.about_title}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              {dict.about_p1}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              {dict.about_p2}
            </motion.p>
          </motion.div>
          <OurTeam dict={dict} />
          <Asesores dict={dict} />
        </div>
      </section>
      <section
        id="capacidad"
        className="relative z-10   bg-neutral-900 text-white w-full"
      >
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-3xl md:text-5xl font-bold mb-4 tracking-tight "
            >
              {dict.nav_quehacemos}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl mt-18 text-gray-200 max-w-2xl mx-auto"
            >
              {dict.impact_title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg  mt-8 sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              {dict.impact_subtitle}
            </motion.p>
          </div>

          <HeroCards dict={dict} />
        </div>
      </section>
      {/* Sección 3: Casos de éxito / Impacto */}
      <section
        id="casos"
        className="relative z-10 py-32 bg-neutral-950 overflow-hidden w-full"
      >
        {/* Fondo decorativo animado sutil */}
        <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none z-0">
          <div className="w-[35rem] h-[35rem] bg-cyan-500/20 rounded-full absolute -top-10 -left-24 mix-blend-lighten" />
          <div className="w-[25rem] h-[25rem] bg-purple-500/20 rounded-full absolute top-52 right-0 mix-blend-lighten" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-20 z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" text-cyan-400 text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            >
              {dict.nav_quehacemos}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              {dict.impact_title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              {dict.impact_subtitle}
            </motion.p>
          </div>

          {/* Cards de casos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                cliente: "Grupo Diana",
                resultado: dict.impact_diana,
                logo: "/logos/logo-diana.png",
              },
              {
                cliente: "Copa Airlines",
                resultado: dict.impact_copa,
                logo: "/logos/copa-airlines-logo.png",
              },
              {
                cliente: "Falabella",
                resultado: dict.impact_falabella,
                logo: "/logos/falabella.svg",
              },
            ].map((caso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(6,182,212,0.2)",
                  borderColor: "rgba(6,182,212,0.5)",
                }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="group bg-neutral-900 border border-white/10 rounded-xl p-6 shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={caso.logo}
                    alt={caso.cliente}
                    className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition"
                  />
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse opacity-60" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {caso.cliente}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {caso.resultado}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0f0f0f] py-24 px-6 md:px-10 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-6 gap-[1px] bg-white/5">
          {logos.map((logo, i) => {
            if (i === centerIndex) {
              return (
                <div
                  key="center-text"
                  className="col-span-3 row-span-3 flex items-center justify-center bg-[#0f0f0f] px-6 py-12"
                >
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-2xl md:text-4xl font-bold text-cyan-400 leading-snug"
                  >
                    Trusted by
                    <br />
                    leading data
                    <br />
                    teams
                  </motion.h2>
                </div>
              );
            }

            return (
              <div
                key={i}
                className="h-20 flex items-center justify-center bg-[#111] px-4 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-6 w-auto opacity-80"
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
