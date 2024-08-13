import { Link } from "react-router-dom"

function Game({ game }) {

    const { title, id, thumbnail, description } = game

    return(
        <>
            <img className="game-thumbnail" src={thumbnail} alt={title}/>
        </>
    )
}

export default Game

