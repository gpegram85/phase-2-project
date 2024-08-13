import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import GameShelf from "../components/GameShelf"


function Collection() {

    return(
        <div>
            <NavBar />
            <GameShelf />
        </div>
    )
}

export default Collection