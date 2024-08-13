import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function GameCard() {

    const [game, setGame] = useState()
    const { gameId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/games/${gameId}`)
        .then(resp => resp.json())
        .then(game => setGame(game))
    }, [gameId])


    return(
        <div>
            {game ? game.title : <p>Loading...</p>}
        </div>
    )
}

export default GameCard