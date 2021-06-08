import React from "react";


const Pokemon = props =>{
  
    return(
        <>
        <div className="pokemon_card">      
         <img className="pokemon_image" src={props.url} alt={props.name}></img>
        <h2 className="p_name">{props.name}</h2>
        <ul className="type_list"> {props.types}</ul>
        </div>
        </>
    );
 
};
export default Pokemon;
