import { SongType } from "../../pages/lists";

type Props = {
  list: SongType[];
  onChange: (song: SongType) => void;
};

const FavListComponent = ({ list, onChange }: Props) => {
  return (
    <>
      {list.length > 0 ? (
        list.map((song) => {
          return (
            <>
              <div>
                <div className="spotify__list__item">
                  <div>{song.name}</div>
                  <div>{song.artist}</div>
                </div>
                <button onClick={() => onChange(song)} className="spotify__btn">
                  REMOVE
                </button>
              </div>
            </>
          );
        })
      ) : (
        <div>NO FAVOURITE SONGS YET!! SAVE SOME!!! </div>
      )}
    </>
  );
};
export default FavListComponent;
