"use client";

import { motion } from "framer-motion";

type Props = {
  dict: {
    how_we_do_it_title: string;
    how_we_do_it_steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
};

export default function HowWeDoIt({ dict }: Props) {
  const steps = dict.how_we_do_it_steps;

  return (
    <section className="my-12 py-20 px-6 text-white relative overflow-hidden">


      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative z-10 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-cyan-400 text-black font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 uppercase">{step.title}</h3>
              <p className="text-sm text-gray-300 w-44">{step.description}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 h-1 w-[90%] bg-cyan-500/30 origin-left -translate-x-1/2 md:translate-y-0 md:top-1/2 md:block hidden"
        />
      </div>
    </section>
  );
}
