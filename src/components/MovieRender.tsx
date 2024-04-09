import { MovieType } from "../types/types";

type Props = {
  movie: MovieType | undefined;
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      {movie ? (
        <>
          <h2>{movie.name}</h2>
          <b>{movie.year}</b>
          <div>
            {movie.genre.map((genre, index) => {
              return <span key={index}>{genre}</span>;
            })}
          </div>
        </>
      ) : (
        <div>Za ovaj ID ne postoji film u bazi!</div>
      )}
    </>
  );
};
export default MovieRender;
