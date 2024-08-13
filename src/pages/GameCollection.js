import GameShelf from "../components/GameShelf"
import { Outlet } from "react-router-dom"


function Collection() {

    return(
        <div>
            <GameShelf />
            <Outlet />
        </div>
    )
}

export default Collection