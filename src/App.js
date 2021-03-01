import { useState } from "react"
import './App.css';
import Header from "./components/header/Header"
import Game from "./components/game/Game"

function App() {
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <Header score={score} />
      <Game setScore={setScore} score={score} />
    </div>
  );
}

export default App;
