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
          <div className="game__layout">
            <img className="game__img" src={data.imgUrl} alt={data.name} />
            <h1 className="game__name">{data.name}</h1>
            <p className="game__summary">{data.summary}</p>
          </div>
          <div className="game__boxbtn">
            <h2>Purchase on:</h2>
            <div>
              <button
                onClick={() => {
                  window.open(`${data.steamUrl}`, "_blank");
                }}
                className="game__btn"
              >
                STEAM
              </button>
              <button
                onClick={() => {
                  window.open(`${data.epicUrl}`, "_blank");
                }}
                className="game__btn"
              >
                OTHER
              </button>
            </div>
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
