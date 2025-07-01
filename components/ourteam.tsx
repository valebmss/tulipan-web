"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";


const team = [
  {
    name: "Santiago Gutiérrez",
    role: "COO / Director of Mathematical Modeling and Optimization",
    linkedin: "https://www.linkedin.com/in/santiago-gutierrez-b12179207/",
  },
  {
    name: "Juan Guillermo Vélez",
    role: "Chief of Data Science and AI",
    linkedin: "https://www.linkedin.com/in/juan-guillermo-v%C3%A9lez-carmona-21b85231/",
  },
  {
    name: "Daniel Serna Buitrago",
    role: "Director of Infrastructure, Computer Vision & IoT",
    linkedin: "https://www.linkedin.com/in/daniel-eduardo-serna-buitrago-4779ab5b/",
  },
  {
    name: "Santiago Rendón",
    role: "CTO / Director of Software Development",
    linkedin: "#",
  },
  {
    name: "Juan Francisco Atuesta",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/jfatuesta/",
  },
];

type Props = {
  dict: {
    [key: string]: string | string[];
  };
};

export default function OurTeam({ dict }: Props) {
  const descriptions = dict.teamdescription as string[];

  return (
  <section id="equipo" className="text-white py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-100"
        >
          {dict.team_title as string}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg mt-6 text-gray-400 max-w-3xl mx-auto"
        >
          {dict.about_p2 as string}
        </motion.p>
      </div>

      <div className="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
  {team.map((member, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="bg-[#1A1A23] rounded-2xl p-8 w-full max-w-[360px] text-center hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-gray-100">{member.name}</h3>
      <p className="text-sm text-cyan-400 mt-1">{member.role}</p>
      <p className="mt-5 text-sm text-gray-400 whitespace-pre-line leading-relaxed text-justify">
        {descriptions[i]}
      </p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 justify-center mt-6 text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
      >
        <FaLinkedin className="text-lg" />
        LinkedIn
      </a>
    </motion.div>
  ))}
</div>

    </section>
  );
}
