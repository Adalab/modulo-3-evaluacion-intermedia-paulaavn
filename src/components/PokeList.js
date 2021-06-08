import React from "react";
import Pokemon from "./Pokemon";


const PokeList = (props)=> {
    const PokemonList = props.data.map((item, id) =>{
        return(
            <li key={id} className="pokemon_item">
                <Pokemon url = {item.url} name = {item.name}types= {item.types}/>
                        </li>
        );
    });
    return <ul className="pokemon_list">{PokemonList}</ul>
}
export default PokeList;
