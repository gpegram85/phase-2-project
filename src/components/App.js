import React, { useEffect, useState } from "react";

function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/games`)
    .then(resp => resp.json())
    .then(data => setGames(data))
  }, [])

  const logGames = () => {
    console.log("Fetched Games: ", games)
  }

  return (
    <div className="App">
      <p>Placeholder</p>
    </div>
  );
}

export default App;
