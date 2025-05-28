"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useEffect, useRef } from "react";

import dynamicImport from "next/dynamic";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ParticlesBg = dynamicImport(() => import("particles-bg"), { ssr: false });

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const amount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const logos = Array.from({ length: 34 }, (_, i) => ({
    src: `/logos/logo-${i + 1}.png`, // ejemplo: /public/logos/logo-1.png, etc.
    alt: `Logo ${i + 1}`,
  }));

  const cards = [
    {
      title: "Modelos de Optimización",
      content: [
        "Resolvemos problemas reales con técnicas de optimización de última generación.",
        "Asignación de Aviones – Copa Airlines (Aviación): Asignamos aeronaves minimizando cambios, retrasos e impacto en mantenimiento.",
        "Tamaño de Lote – Grupo Diana (CPG / Manufactura): Minimiza costos de producción y maximiza eficiencia.",
        "Optimización de Distribución – Huevos Kikes (Logística): Diseño de rutas que reduce costos logísticos en más del 20%.",
      ],
    },
    {
      title: "Pronóstico y Planificación de la Demanda",
      content: [
        "Modelos personalizados de series de tiempo que predicen tendencias a corto, mediano y largo plazo.",
        "Pronóstico de Ventas – Grupo Corona (Retail): Incluye variables macroeconómicas como PIB y tipo de cambio.",
        "Planificación de Inventarios – Cadenas Retail: Predice consumo y automatiza el abastecimiento.",
      ],
    },
    {
      title: "Personalización y Recomendaciones",
      content: [
        "IA que impulsa la lealtad, incrementa el ticket promedio y profundiza el conocimiento del cliente.",
        "Promociones Inteligentes – Grupo Diana: Ofertas personalizadas según el comportamiento del cliente.",
        "Sistemas de Recomendación: Sugiere productos no comprados mediante grafos e IA.",
        "Análisis de Lealtad – OfficeMax: Clustering conductual para mejorar retención.",
      ],
    },
    {
      title: "IA Aplicada como SaaS",
      content: [
        "Todos nuestros modelos se despliegan sin servidores en AWS, con mejora continua y soporte. Tú te enfocas en crecer—nosotros nos encargamos de las matemáticas.",
      ],
    },
  ];

  const fases = [
    {
      title: "Descubrimiento",
      description:
        "Nos sumergimos en tu operación para detectar oportunidades de alto impacto.",
    },
    {
      title: "MVP en Semanas",
      description:
        "Construimos un prototipo funcional rápidamente, mostrando ROI real.",
    },
    {
      title: "Despliegue y Escalamiento",
      description:
        "Desde piloto hasta implementación completa, con soporte continuo.",
    },
    {
      title: "Modelo SaaS",
      description:
        "Sin inversiones iniciales. Pago mensual o modelo de shared gains. Todos los despliegues son serverless y cloud-native por defecto.",
    },
  ];

  const razones = [
    "Equipo de matemáticos, ingenieros y desarrolladores",
    "Modelos 100% personalizados — nada prefabricado",
    "Historial probado en diversas industrias",
    "La propiedad intelectual permanece con nosotros — SaaS con mejoras y soporte",
    "Nos movemos rápido y nos encantan los retos complejos",
  ];
  const centerIndex = 14; // donde se insertará el bloque de texto

  return (
    <main className="relative min-h-screen w-full items-center justify-center pt-32 md:pt-24 overflow-hidden ">
      <ParticlesBg type="cobweb" bg={true} color="#06b6d4" />
      <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          IA y Optimización que Impulsan los Negocios. <br />
          <span className="text-cyan-400">con matemáticas</span>.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          Desde aerolíneas hasta bienes de consumo, Tulipán ayuda a las empresas
          a desbloquear eficiencia y crecimiento mediante herramientas
          personalizadas de optimización, pronóstico e inteligencia artificial.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contacto"
            className="px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400 hover:scale-105 shadow-md hover:shadow-cyan-400/40"
          >
            Trabajemos juntos
          </Link>
          <Link
            href="#contacto"
            className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-full font-semibold transition-all duration-300  hover:scale-105 shadow-md hover:shadow-cyan-400/40"
          >
            Ver nuestro trabajo
          </Link>
        </div>
      </section>
      <section
        id="sobrenosotros"
        className="relative z-10 py-28  bg-neutral-900 text-white w-full overflow-hidden"
      >
        {/* Fondo decorativo suave */}
        <div className="absolute inset-0 z-0 opacity-10 blur-3xl">
          <div className="w-[35rem] h-[35rem] bg-cyan-500/30 rounded-full absolute -top-10 -left-20 mix-blend-lighten animate-pulse" />
          <div className="w-[30rem] h-[30rem] bg-purple-500/30 rounded-full absolute top-40 -right-10 mix-blend-lighten animate-pulse" />
        </div>

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
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Quiénes Somos
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Tulipán es un laboratorio de matemáticas aplicadas e inteligencia
              artificial. Diseñamos modelos a medida y herramientas digitales
              que aumentan los ingresos, reducen costos y desbloquean nuevas
              oportunidades en diversas industrias.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Nuestro equipo de doctores, ingenieros y desarrolladores trabaja
              mano a mano con los clientes para desplegar soluciones poderosas
              en tiempo récord, a menudo en semanas y no años.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section
        id="capacidad"
        className="relative z-10 py-32  bg-neutral-900 text-white w-full"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight"
            >
              Hecho para la Complejidad. Diseñado para el Impacto.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Combinamos matemáticas aplicadas, inteligencia artificial e
              ingeniería avanzada para entregar soluciones personalizadas que
              generan eficiencia, reducen costos y desbloquean crecimiento.
            </motion.p>
          </div>
          <div className="relative flex items-center justify-center">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 z-20 bg-black border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 p-2 rounded-xl shadow-lg"
            >
              <FaChevronLeft size={22} />
            </button>
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth px-4 md:px-10 hide-scroll-bar"
              style={{ scrollbarWidth: "none" }}
            >
              {cards.map((item, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ borderRadius: "1.5rem" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="min-w-full md:min-w-[50%] max-w-[600px]  border border-cyan-400/10 rounded-3xl p-8 shadow-2xl snap-center group relative cursor-pointer"
                >
                  <div className="z-30 relative">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-4"
                  >
                    <ul className="text-base text-gray-300 space-y-2 list-disc list-inside z-10">
                      {item.content.map((text, j) => (
                        <li key={j}>{text}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 z-20 bg-neutral-900 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 p-2 rounded-xl shadow-lg"
            >
              <FaChevronRight size={22} />
            </button>
          </div>
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
              className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white"
            >
              Impacto real, resultados comprobables
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Organizaciones líderes nos confían la solución de sus desafíos más
              ambiciosos.
            </motion.p>
          </div>

          {/* Cards de casos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                cliente: "Grupo Diana",
                resultado: "+20.3% en ventas con rutas dinámicas",
                logo: "/logos/logo-diana.png",
              },
              {
                cliente: "Copa Airlines",
                resultado: "-20% de tiempo en tierra optimizando colas",
                logo: "/logos/copa-airlines-logo.png",
              },
              {
                cliente: "Falabella",
                resultado:
                  "Forecast de demanda con IA para optimizar inventario",
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
                  Trusted by<br />
                  leading data<br />
                  teams
                </motion.h2>
              </div>
            );
          }

          return (
            <div
              key={i}
              className="h-20 flex items-center justify-center bg-[#111] px-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-6 w-auto opacity-80 hover:opacity-100 transition duration-200"
              />
            </div>
          );
        })}
      </div>
    </section>
    </main>
  );
}
