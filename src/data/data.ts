import { GameType, MovieType, TabType } from "../types/types";

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
    cast: [
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTM1NzUwMjY2M15BMl5BanBnXkFtZTcwOTI5MTMyMw@@._V1_FMjpg_UX399_.jpg",
        movieName: "Kevin",
        realName: "Macaulay Culkin",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMzc3MTcxNDYxNV5BMl5BanBnXkFtZTcwOTI3NjE1Mw@@._V1_FMjpg_UY2048_.jpg",
        movieName: "Harry",
        realName: "Joe Pesci",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTI3NTcwNDcxMF5BMl5BanBnXkFtZTcwMTI3Mjc4Mg@@._V1_QL75_UX280_CR0,3,280,280_.jpg",
        movieName: "Marv",
        realName: "Daniel Stern",
      },
    ],
  },
  {
    id: "2",
    name: "Spiderman - 3",
    year: "2007",
    genre: ["Comedy", "Adventure", "Sci-Fi"],
    href: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
    cast: [
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_QL75_UX280_CR0,14,280,280_.jpg",
        movieName: "Peter Parker",
        realName: "Tobey Maguire",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQ3NzkwNzM1MV5BMl5BanBnXkFtZTgwMzE2MTQ3MjE@._V1_QL75_UX280_CR0,0,280,280_.jpg",
        movieName: "Mary Jane",
        realName: "Kirsten Dunst",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc0MjM4OTg0Nl5BMl5BanBnXkFtZTcwNzQ1MDE3Nw@@._V1_QL75_UX280_CR0,19,280,280_.jpg",
        movieName: "Venom",
        realName: "Topher Grace",
      },
    ],
  },
  {
    id: "3",
    name: "Deadpool 2",
    year: "2018",
    genre: ["Comedy", "Action", "Adventure"],
    href: "https://m.media-amazon.com/images/M/MV5BNmM4MWFlNGEtYjJjMC00ZGRlLWE5ZDMtZDRmODQ1ZTkxZjMwXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_.jpg",
    cast: [
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODFmN2VmZmEtYTRjZi00ZjY1LTgxYjQtODMyNDI3ZDk4ZTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX280_CR0,21,280,280_.jpg",
        movieName: "Deadpool",
        realName: "Ryan Reynolds",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQ1MzYyMjQ0Nl5BMl5BanBnXkFtZTcwMTA0ODkyMg@@._V1_QL75_UX280_CR0,25,280,280_.jpg",
        movieName: "Cable",
        realName: "Josh Brolin",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNmU5Yjk4OTItMjMzZS00MTYzLWI1ZDktYWM4YWM2NTM2YzMzXkEyXkFqcGdeQXVyMzY2OTA2MzM@._V1_QL75_UX280_CR0,1,280,280_.jpg",
        movieName: "Vanessa",
        realName: "Morena Baccarin",
      },
    ],
  },
  {
    id: "4",
    name: "Free Guy",
    year: "2021",
    genre: ["Comedy", "Action", "Adventure"],
    href: "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    cast: [
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODFmN2VmZmEtYTRjZi00ZjY1LTgxYjQtODMyNDI3ZDk4ZTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX280_CR0,21,280,280_.jpg",
        movieName: "Guy",
        realName: "Ryan Reynolds",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZmViMjQxYTUtZDExNy00NjU1LWI4MmEtY2RhODRkMzNkODM1XkEyXkFqcGdeQXVyNjkwNzEwMzY@._V1_QL75_UY280_CR5,0,280,280_.jpg",
        movieName: "Millie",
        realName: "Jodie Comer",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMzk4MDIzNjcwNV5BMl5BanBnXkFtZTgwMTIyMjgwNDI@._V1_QL75_UX280_CR0,0,280,280_.jpg",
        movieName: "Antwan",
        realName: "Taika Waititi",
      },
    ],
  },
];

export const gamesData: GameType[] = [
  {
    id: "GTA-V",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    name: "GTA V",
  },
  {
    id: "Baldurs-Gate-3",
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
    name: "Baldur's Gate 3",
  },
  {
    id: "Elden-Ring",
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png",
    name: "Elden Ring",
  },
  {
    id: "God-of-War",
    imgUrl:
      "https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png",
    name: "God of War",
  },
];
