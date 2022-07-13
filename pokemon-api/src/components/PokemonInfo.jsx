import React from 'react'

const PokemonInfo = (props) => {
    const {allPokemon} = props;
    console.log(allPokemon);
    return allPokemon.map((item) => <div>{item.name}</div>);
    };


export default PokemonInfo