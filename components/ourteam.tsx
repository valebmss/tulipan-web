"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="equipo" className="text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl mt-18 text-gray-200 max-w-2xl mx-auto"
        >
          {dict.team_title as string}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg mt-8 sm:text-xl text-gray-300 max-w-4xl mx-auto"
        >
          {dict.about_p2 as string}
        </motion.p>
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {team.map((member, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            style={{ backgroundColor: "#1A1A23" }}
          >
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              {descriptions[i] && (
                <p className="mt-2 text-sm text-gray-500 whitespace-pre-line">
                  {descriptions[i]}
                </p>
              )}
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
