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

  return (
    <main className="relative min-h-screen w-full items-center justify-center px-6 pt-32 md:pt-24 overflow-hidden ">
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
        className="relative z-10 py-28 px-6 md:px-20b bg-neutral-900 text-white w-full overflow-hidden"
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
        className="relative z-10 py-32 px-6 md:px-10 bg-neutral-900 text-white w-full"
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
                  className="min-w-full md:min-w-[50%] max-w-[600px] bg-gradient-to-br from-black/70 to-cyan-900/10 border border-cyan-400/10 rounded-3xl p-8 shadow-2xl snap-center group relative cursor-pointer"
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
        className="relative z-10 py-32 px-6 md:px-0 bg-neutral-900 overflow-hidden w-full"
      >
        <div className="absolute inset-0 opacity-10 blur-3xl">
          <div className="w-[40rem] h-[40rem] bg-cyan-500 rounded-full absolute -top-10 -left-10 mix-blend-screen animate-pulse" />
          <div className="w-[30rem] h-[30rem] bg-purple-500 rounded-full absolute top-40 right-0 mix-blend-screen animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Impacto real, resultados comprobables
            </h2>
            <p className="text-lg text-gray-400">
              Confiado por líderes en distintas industrias para resolver sus
              retos más complejos.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-stretch justify-center">
            {[
              {
                cliente: "Grupo Diana",
                resultado: "+20.3% en ventas con rutas dinámicas",
                logo: "/logos/logo-diana.png",
                fondo: "",
              },
              {
                cliente: "Copa Airlines",
                resultado: "-20% de tiempo en tierra optimizando colas",
                logo: "/logos/copa-airlines-logo.png",
                fondo: "",
              },
              {
                cliente: "Falabella",
                resultado:
                  "Forecast de demanda con IA para optimizar inventario",
                logo: "/logos/falabella.svg",
                fondo: "",
              },
            ].map((caso, i) => (
              <div
                key={i}
                className={`group relative ${caso.fondo} border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10 transition-all backdrop-blur-lg w-full`}
              >
                <div className="flex flex-col  items-start gap-4 mb-4">
                  <img
                    src={caso.logo}
                    alt={caso.cliente}
                    className="h-10 w-auto opacity-80 group-hover:opacity-100 transition duration-300"
                  />
                  <span className="text-sm uppercase tracking-wider text-gray-400">
                    {caso.cliente}
                  </span>
                </div>
                <p className="text-xl font-semibold text-white leading-snug">
                  {caso.resultado}
                </p>
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="metodologia"
        className="relative z-10 py-32 px-6 md:px-10 bg-neutral-900 text-white w-full"
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
              De los Datos al Despliegue en Cuestión de Semanas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Nuestro proceso está diseñado para entregar impacto tangible
              rápidamente.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {fases.map((fase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {fase.title}
                </h3>
                <p className="text-gray-300 text-sm">{fase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="diferenciales"
        className="relative z-10 py-32 px-6 md:px-10 bg-black text-white w-full"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight"
          >
            Por Qué los Líderes de la Industria Trabajan con Tulipán
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {razones.map((razon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:border-cyan-500 transition"
              >
                <p className="text-lg text-gray-300">{razon}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
