import { useState, useEffect } from 'react';
import Game from './Game';
import SearchBar from '../components/SearchBar';
import GameForm from './GameForm';

function GameShelf() {
  const [gamesData, setGamesData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/games`)
      .then((resp) => resp.json())
      .then((data) => {
        setGamesData(data);
      });
  }, []);

  const handleSearchInput = (searchQuery) => {
    const filteredGames = gamesData.filter((game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setGamesData(filteredGames);
  };

  const handleAddGame = (newGame) => {
    fetch(`http://localhost:3000/games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(newGame),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Error adding game.`);
        }
        return resp.json();
      })
      .then((newGameData) => {
        setGamesData((prevGames) => [...prevGames, newGameData]);
      })
      .catch((error) => {
        console.warn(`Error: ` + error);
      });
  };

  return (
    <>
      <main>
        <SearchBar
          query={query}
          onSearchInput={handleSearchInput}
          setQuery={setQuery}
        />
      </main>
      <div>
        <div className="game-shelf">
          {gamesData.length > 0 ? (
            gamesData.map((game) => (
              <Game
                key={game.id}
                game={game}
              />
            ))
          ) : (
            <h3>No games found. Please try again.</h3>
          )}
        </div>
        <div className="form-container">
          <p>Add a new game to your collection.</p>
          <GameForm handleAddGame={handleAddGame} />
        </div>
      </div>
    </>
  );
}

export default GameShelf;
