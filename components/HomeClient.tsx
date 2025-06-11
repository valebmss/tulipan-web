"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import HeroCards from "./CardsImage";
import OurTeam from "./ourteam";
import Asesores from "./asesores";
import CasosDeExitoCarousel from "./CasoDeExito";
import HowWeDoIt from "./HowWeDoIt";
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });
import React from "react";

export default function HomeClient({ dict }: { dict: any }) {
  const logos = Array.from({ length: 36 }, (_, i) => ({
    src: `/logos/logo${i + 1}.png`,
    alt: `Logo ${i + 1}`,
  }));

  const centerIndex = 14;

  return (
    <div>
      <main className="relative min-h-screen w-full items-center justify-center pt-32 md:pt-24 overflow-hidden">
        <ParticlesBg type="cobweb" bg={true} color="#06b6d4" />
        <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {dict.hero_title} <br />
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
      </main>
<div className="relative bg-[#14141C] overflow-hidden">
  {/* Capa de textura con transparencia */}
  <div
    className="absolute inset-0 bg-[url('/textura/fondo.png')] bg-repeat bg-top opacity-10 pointer-events-none"
    aria-hidden="true"
  />

      <section
        id="sobrenosotros"
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
              className="text-cyan-400 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight pt-12 "
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
        className="relative z-10    text-white w-full"
      >
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-3xl md:text-5xl font-bold mb-4 tracking-tight "
            >
              {dict.impact_title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg  mt-8 sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              {dict.impact_subtitle}
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-16"
>
  <h3 className="text-cyan-300 text-xl md:text-2xl font-semibold mb-4 tracking-wide uppercase mt-12">
    {dict.saas}
  </h3>
  <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        {dict.saas_description} <br />  {dict.saas_benefits}

  </p>
</motion.div>

          </div>

          <HeroCards dict={dict} />
        </div>
      </section>
      {/* Sección 5: Proceso */}
      <section
        id="proceso"
        className="relative z-10 py-28 text-white w-full overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-3xl md:text-5xl font-bold mb-4 tracking-tight "
            >
              {dict.casos_tittle}
            </motion.h2>
          </div>
        </div>
        <HowWeDoIt dict={dict} />
      </section>
      {/* Sección 4: Casos de éxito / Impacto */}

      <section
        id="casos"
        className="relative z-10 py-28 text-white w-full overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-3xl md:text-5xl font-bold mb-4 tracking-tight "
            >
              {dict.math_to_results}
            </motion.h2>
          </div>
        </div>
        <CasosDeExitoCarousel dict={dict} />
      </section>
      <section
        id="porque_tulipan"
        className="relative z-10 py-28  text-white w-full overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-3xl md:text-5xl font-bold mb-4 tracking-tight "
            >
              {dict.why_tulipan_subtitle}
            </motion.h2>
          </div>
        </div>
        {/* Sección 6 */}

<section className="py-16 px-4 sm:px-6 md:px-10 w-full">
  <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-white/5">
    {logos.map((logo, i) => {
      // Insertar el texto justo donde irían los logos 15-16-18-19
      if (i === 14) {
        return (
          <React.Fragment key="center-text">
            <div className="col-span-2 row-span-2 flex items-center justify-center bg-[#0f0f0f] px-4 py-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center text-base sm:text-xl md:text-2xl font-bold text-white leading-snug"
              >
                Trusted by<br />
                leading data<br />
                teams
              </motion.h2>
            </div>
            {/* Saltarse el espacio de los 3 logos que el texto reemplazó */}
          </React.Fragment>
        );
      }

      // Saltarse los índices 15, 17 y 18 porque los reemplaza el bloque
      if ([15, 17, 18].includes(i)) {
        return null;
      }

      return (
        <div
          key={i}
          className="h-20 sm:h-24 flex items-center justify-center bg-[#111] px-3 sm:px-4 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-10 sm:max-h-12 md:max-h-14 w-auto opacity-80"
          />
        </div>
      );
    })}
  </div>
</section>



      </section>
<section
  id="contacto"
  className="relative z-10 py-28  text-white w-full overflow-hidden"
>
  <div className="relative max-w-4xl mx-auto text-center z-10 px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-cyan-400 text-3xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {dict.contact_us_title}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-lg md:text-xl text-gray-300 mb-6"
    >
      {dict.contact_us_text}
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-lg font-semibold text-white mb-10"
    >
      📧 <a href="mailto:contact@tulipan1637.com" className="underline hover:text-cyan-400">contact@tulipan1637.com</a>
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col md:flex-row gap-4 justify-center items-center"
    >
     <a
  href="https://"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-400 text-gray-100 hover:bg-white hover:text-black px-6 py-3 rounded-lg transition duration-300"
>
  {dict.contact_us_call}
</a>

<a
  href="https://wa.me/573001112233"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-400 text-gray-100 hover:bg-white hover:text-black px-6 py-3 rounded-lg transition duration-300"
>
  {dict.contact_us_whatsapp}
</a>

    </motion.div>
  </div>
</section>


    </div>

    </div>
  );
}
