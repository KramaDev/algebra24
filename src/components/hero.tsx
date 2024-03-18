import { useEffect, useState, MouseEvent } from "react";
import Select from "react-select";

type PokemonsResponseType = {
  count: number;
  next: string;
  results: PokemonType[];
};

type PokemonType = {
  name: string;
  url: string;
};

type ActivePokemonType = {
  sprites: {
    front_default: string;
  };
};
type ActivePokemonResponseType = ActivePokemonType;

//ItemsPerPage
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "10", label: "10 Pokemona" },
  { value: "20", label: "20 Pokemona" },
  { value: "100", label: "100 Pokemona" },
];

const defaultLimit = "10";

const Hero = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [activePokemon, setActivePokemon] = useState<
    ActivePokemonType | undefined
  >(undefined);

  const getData = async (limit: string | undefined) => {
    await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit ? limit : defaultLimit}`
    )
      .then((data) => {
        return data.json();
      })
      .then((res: PokemonsResponseType) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPokemonData = async (pokemon: string) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((data) => {
        return data.json();
      })
      .then((res: ActivePokemonResponseType) => {
        setActivePokemon(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData("10");
  }, []);

  return (
    <>
      <div className="hero">
        <h1 className="hero__title">Pokemons</h1>
        <Select
          onChange={(e) => {
            getData(e?.value);
          }}
          options={options}
        />
        <div className="hero__items">
          {data.map((pokemon) => {
            return (
              <button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  const element = e.target as HTMLButtonElement;
                  const currentPokemon = element.innerHTML;
                  getPokemonData(currentPokemon);
                }}
                key={pokemon.name}
              >
                {pokemon.name}
              </button>
            );
          })}
        </div>
        <div>
          <img src={activePokemon?.sprites.front_default} alt="" />
        </div>
      </div>
    </>
  );
};
export default Hero;
