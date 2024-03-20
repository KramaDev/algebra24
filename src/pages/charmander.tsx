import { useEffect, useState } from "react";

type PokemonType = {
  name: string;
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  abilities: PokemonAbilityType[];
  types: PokemonTypeType[];
  stats: PokemonStatsType[];
};

type PokemonAbilityType = {
  ability: {
    name: string;
  };
};

type PokemonTypeType = {
  type: {
    name: string;
  };
};

type PokemonStatsType = {
  base_stat: number;
  stat: {
    name: string;
  };
};

const Charmander = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);

  const getData = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {pokemonData ? (
        <>
          <h1>
            #{pokemonData.order} | {pokemonData.name}
          </h1>
          <div>
            <div>
              Abilities:{" "}
              {pokemonData.abilities.map((ability, index) => {
                return (
                  <>
                    <span key={index}>{ability.ability.name}</span>
                  </>
                );
              })}
            </div>

            <div>
              Types:{" "}
              {pokemonData.types.map((type, index) => {
                return (
                  <>
                    <span key={index}>{type.type.name}</span>
                  </>
                );
              })}
            </div>

            <div>
              Stats:{" "}
              {pokemonData.stats.map((stats, index) => {
                return (
                  <>
                    <span key={index}> {stats.stat.name} </span>
                    <span> {stats.base_stat} </span>
                  </>
                );
              })}
            </div>
          </div>

          <img src={pokemonData.sprites.front_default} alt="" />
        </>
      ) : (
        "Još nisu pullani podatci"
      )}
    </>
  );
};
export default Charmander;
