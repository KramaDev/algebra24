import { SongType } from "../../pages/lists";

type Props = {
  list: SongType[];
  onChange: (song: SongType) => void;
};

const ListComponent = ({ list, onChange }: Props) => {
  return (
    <>
      {list.length > 0
        ? list.map((song) => {
            return (
              <div key={song.name} className="spotify__list__item">
                <div>
                  <div>{song.name}</div>
                  <div>{song.artist}</div>
                </div>
                <button className="spotify__btn" onClick={() => onChange(song)}>
                  ADD
                </button>
              </div>
            );
          })
        : "Nema više pjesama"}
    </>
  );
};
export default ListComponent;
