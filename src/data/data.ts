import { MovieType, TabType } from "../types/types";

export const tabData: TabType[] = [
  {
    id: "1",
    label: "Home Alone",
  },
  {
    id: "2",
    label: "Spiderman - 3",
  },
  {
    id: "3",
    label: "Deadpool 2",
  },
  {
    id: "4",
    label: "Free Guy",
  },
];

export const movieData: MovieType[] = [
  {
    id: "1",
    name: "Home Alone",
    year: "1990",
    genre: ["Comedy", "Action"],
    href: "https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200",
  },
  {
    id: "2",
    name: "Spiderman - 3",
    year: "2007",
    genre: ["Comedy", "Adventure", "Sci-Fi"],
    href: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "3",
    name: "Deadpool 2",
    year: "2018",
    genre: ["Comedy", "Action", "Adventure"],
    href: "https://m.media-amazon.com/images/M/MV5BNmM4MWFlNGEtYjJjMC00ZGRlLWE5ZDMtZDRmODQ1ZTkxZjMwXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_.jpg",
  },
  {
    id: "4",
    name: "Free Guy",
    year: "2021",
    genre: ["Comedy", "Action", "Adventure"],
    href: "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
];
