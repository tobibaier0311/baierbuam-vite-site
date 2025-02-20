/* 
  {
    event: "",
    date: "",
    description: "",
  },
  */

export interface EventsType {
  date: string;
  title: string;
  location: string;
  description?: string;
  id?: number;
}

export const events: Array<EventsType> = [
  {
    date: "27. Februar 2025",
    title: "Rathaussturm Passau",
    location: "Stadt Passau",
    description:
      "Marsch ab ca. 16 Uhr von der Innstadt Passau Richtung Rathaus, anschließendes Rocken im Rathaus.",
    id: 1,
  },
  {
    date: "01. März 2025",
    title: "Fasching Schalding rechts der Donau",
    location: "Schalding r.d.D.",
    description:
      "Musikalische Begleitung der Faschingsfeier ab ca. 19 Uhr im Pfarrsaal Schalding r.d.D.",
    id: 2,
  },
  {
    date: "02. März 2025",
    title: "Faschingsgottesdienst Neustift",
    location: "Neustift-Passau",
    description:
      "Rhytmischer Gottesdienst ab 9:15 Uhr in der Kirche Neustift mit Unterstützung unserer kompletten Rhytmusgruppe.",
    id: 3, 
  },
  {
    date: "04. März 2025",
    title: "Faschingszug Innstadt Passau /"Gaudiwurm/"",
    location: "Innstadt Passau",
    description:
      "Mitwirken im Faschingszug der Faschingsfreunde Innstadt Passau ab ca 12 Uhr Mittag.",
    id: 4,
  },
  {
    date: "22. März 2025",
    title: "Starkbierfest Schalding r.d.D.",
    location: "Schalding r.d.D.",
    description:
      "Musikalische Begleitung des Starkbierfestes Schalding r.d.D. im Pfaarsaal",
    id: 5,
  },
  {
    date: "05. April 2025",
    title: "SV Schalding-Heining vs. 1860 München II",
    location: "Sportplatz des SV Schalding am Reuthinger Weg",
    description:
      "Musikalische Unterstützung des SV Schalding im Spiel gegen die 2. Mannschaft des TSV 1860 München",
    id: 6,
  },
  {
    date: "11. Mai 2025",
    title: "100(+5) Jahre FFW Schalding r.d.D.",
    location: "Schalding r.d.D.",
    description:
      "Musikalische Begleitung der Jubiläumsfeier der Freiwilligen Feuerwehr Schalding rechts der Donau.",
    id: 7,
  },
  {
    date: "17. Mai 2025",
    title: "SV Schalding vs. TSV Nördlingen",
    location: "Sportplatz des SV Schalding am Reuthinger Weg",
    description:
      "Musikalische Unterstützung des Fussballspiels SV Schalding im Spiel gegen den TSV Nördlingen",
    id: 8,
  },
  {
    date: "28. Juni 2025",
    title: "Pfarrfest Heining",
    location: "Heining",
    description:
      "Auftritt im Rahmen des Pfarrfestes in Heining",
    id: 9,
  },
  {
    date: "13. Juli 2025",
    title: "100 Jahre SpVgg Hacklberg",
    location: "Sportplatz Hacklberg",
    description:
      "Musikalische Begleitung der Jubiläumsfeier der SpVgg Hacklberg",
    id: 10,
  },
  {
    date: "19. Oktober 2025",
    title: "Kirchweih Schalding r.d.D.",
    location: "Pfarrsaal Schalding",
    description:
      "Auftritt im Rahmen der Kirchweih Schalding r.d.D.",
    id: 11,
  },
  {
    date: "18. Juli 2026",
    title: "100 Jahre Feuerwehr Schalding links der Donau",
    location: "Schalding l.d.D.",
    description:
      "Musikalische Untermalung der Jubiläumsfeier der Feuerwehr Schalding links der Doanu",
    id: 12,
  },
];
