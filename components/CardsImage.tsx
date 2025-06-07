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
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 200 },
            }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={3}
              sx={{
                bgcolor: "#1a1a1a",
                p: 3,
                borderRadius: 2,
                color: "white",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mt: i % 2 === 0 ? 0 : 6,
                pb: [1, 3].includes(i) ? 8 : 3,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
                  bgcolor: "#222",
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

              <motion.div
                className="flex flex-col gap-2 text-sm text-neutral-400 leading-relaxed"
                initial={{ maxHeight: 100, overflow: "hidden" }}
                whileHover={{ maxHeight: 1000 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {card.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </motion.div>
            </Paper>
          </motion.div>
        ))}
      </Masonry>
    </Box>
  );
}
