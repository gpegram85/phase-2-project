import { useState, useEffect } from "react"
import Game from "./Game"
import SearchBar from "../components/SearchBar"

function GameShelf() {

    const [gamesData, setGamesData] = useState([])
    const [initialGames, setInitialGames] = useState([])

    useEffect(() => {
      fetch(`http://localhost:3000/games`)
      .then(resp => resp.json())
      .then(data => {
        setGamesData(data)
        setInitialGames(data)
      })
    }, [])
  
    const onSearchInput = (searchQuery) => {
      if(searchQuery === "") {
        setGamesData(initialGames)
      } else {
        const filteredGames = initialGames.filter(game =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setGamesData(filteredGames)
      }
    }

    const [newGame, setNewGame] = useState({
      title: "",
      splash: "",
      description: "",
      genre: ""
  });
  
  const handleChange = (e) => {
      const { name, value } = e.target;
      setNewGame({
          ...newGame,
          [name]: value
      });
  };

  const onGameSubmit = (e) => {
    e.preventDefault()

    handleAddGame(newGame)

    setNewGame({
        title: "",
        splash: "",
        description: "",
        genre: ""
    })
}

    const handleAddGame =(newGame) => {
      
      fetch(`http://localhost:3000/games/`, {
          method: "POST",
          headers: {
              "Content-Type" : "Application/JSON"
          },
          body: JSON.stringify(newGame)
      })
      .then(resp => {
          if(!resp.ok) {
              throw new Error(`Error adding game.`)
          } return resp.json()
      })
      .then((newGameData) => {
          setGamesData(prevGames => [...prevGames, newGameData])
          setInitialGames(prevGames => [...prevGames, newGameData])
      })
      .catch(error => {
          console.warn(`Error: ` + error)
      })
  }

    return(
      <>
        <main>
          <SearchBar onSearchInput={onSearchInput}/>
        </main>
        <div>
          <div className="game-shelf">
          {gamesData.length > 0 ? (
              gamesData.map((game) => <Game key={game.id} game={game} />)
            ) : (
              <h3>No games found. Please try again.</h3>
            )}
          </div>
          <div className="form-container">
          <p>Add a new game to your collection.</p>
          <form onSubmit={onGameSubmit} className="form">
            <input  
                type="text" 
                name="name" 
                placeholder="Game title..." 
                value={newGame.title}
                onChange={handleChange}
                />
            <input  
                type="text" 
                name="image" 
                placeholder="Game Image URL..." 
                value={newGame.splash}
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
                name="thumbnail" 
                placeholder="Game thumbnail URL..."
                value={newGame.thumbnail} 
                onChange={handleChange}
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
        </>
    )
}

export default GameShelf