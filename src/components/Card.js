import { useState, useEffect } from "react";

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
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

function Card({ pokemonDetail }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(pokemonDetail)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <div className="flex flex-col items-center bg-white border-2 border-gray-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={pokemon.sprites?.front_default}
          alt="card"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {!isNaN(pokemon.id)
              ? pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
              : ""}{" "}
            #{pokemon.id}
          </div>
          <div className="mb-3 text-gray-700 dark:text-gray-400">
            <div className="font-extrabold">
              Weight <p className="font-medium">{pokemon.weight / 10}kg</p>
            </div>
            <div className="font-extrabold">
              Height <p className="font-medium">{pokemon.height / 10}m</p>
            </div>
            <div className="font-extrabold">
              Type:{" "}
              <div
                className="inline-flex p-0.5 rounded-md justify-center items-center"
                style={{
                  backgroundColor: typeColors[pokemon.types?.[0].type.name],
                }}
              >
                {pokemon.types?.[0].type.name[0].toUpperCase()}
                {pokemon.types?.[0].type.name.slice(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
