import deck from './data/deck'
import './App.css';

function App() {
  var currentDeck = deck.getPlayDeck();
  return (
    <div className="App">
      {currentDeck.map((card, key) => {
        return (<div key={key}>
          {card}
        </div>);
      })}
    </div>
  );
}

export default App;
