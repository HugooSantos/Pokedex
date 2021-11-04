const fetchPokemon = () => {
  const getPokemonUrl = id = `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromisses = []

  for (let i = 1; i <= 150; i++) {
    pokemonPromisses.push(fetch(getPokemonUrl(i)).then(response => response.json()))
  }
    Promisse.all(pokemonPromisses).then(pokemons => {
      console.log(pokemons)
    })
  }

fetchPokemon() 
