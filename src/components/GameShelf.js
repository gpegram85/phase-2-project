import { useState, useEffect } from "react"
import Game from "./Game"

function GameShelf() {

    const [gamesData, setGamesData] = useState([])

    useEffect(() => {
      fetch(`http://localhost:3000/games`)
      .then(resp => resp.json())
      .then(data => setGamesData(data))
    }, [])
  
    const logGames = () => {
      console.log("Fetched Games: ", gamesData)
    }

    return(
        <div>
          {/* <button onClick={logGames}>Log Games</button> */}
          <div className="game-shelf">
            {gamesData.map((game) => {
                return <Game key={game.id} game={game} />
            })}
          </div>
        </div>
    )
}

export default GameShelf