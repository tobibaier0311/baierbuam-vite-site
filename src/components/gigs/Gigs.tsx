import React from "react";
import { events } from "../../data/gigs";
import { GigCard } from "./GigsCard";

export function Gigs() {
  return events.map((item) => <GigCard event={item.event} date={item.date} />);
}
