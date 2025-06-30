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
    date: "5. Juli 2025",
    title: "Sommerfest Langlebenhof Passau",
    location: "Langlebenhof Passau",
    description:
      "Musikalische Untermalung des Sommerfestes im Langlebenhof Passau",
    id: 1,
  },
  {
    date: "13. Juli 2025",
    title: "100 Jahre SpVgg Hacklberg",
    location: "Sportplatz Hacklberg",
    description:
      "Musikalische Begleitung der Jubiläumsfeier der SpVgg Hacklberg",
    id: 2,
  },
  {
    date: "20. Juli 2025 ab 14:00 Uhr",
    title: "Standkonzert Rathausplatz Passau",
    location: "Rathausplatz Passau",
    id: 3,
  },
  {
    date: "16. August 2025",
    title: "Schützenfest Schalding r.d.D.",
    location: "Schalding r.d.D.",
    description: "Auftritt im Rahmen des Schützenfestes in Schalding r.d.D.",
    id: 4,
  },
  {
    date: "19. Oktober 2025",
    title: "Kirchweih Schalding r.d.D.",
    location: "Pfarrsaal Schalding",
    description: "Auftritt im Rahmen der Kirchweih Schalding r.d.D.",
    id: 5,
  },
  {
    date: "18. Juli 2026",
    title: "100 Jahre Feuerwehr Schalding links der Donau",
    location: "Schalding l.d.D.",
    description:
      "Musikalische Untermalung der Jubiläumsfeier der Feuerwehr Schalding links der Doanu",
    id: 6,
  },
];
