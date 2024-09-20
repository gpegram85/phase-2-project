import { Link } from 'react-router-dom';

function Game({ game }) {
  const { title, id, thumbnail } = game;

  return (
    <>
      <Link to={`/games/${id}`}>
        <img
          className="game-thumbnail"
          src={thumbnail}
          alt={title}
        />
      </Link>
    </>
  );
}

export default Game;
