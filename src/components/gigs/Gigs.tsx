import { Container } from "@mui/material";
import { events } from "../../data/gigs";
import { GigCard } from "./GigsCard";

export function Gigs() {
  return (
    <Container className="GigPage">
      <h1>Termine 🗓️</h1>
      <div className="cards">
        {events.map((item) => (
          <GigCard key={item.date} event={item.event} date={item.date} />
        ))}
      </div>
    </Container>
  );
}
