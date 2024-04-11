export type MovieType = {
  id: string;
  name: string;
  year: string;
  genre: string[];
  href: string;
  cast: CastType[];
};

export type TabType = {
  id: string;
  label: string;
};

export type CastType = {
  realName: string;
  movieName: string;
  imageUrl: string;
};

export type GameType = {
  id: string;
  imgUrl: string;
  name: string;
};
