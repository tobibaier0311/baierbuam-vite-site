import { Container } from "@mui/material";
import { events } from "../../data/gigs";
import { GigCard } from "./GigsCard";
import { motion } from "framer-motion";

export function Gigs() {
  return (
    <Container className="GigPage">
      <h1>Termine 🗓️</h1>
      <div className="cards">
        {events.map((item, i) => (
          <motion.div
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 2, delay: i * 0.2 }}
          >
            <GigCard key={item.date} event={item.event} date={item.date} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
