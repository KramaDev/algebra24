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
          </>
        ) : (
          <div>Za ovaj ID ne postoji film u bazi!</div>
        )}
      </div>
    </>
  );
};
export default MovieRender;
