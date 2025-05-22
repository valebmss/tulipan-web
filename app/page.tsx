"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useEffect, useRef } from "react";

import dynamicImport from "next/dynamic";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



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
        "Asignación de Aviones – Copa Airlines: minimiza cambios y mantenimiento",
        "Tamaño de Lote – Grupo Diana: reduce costos y mejora eficiencia",
        "Optimización de Distribución – Huevos Kikes: -20% en logística"
      ]
    },
    {
      title: "Pronóstico y Planificación de la Demanda",
      content: [
        "Pronóstico de Ventas – Grupo Corona: incluye variables macroeconómicas",
        "Planificación de Inventarios – Retail: automatiza abastecimiento"
      ]
    },
    {
      title: "Personalización y Recomendaciones",
      content: [
        "Promociones Inteligentes – Grupo Diana: personalización por comportamiento",
        "Sistemas de Recomendación: productos relacionados con IA",
        "Análisis de Lealtad – OfficeMax: clustering de clientes"
      ]
    },
    {
      title: "IA Aplicada como SaaS",
      content: [
        "Todos nuestros modelos se despliegan sin servidores en AWS, con mejora continua y soporte. Tú te enfocas en crecer—nosotros nos encargamos de las matemáticas."
      ]
    }
  ];
  return (
    <main className="relative min-h-screen w-full items-center justify-center px-6 pt-32 md:pt-24 overflow-hidden">
      <ParticlesBg type="cobweb" bg={true} color="#06b6d4" />

<section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          IA y Optimización que Impulsan los Negocios. <br />
          <span className="text-cyan-400">con matemáticas</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Desde aerolíneas hasta bienes de consumo, Tulipán ayuda a las empresas a desbloquear eficiencia y crecimiento mediante herramientas personalizadas de optimización, pronóstico e inteligencia artificial.
        </p>
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
       <section id="sobrenosotros" className="relative z-10 py-24 px-6 md:px-20 bg-black text-white w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Quiénes Somos</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Tulipán es un laboratorio de matemáticas aplicadas e inteligencia artificial. Diseñamos modelos a medida y herramientas digitales que aumentan los ingresos, reducen costos y desbloquean nuevas oportunidades en diversas industrias.
              </p>
              <p className="text-lg text-gray-300 mt-6 max-w-4xl mx-auto">
                Nuestro equipo de doctores, ingenieros y desarrolladores trabaja mano a mano con los clientes para desplegar soluciones poderosas en tiempo récord, a menudo en semanas y no años.
              </p>
            </div>
          </div>
        </section>
         <section id="capacidad" className="relative z-10 py-24 px-6 md:px-10 bg-black text-white w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Hecho para la Complejidad. Diseñado para el Impacto.</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Combinamos matemáticas aplicadas, inteligencia artificial e ingeniería avanzada para entregar soluciones personalizadas que generan eficiencia, reducen costos y desbloquean crecimiento.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 z-20 bg-cyan-500 text-black rounded-full p-2 hover:bg-cyan-400 shadow"
              >
                <FaChevronLeft />
              </button>
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 snap-x scroll-smooth px-8 max-w-full hide-scroll-bar"
                style={{ scrollbarWidth: "none" }}
              >
                {cards.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-[300px] md:min-w-[320px] max-w-xs bg-white/5 border border-cyan-600/10 rounded-xl p-6 transition-all duration-300 snap-center hover:scale-105 group cursor-pointer relative"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="absolute inset-0 bg-black/90 rounded-xl opacity-0 group-hover:opacity-100 p-6 transition-opacity duration-300">
                      <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                        {item.content.map((text, j) => (
                          <li key={j}>{text}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 z-20 bg-cyan-500 text-black rounded-full p-2 hover:bg-cyan-400 shadow"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </section>



       

       {/* Sección 3: Casos de éxito / Impacto */}
 <section id="casos" className="relative z-10 py-32 px-6 md:px-0 bg-black overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10 blur-3xl">
          <div className="w-[40rem] h-[40rem] bg-cyan-500 rounded-full absolute -top-10 -left-10 mix-blend-screen animate-pulse" />
          <div className="w-[30rem] h-[30rem] bg-purple-500 rounded-full absolute top-40 right-0 mix-blend-screen animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Impacto real, resultados comprobables</h2>
            <p className="text-lg text-gray-400">Confiado por líderes en distintas industrias para resolver sus retos más complejos.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-stretch justify-center">
            {[{
              cliente: "Grupo Diana",
              resultado: "+20.3% en ventas con rutas dinámicas",
              logo: "/logos/logo-diana.png",
              fondo: ""
            }, {
              cliente: "Copa Airlines",
              resultado: "-20% de tiempo en tierra optimizando colas",
              logo: "/logos/copa-airlines-logo.png",
              fondo: ""
            }, {
              cliente: "Falabella",
              resultado: "Forecast de demanda con IA para optimizar inventario",
              logo: "/logos/falabella.svg",
              fondo: ""
            }].map((caso, i) => (
              <div key={i} className={`group relative ${caso.fondo} border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10 transition-all backdrop-blur-lg w-full`}>                
                <div className="flex flex-col  items-start gap-4 mb-4">
                  <img src={caso.logo} alt={caso.cliente} className="h-10 w-auto opacity-80 group-hover:opacity-100 transition duration-300" />
                  <span className="text-sm uppercase tracking-wider text-gray-400">{caso.cliente}</span>
                </div>
                <p className="text-xl font-semibold text-white leading-snug">{caso.resultado}</p>
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
