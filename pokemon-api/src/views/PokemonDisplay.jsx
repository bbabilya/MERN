import React, {useState} from 'react'
import PokemonInfo from '../components/PokemonInfo'


const PokemonDisplay = () => {
    const [allPokemon, setallPokemon] = useState();

    const pokemonList = (allPokemon) => setallPokemon(allPokemon)

    const fetchPokemon = () =>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=804&offset=0`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                pokemonList(jsonResponse.results)
            })
            .catch(err=> console.log(err))
    }


    return (
        <div class="bg-primary mx-auto w-25 d-flex justify-content-center flex-column align-items-center rounded m-5 p-2 text-wrap">
            <button onClick={fetchPokemon} class="btn btn-secondary"> Fetch</button>
            {
                allPokemon?
                <PokemonInfo allPokemon={allPokemon}/> :
                <h5> Fetch a Pokemon!</h5>
            }
        </div>
    )
}

export default PokemonDisplay