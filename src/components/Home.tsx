import { Button, Container, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Home.css";

import { motion } from "framer-motion";

import RockMeets from "../assets/RockMeets.svg";
import Logo from "../assets/Logo.png";
import Gruppe2 from "../assets/Gruppenfoto.png";

import Gruppe from "../assets/image3.jpeg";
import { useNavigate } from "react-router-dom";

export function Home() {
  const to = useNavigate();
  return (
    <div className="home-container">
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
              transition={{ delay: 1 }}
              initial={{ opacity: "0%", x: -50 }}
              whileInView={{ opacity: "100%", x: 0 }}
              viewport={{ once: true }}
              src={RockMeets}
              width="300px"
              style={{ color: "white" }}
            />
            <motion.img
              className="image"
              transition={{ delay: 1 }}
              initial={{ opacity: "0%", x: 50 }}
              whileInView={{ opacity: "100%", x: 0 }}
              viewport={{ once: true }}
              src={Logo}
              width="300px"
            />
          </div>
        </div>
      </Container>

      <Divider variant="middle" className="home-divider" />

      <div className="about">
        <motion.img
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="image1"
          src={Gruppe}
          alt="Baierbuam And Friends Gruppenfoto"
        />
        <motion.div className="about-text">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Boarisch, Rock-Klassiker & Party-Hits.
          </motion.h1>
          <p>
            Wir, die <span>"Baierbuam And Friends"</span> sind eine Gruppe
            ambitionierter Hobby-Musiker aus dem Raum Schalding r.d.D./Heining.
            Stets mit dem Motto "Rock meets Blasmusik" treten wir auf
            verschiedenen Veranstaltungen im Raum Passau auf. <br />
          </p>
          <p>
            Von kleineren Auftritten an Geburtstagen bestimmter "Ehrenfans",
            über musikalische Begleitung verschiedener Dorffeste wie zum
            Beispiel dem Starkbierfest in Schalding, bis hin zur Unterstützung
            der 1. Fußballmannschaft des SV Schalding Heining ist alles dabei.
            Unsere aktuelle Besetzung sind 5 Trompeten, 4 Posaunen, 1
            Klarinette, 1 E-Gitarre, 1 E-Bass und 1 Schlagzeug.
          </p>

          <p>
            Unser Repertoire zeichnet sich durch ein sehr breites Spektrum aus.
            Enthalten sind natürlich bestimmte All Time Hits wie "Sweet
            Caroline" oder "Highway to Hell".
          </p>
          <Button
            sx={{
              color: "#f5f5f5",
              marginTop: "1.5rem",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
            variant="outlined"
            size="large"
            onClick={() => to("/contact")}
          >
            Buchen
          </Button>
        </motion.div>
      </div>
      <Divider variant="middle" className="home-divider" />
      <Container className="gig-container-start">
        <h1>Unsere nächsten Auftritte</h1>
        <Button
          sx={{
            color: "#f5f5f5",
            textTransform: "none",
            fontFamily: "Poppins",
            fontWeight: "200",
          }}
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
          variant="text"
        >
          Alle Auftritte
        </Button>
      </Container>
    </div>
  );
}
