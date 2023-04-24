import React from "react";
import { Card, CardContent, Container, Divider } from "@mui/material";
import Gruppe from "../../assets/image3.jpeg";
import "./About.css";

export default function About() {
  return (
    <Container>
      <h1>Über uns</h1>
      <Divider />
      <Card
        className="card"
        variant="outlined"
        sx={{ background: "#003d6f", color: "white", padding: "50px" }}
      >
        <div className="stack">
          <img
            className="image1"
            src={Gruppe}
            alt="Baierbuam And Friends Gruppenfoto"
          />
          <CardContent>
            <p>
              Wir, die "Baierbuam And Friends" sind eine Gruppe ambitionierter
              Hobby-Musiker, welche im Gründungsjahr 2018 noch aus 6 Mitgliedern
              bestand. Diese Zahl ist bis heute im Jahr 2023 auf ganze 13
              gestiegen. Stets mit dem Motto "Rock meets Blasmusik" treten wir
              auf verschiedenen Veranstaltungen im Raum Passau auf. Von
              kleineren Auftritten an Geburtstagen bestimmter "Ehrenfans", über
              musikalische Begleitung verschiedener Dorffeste wie zum Beispiel
              dem Starkbierfest in Schalding, bis hin zur Unterstützung der 1.
              Fußballmannschaft des SV Schalding Heining ist alles dabei. Unsere
              aktuelle Besetzung sind 5 Trompeten, 4 Posaunen, 1 Klarinette, 1
              E-Gitarre, 1 E-Bass und 1 Schlagzeug. Unser Repertoire zeichnet
              sich durch ein sehr breites Spektrum aus. Enthalten sind natürlich
              bestimmte All Time Hits wie "Sweet Caroline" oder "Highway to
              Hell".
            </p>
          </CardContent>
        </div>
      </Card>
    </Container>
  );
}
