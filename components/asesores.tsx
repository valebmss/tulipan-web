"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const team = [
  {
    name: "María Rodríguez",
    role: "CEO & Fundadora",
    img: "/team/maria.jpg",
    linkedin: "#",
  },
  {
    name: "Carlos Pérez",
    role: "CTO & Arquitecto IA",
    img: "/team/carlos.jpg",
    linkedin: "#",
  },
  {
    name: "Laura Gómez",
    role: "Directora de Proyectos",
    img: "/team/laura.jpg",
    linkedin: "#",
  },
  {
    name: "Daniel Ruiz",
    role: "Especialista en Datos",
    img: "/team/daniel.jpg",
    linkedin: "#",
  },
];

type Props = {
  dict: {
    [key: string]: string;
  };
};

export default function Asesores({ dict }: Props) {
  return (
    <section id="equipo" className=" text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
                    <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl mt-18 text-gray-200 max-w-2xl mx-auto"
            >
              {dict.team_advisors_title }
            </motion.h3>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg  mt-8 sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              {dict.team_advisors_description }
            </motion.p>

      </div>


    </section>
  );
}
