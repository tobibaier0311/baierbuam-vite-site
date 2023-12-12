import { Container, Divider } from "@mui/material";
import { events } from "../../data/gigs";
import { GigCard } from "./GigsCard";
import { motion } from "framer-motion";
import { ArrowDownward } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Gigs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="GigPage"
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "1rem",
          textDecoration: "none",
        }}
      >
        Alle Termine <ArrowDownward sx={{ fontSize: "xx-large" }} />
      </h1>
      <div>
        <div>
          {events.map((gig, i) => (
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 2, delay: i * 0.2 }}
            >
              <GigCard {...gig} key={gig.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
