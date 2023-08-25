export const fetchPokemon = async () => {
  const randomIds = new Set();
  while (randomIds.size < 8) {
    const randomNumber = Math.ceil(Math.random() * 800);
    randomIds.add(randomNumber);
  }

  const numberArray = [...randomIds];

  // Fetch Pokemon for each random number

  const pokePromises = numberArray.map((id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  );
  const response = await Promise.all(pokePromises);
  const results = await Promise.all(response.map((res) => res.json()));

  const pokemons = results.flatMap((i) => [i, i]);

  for (let i = pokemons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pokemons[i];
    pokemons[i] = pokemons[j];
    pokemons[j] = temp;
  }

  return pokemons;
};
