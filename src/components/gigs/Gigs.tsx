import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useSWR from "swr";
import { GigCard } from "./GigsCard";
import KonzertmeisterIframe from "../KonzertmeisterIFrame";

type Gig = {
  id: number;
  title: string;
  date: string;
  location: string;
  description?: string;
};

type GigsData = {
  data?: Gig[];
};

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const fetcher = (url: string): Promise<GigsData> =>
  fetch(url).then((r) => r.json());

export function Gigs() {
  const { pathname } = useLocation();

  const { data } = useSWR<GigsData>(
    "https://amazing-boat-eb53dcad43.strapiapp.com/api/gigs?sort=date:asc",
    fetcher
  );

  const gigs = data?.data || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
      }}
      className="GigPage"
    >
      <KonzertmeisterIframe />
      {/* <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Alle Termine
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {gigs.map((gig, i) => (
          <motion.div
            key={gig.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <GigCard {...gig} date={formatDate(gig.date)} />
          </motion.div>
        ))}
      </div> */}
    </Container>
  );
}
