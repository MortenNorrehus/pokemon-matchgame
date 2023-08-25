import { Card } from "./Card";
import { fetchPokemon } from "./fetchPokemon";
import { useState, useEffect } from "react";

const fetch = await fetchPokemon();

export const BoardGame = () => {
  const [pokemons, setPokemons] = useState();
  const [rotated, setRotated] = useState([]);

  useEffect(() => {
    setPokemons(fetch);
  }, []);

  useEffect(() => {
    checkForPairs();
  }, [rotated]);

  const checkForPairs = () => {
    if (rotated.length > 0 && rotated[0] == rotated[1]) {
      console.log("Winner");
      setRotated([]);
    }

    if (rotated.length == 2 && rotated[0] != rotated[1]) {
      console.log("no match");

      setTimeout(() => {
        rotated.forEach((item) => {
          console.log(item);
          document.querySelectorAll(`[data-id="${item}"]`).forEach((item) => {
            item.classList.remove("rotated");
          });
        });
        setRotated([]);
      }, 1000);
    }

    console.log(rotated);
  };

  const handlePairs = (id) => {
    setRotated([...rotated, id]);
  };

  const handleFlip = () => {};

  const handleFoundPairs = () => {};

  return (
    <div className="board">
      <div className="innerBoard">
        {pokemons?.map((item: object, index: number) => {
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
