import pokeball from "/Pokeball.svg";

export const Card = ({ pokemon, handlePairs }) => {
  const details = {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    type: pokemon.types[0].type.name,
  };
  console.log(pokemon);

  const handleRotate = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget);

    handlePairs(e.currentTarget.dataset.id);
    e.currentTarget.classList.add("rotated");
  };

  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  console.log(colours[details.type]);

  return (
    <div className="card" data-id={details.id} onClick={handleRotate}>
      <div className="card__face front">
        <img src={pokeball} />
      </div>
      <div
        className="card__face back"
        style={{ backgroundColor: colours[details.type] }}
      >
        <div className="image_wrapper">
          <img src={details.image} />
        </div>
      </div>
    </div>
  );
};
