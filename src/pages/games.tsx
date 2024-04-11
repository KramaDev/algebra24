import { useNavigate } from "react-router-dom";
import { gamesData } from "../data/data";

const Games = () => {
  const navigate = useNavigate();
  const goTo = (gameId: string) => {
    navigate(`${gameId}`);
  };

  return (
    <>
      <h1>BEST PC GAMES!</h1>
      <div className="games__grid">
        {gamesData.map((game, index) => {
          return (
            <>
              <div
                onClick={() => goTo(game.id)}
                key={index}
                className="games__card"
              >
                <img className="games__img" src={game.imgUrl} alt={game.name} />
                <h2 className="games__name">{game.name}</h2>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Games;
