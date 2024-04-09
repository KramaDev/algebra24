import { castData } from "../data/data";
import { MovieType } from "../types/types";
import Grid from "./grid";

type Props = {
  movie: MovieType | undefined;
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      <div className="movie">
        {movie ? (
          <>
            <h2 className="movie__name">{movie.name}</h2>
            <b className="movie__year">{movie.year}</b>
            <div className="movie__genre">
              {movie.genre.map((genre, index) => {
                return (
                  <span className="movie__genre__item" key={index}>
                    {genre}
                  </span>
                );
              })}
            </div>
            <img
              className="movie__img"
              src={movie.href}
              alt={`Photo of ${movie.name} Movie`}
            />
            <div>Cast</div>
            <Grid>
              {castData.map((cast) => {
                return (
                  <>
                    <div key={cast.id}>
                      <img
                        style={{
                          width: 4 + "rem",
                          height: 4 + "rem",
                          borderRadius: 1600 + "rem",
                          objectFit: "contain",
                        }}
                        src={cast.image}
                        alt={`Image of ${cast.realName}`}
                      />
                      <div>
                        <b>{cast.realName}</b>
                        <p>
                          {" "}
                          as{" "}
                          <span style={{ color: "orange", fontWeight: "600" }}>
                            {cast.castName}
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </Grid>
          </>
        ) : (
          <div>Za ovaj ID ne postoji film u bazi!</div>
        )}
      </div>
    </>
  );
};
export default MovieRender;
