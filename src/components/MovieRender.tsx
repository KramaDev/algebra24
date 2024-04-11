import { MovieType } from "../types/types";

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
            <div>
              <h3>Cast</h3>
              <div className="movie__grid">
                {movie.cast.map((actor) => {
                  return (
                    <div className="movie__actor" key={actor.realName}>
                      <img src={actor.imageUrl} alt={actor.realName} />
                      <div>
                        <div>{actor.realName}</div>
                        <div>
                          <b>{actor.movieName}</b>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div>Za ovaj ID ne postoji film u bazi!</div>
        )}
      </div>
    </>
  );
};
export default MovieRender;
