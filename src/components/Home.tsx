import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";

import { motion } from "framer-motion";

import RockMeets from "../assets/RockMeets.svg";
import Logo from "../assets/logo1.png";
import Gruppe2 from "../assets/Gruppenfoto.png";

export function Home() {
  return (
    <Container>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${Gruppe2})`,
        }}
      >
        <div className="animation">
          <motion.img
            className="image"
            transition={{ delay: 0.5 }}
            initial={{ opacity: "0%", x: -200 }}
            whileInView={{ opacity: "100%", x: 0 }}
            src={RockMeets}
            width="300px"
            style={{ color: "white" }}
          />
          <motion.img
            className="image"
            transition={{ delay: 0.5 }}
            initial={{ opacity: "0%", x: 200 }}
            whileInView={{ opacity: "100%", x: 0 }}
            src={Logo}
            width="300px"
          />
        </div>
      </div>
      <h2>
        Interesse? Einfach uns <Link to="/contact">hier</Link> anschreiben!
      </h2>{" "}
    </Container>
  );
}
