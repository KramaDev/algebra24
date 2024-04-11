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
    summary:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas's open countryside and the fictional city of Los Santos, based on Los Angeles.",
    steamUrl: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    epicUrl: "https://store.epicgames.com/en-US/p/grand-theft-auto-v",
  },
  {
    id: "Baldurs-Gate-3",
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
    name: "Baldur's Gate 3",
    summary:
      "Baldur's Gate 3 is a 2023 role-playing video game developed and published by Belgian game developer Larian Studios. The game is the third main installment in the Baldur's Gate series, based on the tabletop fantasy role-playing system of Dungeons & Dragons. A partial version of the game was released in early access format for macOS and Windows in October 2020. It remained in early access until its full release for Windows in August 2023, with versions for PlayStation 5, macOS, and Xbox Series X/S releasing later that year.",
    steamUrl: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    epicUrl: "https://baldursgate3.game/",
  },
  {
    id: "Elden-Ring",
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png",
    name: "Elden Ring",
    summary:
      "Elden Ring is a 2022 action role-playing game developed by FromSoftware. It was directed by Hidetaka Miyazaki with worldbuilding provided by fantasy writer George R. R. Martin. It was published for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on February 25 by FromSoftware in Japan and Bandai Namco Entertainment internationally. Players control a customizable player character who is on a quest to repair the Elden Ring and become the new Elden Lord.",
    steamUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    epicUrl: "https://en.bandainamcoent.eu/elden-ring/elden-ring",
  },
  {
    id: "God-of-War",
    imgUrl:
      "https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png",
    name: "God of War",
    summary:
      "God of War is a fantasy action-adventure game franchise created by David Jaffe and developed by Santa Monica Studio. It began in 2005 for the PlayStation 2 (PS2) video game console and has become a flagship series for the PlayStation, consisting of nine installments across multiple platforms. Based on ancient mythologies, the series' plot follows Kratos, a Spartan warrior who becomes the God of War and comes into conflict with various mythological pantheons. The earlier games in the series are based on Greek mythology and see Kratos follow a path of vengeance against the Olympian gods; the later games in the series are based on Norse mythology and see Kratos go on a path of redemption while also introducing his son Atreus as a secondary protagonist.",
    steamUrl: "https://store.steampowered.com/app/1593500/God_of_War/",
    epicUrl: "https://store.epicgames.com/en-US/p/god-of-war",
  },
];
