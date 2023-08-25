import { Card } from "./Card";
import { fetchPokemon } from "./fetchPokemon";
import { useState, useEffect } from "react";

type Pokemon = {
  id: number;
};

export const BoardGame = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [rotated, setRotated] = useState([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const fetch = await fetchPokemon();
      setPokemons(fetch);
    };
    loadPokemons();
  }, []);

  useEffect(() => {
    checkForPairs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotated]);

  const checkForPairs = () => {
    if (rotated.length > 0 && rotated[0] == rotated[1]) {
      setRotated([]);
    }

    if (rotated.length == 2 && rotated[0] != rotated[1]) {
      setTimeout(() => {
        rotated.forEach((item) => {
          document.querySelectorAll(`[data-id="${item}"]`).forEach((item) => {
            item.classList.remove("rotated");
          });
        });
        setRotated([]);
      }, 1000);
    }

    console.log(rotated);
  };

  const handlePairs = (id: number) => {
    setRotated([...rotated, id]);
  };

  console.log(pokemons);

  return (
    <div className="board">
      <div className="innerBoard">
        {pokemons?.map((item, index: number) => {
          return (
            <Card
              pokemon={item}
              key={item.id + index}
              handlePairs={handlePairs}
            />
          );
        })}
      </div>
    </div>
  );
};
