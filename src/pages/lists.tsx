import { useState } from "react";
import ListComponent from "../components/ListComponents/listComponent";
import FavListComponent from "../components/ListComponents/favListComponent";

export const data = [
  {
    name: "LOCO",
    artist: "MGK",
  },
  {
    name: "53666",
    artist: "MGK",
  },
  {
    name: "Hotel Diablo",
    artist: "MGK",
  },
  {
    name: "Ayy",
    artist: "MGK",
  },
  {
    name: "Alpha Omega",
    artist: "MGK",
  },
  {
    name: "Oliver Twist",
    artist: "Arrdee",
  },
  {
    name: "Come and Go",
    artist: "Arrdee",
  },
  {
    name: "Early Hours",
    artist: "Arrdee",
  },
];

export type SongType = {
  name: string;
  artist: string;
};

const Lists = () => {
  const [songs, setSongs] = useState<SongType[]>(data);
  const [favSongs, setFavSongs] = useState<SongType[]>([]);

  const onFavourite = (song: SongType) => {
    setSongs((prev) => {
      return prev.filter((currentSong) => currentSong.name !== song.name);
    });
    setFavSongs((prev) => {
      return [...prev, song];
    });
  };

  const onRemove = (song: SongType) => {
    setSongs((prev) => {
      return [...prev, song];
    });
    setFavSongs((prev) => {
      return prev.filter((currentSong) => currentSong.name !== song.name);
    });
  };

  return (
    <>
      <div className="spotify">
        <div className="spotify__list">
          <ListComponent list={songs} onChange={(song) => onFavourite(song)} />
        </div>
        <div className="spotify__favourites">
          <FavListComponent
            list={favSongs}
            onChange={(song) => onRemove(song)}
          />
        </div>
      </div>
    </>
  );
};
export default Lists;
