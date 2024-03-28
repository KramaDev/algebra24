import { useState } from "react";
import Grid from "../components/grid";

type CarType = {
  id: string;
  name: string;
  color: string;
};

const defaultCar: CarType = {
  id: "000",
  name: "Name",
  color: "Color",
};

const database: CarType[] = [
  {
    id: "001",
    name: "Ford",
    color: "blue",
  },
  {
    id: "002",
    name: "BMW",
    color: "blue",
  },
  {
    id: "003",
    name: "Ferrari",
    color: "yellow",
  },
  {
    id: "004",
    name: "Peugeot",
    color: "red",
  },
  {
    id: "005",
    name: "Nissan",
    color: "gray",
  },
  {
    id: "006",
    name: "Opel",
    color: "black",
  },
  {
    id: "007",
    name: "Daimler",
    color: "white",
  },
  {
    id: "008",
    name: "Fiat",
    color: "black",
  },
  {
    id: "009",
    name: "Mercedes",
    color: "black",
  },
];

const Gallery = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [carData, setCarData] = useState<CarType>(defaultCar);
  const [data, setData] = useState<CarType[]>(database);

  const handleDelete = (id: string) => {
    const newState = data.filter((item) => item.id !== id);
    setData(newState);
  };

  return (
    <>
      <h1>Car Gallery</h1>
      <hr />
      <Grid>
        {data.map((car) => {
          return (
            <>
              <div key={car.id} className="gallery">
                <img
                  onClick={() => {
                    setShowOverlay(!showOverlay);
                    setCarData(car);
                  }}
                  className="gallery__img"
                  src={`https://source.unsplash.com/random/1600x900/?${car.name}`}
                  alt={`Photo of ${car.name} car`}
                />
              </div>
              {showOverlay && (
                <>
                  <div className="gallery__overlay">
                    <div className="overlay">
                      <div>
                        <p>ID: {carData.id}</p>
                        <p>Manufacturer: {carData.name}</p>
                        <p>Color: {carData.color}</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            handleDelete(carData.id);
                            setShowOverlay(!showOverlay);
                          }}
                          className="overlay__exit"
                          src="https://www.svgrepo.com/show/270587/recycle-bin-trash.svg"
                          alt=""
                        />
                        <img
                          onClick={() => {
                            setShowOverlay(!showOverlay);
                          }}
                          className="overlay__exit"
                          src="https://www.svgrepo.com/show/206436/delete-exit.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <img
                      className="overlay__img"
                      src={`https://source.unsplash.com/random/1600x900/?${carData.name}`}
                    />
                  </div>
                </>
              )}
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default Gallery;
