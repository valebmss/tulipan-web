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

export default function OurTeam({ dict }: Props) {
  return (
    <section id="equipo" className=" text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
                    <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl mt-18 text-gray-200 max-w-2xl mx-auto"
            >
              {dict.team_title }
            </motion.h3>

      </div>

<div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
<div className="flex justify-center mt-6">
  <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-cyan-400 shadow-md">
    <Image
      src={member.img}
      alt={member.name}
      fill
      className="object-cover"
    />
  </div>
</div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-cyan-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
