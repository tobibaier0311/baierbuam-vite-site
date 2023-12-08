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
  description: string;
  id?: number;
}

export const events: Array<EventsType> = [
  {
    date: "10. Februar 2024",
    title: "Fasching Frauenbund",
    location: "Schalding r.d.D",
    description: "",
    id: 2,
  },
  {
    date: "13. Februar 2024",
    title: "Gaudiwurm Innstadt",
    location: "Passau, Innstadt",
    description: "",
    id: 3,
  },
  {
    date: "02. März 2024",
    title: "SVS - FC Bayern II",
    location: "Sportanlage Reuthinger Weg",
    description: "",
    id: 4,
  },
  {
    date: "16. März 2024",
    title: "Starkbierbierfest Schalding",
    location: "Schalding r.d.D",
    description: "",
    id: 5,
  },
  {
    date: "27. April 2024",
    title: "SVS - Wacker Burghausen",
    location: "Sportanlage Reuthinger Weg",
    description: "",
    id: 6,
  },
  {
    date: "11. Mai 2024",
    title: "SVS - Würzburg",
    location: "Sportanlage Reuthinger Weg",
    description: "",
    id: 7,
  },
  {
    date: "29. Juni 2024",
    title: "Pfarrfest Heining",
    location: "Heining",
    description: "",
    id: 8,
  },
];
