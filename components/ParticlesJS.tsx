"use client";

import { useEffect } from "react";
// @ts-ignore

import particlesJS from "particles.js";

export default function ParticlesJS() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      particlesJS("particles-js", {
        // Puedes pegar aquí directamente uno de tus objetos JSON
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 5, random: true },
          line_linked: {
            enable: true,
            distance: 220,
            color: "#6da5b8",
            opacity: 0.6,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            out_mode: "bounce",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              size: 25,
              duration: 0.3,
              opacity: 0.8,
              speed: 3,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 -z-10 w-full h-full"
    />
  );
}
