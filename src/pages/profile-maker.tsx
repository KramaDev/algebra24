import { useState } from "react";

const ProfileMaker = () => {
  const [name, setName] = useState<string>("Mario Kramarić");
  const [tagData, setTagData] = useState<string>();

  return (
    <>
      <h1>Profile Maker</h1>
      <div className="section">
        <div className="card">
          <img
            className="card__photo"
            src="https://source.unsplash.com/random/1000x1000/?portrait"
            alt=""
          />
          <h1 className="card__name" id="card-name">
            {name}
          </h1>
          <div className="card__grid" id="grid">
            <p className="card__tag" id="card-tag">
              CSS
            </p>
          </div>
        </div>

        <div className="field">
          <div className="field__input">
            <label className="field__text" htmlFor="name">
              NAME
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="field__box"
              type="text"
              id="name"
            />
          </div>
          <div className="field__input">
            <label className="field__text" htmlFor="tag">
              TAG
            </label>
            <input
              onChange={(e) => {
                setTagData(e.target.value);
              }}
              className="field__box"
              type="text"
              id="tag"
            />
            <span>
              <button className="field__btn">ADD</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileMaker;
