import React from 'react';
import '../stylesheets/App.css';
import data from '../data.json';
import PokeList from "./PokeList";

const App = () => {
  return(
    <div className="App_div">
      <header className="App_header">
       <h1 className="App_title"> Mi lista de pokemon</h1>
      </header>
      <main className="App_main">
             <PokeList data={data}/>
      </main>
    </div>
  );
};
export default App;