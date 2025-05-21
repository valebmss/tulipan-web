"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";

import dynamicImport from "next/dynamic";


const ParticlesBg = dynamicImport(() => import("particles-bg"), { ssr: false });



export default function Home() {
  return (
    <main className="relative min-h-screen w-full items-center justify-center px-6 pt-32 md:pt-24 overflow-hidden">
      <ParticlesBg type="cobweb" bg={true} color="#06b6d4" />

<section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Resolvemos los problemas más difíciles <br />
          <span className="text-cyan-400">con matemáticas</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Combinamos IA, modelos matemáticos y software a medida para líderes que enfrentan retos complejos.
        </p>
                <Link href="#contacto" className="px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
          Hablemos
        </Link>
      </section>
 <section id="quehacemos" className="relative z-10 py-24 px-6 md:px-20 bg-black text-white w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">¿Qué hacemos?</h2>

          <p className="text-lg text-gray-300 mb-12 ">
            Ayudamos a empresas e instituciones a resolver desafíos operativos y estratégicos mediante inteligencia artificial, matemáticas aplicadas y software a medida.
          </p>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Modelos de optimización",
              "Forecasting con IA",
              "Software a la medida",
              "Logística de primera y última milla",
              "Modelos estratégicos",
              "Equipos de datos embebidos",
            ].map((cap, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-lg hover:border-cyan-500 transition">
                <p className="text-xl font-medium text-white mb-2">{cap}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="#metodologia" className="text-cyan-400 font-semibold hover:underline">Cómo trabajamos →</Link>
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
