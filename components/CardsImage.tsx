"use client";

import { Box, Paper, useMediaQuery } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

type Card = {
  title: string;
  content: string[];
};

type Props = {
  dict: {
    impact_title: string;
    cards: Card[];
  };
};

const imagePaths = [
  "/cards/1.png",
  "/cards/2.png",
  "/cards/3.png",
];

export default function HeroCards({ dict }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    
    <Box sx={{ width: "100%", px: { xs: 2, sm: 4 }, py: 8, bgcolor: "transparent" }}>
      
      
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={2}>
        {dict.cards.map((card, i) => (

<motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <motion.div
    whileHover={!isMobile ? { scale: 1.03 } : {}}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <Paper
      elevation={3}
sx={{
  bgcolor: "#1A1A23", // tono oscuro ligeramente más claro que el fondo
  p: 3,
  borderRadius: 2,
  color: "white",
  display: "flex",
  flexDirection: "column",
  gap: 1,
  mt: i % 2 === 0 ? 0 : 6,
  pb: [1, 3].includes(i) ? 8 : 3,
  border: "1px solid rgba(255, 255, 255, 0.05)", // sutil borde
  backdropFilter: "blur(2px)", // efecto glass muy suave
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
    bgcolor: "#20202c", // un poco más claro al hacer hover
  },
}}

    >
      <img
        src={imagePaths[i]}
        alt={card.title}
        style={{
          width: "100%",
          height: isMobile ? "180px" : [1, 3].includes(i) ? "320px" : "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      />

      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 mt-4">
        {card.title}
      </h3>

      {/* Contenido animado según el hover de toda la card */}
      <motion.div
        className="flex flex-col gap-2 text-sm text-neutral-300 leading-relaxed"
        animate={{ maxHeight: isMobile ? 1000 : 100 }}
        whileHover={!isMobile ? { maxHeight: 1000 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        {card.content.map((line, idx) => {
          const isListItem = line.trim().startsWith("- ") || line.trim().startsWith("•");
          return isListItem ? (
            <li
              key={idx}
              className="text-left ml-6 pl-2 relative text-cyan-300 before:absolute before:left-0 before:text-cyan-400 before:text-base mt-4"
            >
              {line.replace(/^- |^• /, "")}
            </li>
          ) : (
            <p key={idx} className="text-neutral-400">{line}</p>
          );
        })}
      </motion.div>
    </Paper>
  </motion.div>
</motion.div>

        ))}
      </Masonry>
    </Box>
  );
}
