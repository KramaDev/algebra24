import { useEffect, useState } from "react";

type BerriesType = {
  results: {
    name: string;
  };
};

type BerryType = {
  name: string;
  id: number;
  firmness: {
    name: string;
  };
  item: {
    name: string;
  };
};

const Berries = () => {
  const [berriesData, setBerriesData] = useState<BerriesType | null>(null);
  const [berryData, setBerryData] = useState<BerryType | null>(null);

  const getData = async () => {
    await fetch(`https://pokeapi.co/api/v2/berry/?&limit=64`)
      .then((res) => {
        return res.json();
      })
      .then((data: BerriesType) => {
        console.log(data);
        setBerriesData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBerryData = async () => {
    await fetch(`https://pokeapi.co/api/v2/berry/1`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBerryData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    getBerryData();
  }, []);

  return (
    <>
      <h1>BerryDex</h1>
      {berryData ? (
        <>
          <h2>
            #{berryData.id} | {berryData.name}
          </h2>
          <p>Firmness: {berryData.firmness.name} </p>
          <p>Item name: {berryData.item.name} </p>
        </>
      ) : (
        "Još se nije učitalo..."
      )}
    </>
  );
};
export default Berries;
