import { Link } from "react-router-dom"

function Game({ game }) {

    const { title, id, thumbnail } = game

    const handleDisplayDetail = () => {
        console.log(id)
    }

    return(
        <>
            <Link to={`/games/${id}`}>
                <img className="game-thumbnail" src={thumbnail} alt={title} onClick={handleDisplayDetail}/>
            </Link>
        </>
    )
}

export default Game

