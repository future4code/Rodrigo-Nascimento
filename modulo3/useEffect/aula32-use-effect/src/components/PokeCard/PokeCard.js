import React, { useEffect, useState } from "react";
import axios from "axios";


export default function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [])

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon])

    const pegaPokemon = (pokeName) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setPokemon(response.data);
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }

    return (
        <div>
            {console.log(props, "props")}
            {console.log(pokemon, "pokemon")}
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    );
}
