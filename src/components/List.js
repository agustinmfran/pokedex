import React, { useState, useEffect } from "react";
import Card from "./Card";

function List() {
  const [pokemonList, SetPokemonList] = useState([]);
  console.log({ pokemonList });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => SetPokemonList(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 m-4">
      {pokemonList.map((pokemon, index) => {
        const pokemonDetail = pokemon.url;
        return (
          <div key={index}>
            <Card pokemonDetail={pokemonDetail} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
