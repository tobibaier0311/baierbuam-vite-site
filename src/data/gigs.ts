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
    date: "11. Mai 2025",
    title: "Muttertag @ Dultstadl auf der Maidult Passau",
    location: "Maidult Passau",
    description: "Rockiger Auftritt im Dultstadl am Muttertag, Start um 15 Uhr",
    id: 8,
  },
  {
    date: "17. Mai 2025",
    title: "SV Schalding vs. TSV Nördlingen",
    location: "Sportplatz des SV Schalding am Reuthinger Weg",
    description:
      "Musikalische Unterstützung des Fussballspiels SV Schalding im Spiel gegen den TSV Nördlingen",
    id: 9,
  },
  {
    date: "28. Juni 2025",
    title: "Pfarrfest Heining",
    location: "Heining",
    description: "Auftritt im Rahmen des Pfarrfestes in Heining",
    id: 10,
  },
  {
    date: "13. Juli 2025",
    title: "100 Jahre SpVgg Hacklberg",
    location: "Sportplatz Hacklberg",
    description:
      "Musikalische Begleitung der Jubiläumsfeier der SpVgg Hacklberg",
    id: 11,
  },
  {
    date: "19. Oktober 2025",
    title: "Kirchweih Schalding r.d.D.",
    location: "Pfarrsaal Schalding",
    description: "Auftritt im Rahmen der Kirchweih Schalding r.d.D.",
    id: 12,
  },
  {
    date: "18. Juli 2026",
    title: "100 Jahre Feuerwehr Schalding links der Donau",
    location: "Schalding l.d.D.",
    description:
      "Musikalische Untermalung der Jubiläumsfeier der Feuerwehr Schalding links der Doanu",
    id: 13,
  },
];
