import React, { useState } from 'react';

export default function GameForm({ handleAddGame }) {
  const onGameSubmit = (e) => {
    e.preventDefault();

    handleAddGame(newGame);

    setNewGame({
      title: '',
      splash: '',
      description: '',
      genre: '',
      thumbnail: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGame({
      ...newGame,
      [name]: value,
    });
  };

  const [newGame, setNewGame] = useState({
    title: '',
    splash: '',
    description: '',
    genre: '',
    thumbnail: '',
  });

  return (
    <div>
      <form
        onSubmit={onGameSubmit}
        className="form"
      >
        <input
          type="text"
          name="title"
          placeholder="Game title..."
          value={newGame.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Game thumbnail URL..."
          value={newGame.thumbnail}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Game description..."
          value={newGame.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Game genre..."
          value={newGame.genre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="splash"
          placeholder="Game Image URL..."
          value={newGame.splash}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
