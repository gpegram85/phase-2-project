import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameCard() {
  const [game, setGame] = useState(null);
  const { gameId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/games/${gameId}`)
      .then((resp) => resp.json())
      .then((game) => setGame(game));
  }, [gameId]);

  return (
    <div>
      {game ? (
        <div>
          {game.title}
          <p>{game.description}</p>
          <div className="splash-container">
            <img
              src={`${process.env.PUBLIC_URL}${game.splash.slice(1)}`}
              alt="Game Thumbnail"
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GameCard;
