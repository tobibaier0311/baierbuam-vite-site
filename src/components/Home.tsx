import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";
import About from "./home/About";

export function Home() {
  return (
    <Container>
      <About />
      <h2>
        Interesse? Einfach uns <Link to="/contact">hier</Link> anschreiben!
      </h2>
    </Container>
  );
}
