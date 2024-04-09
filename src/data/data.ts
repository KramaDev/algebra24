import { CastType, MovieType, TabType } from "../types/types";

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

export const castData: CastType[] = [
  {
    id: "1",
    realName: "Ryan Reynolds",
    castName: "Wade Willson",
    image:
      "https://images.hellomagazine.com/horizon/square/ef4c1d8f1ca5-ryan-reynolds-at-premiere.jpg",
  },
  {
    id: "2",
    realName: "Macaulay Culkin",
    castName: "Kevin McCalister",
    image:
      "https://walkoffame.com/wp-content/uploads/2023/11/MackCulkin-1-scaled-e1701388924488.jpg",
  },
  {
    id: "3",
    realName: "Tobey Maguire",
    castName: "Peter Parker",
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/74064_v9_bb.jpg",
  },
];
