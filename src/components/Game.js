import { Link, useParams } from "react-router-dom"

function Game({ game }) {

    const { title, id } = game

    return(
        <div>
            <h3>
                <Link to={`/games/${id}`}>{title}</Link>
            </h3>
        </div>
    )
}

export default Game