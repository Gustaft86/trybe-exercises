import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </header>
    </div>
  );
}

export default App;
