import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { gamesData } from "../data/data";
import { GameType } from "../types/types";

const GameInfo = () => {
  const { gameId } = useParams();
  const [data, setData] = useState<GameType>();
  const getGameInfo = () => {
    {
      const game = gamesData.find((game) => {
        return game.id === gameId;
      });
      setData(game);
    }
  };

  useEffect(() => {
    getGameInfo();
  }, []);
  return (
    <>
      {data ? (
        <>
          <div>
            <img width={500} src={data.imgUrl} alt={data.name} />
            <h1>{data.name}</h1>
          </div>
        </>
      ) : (
        <>
          <div>
            Igrica pod nazivom {gameId} ne postoji u našoj bazi podataka!
          </div>
        </>
      )}
    </>
  );
};
export default GameInfo;
