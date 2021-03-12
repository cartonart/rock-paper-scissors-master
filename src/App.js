import { useState } from "react"
import './App.css';
import Header from "./components/header/Header"
import Game from "./components/game/Game"
import Rules from "./components/game/rules/Rules";

function App() {
  const [score, setScore] = useState(0)

  return (
    <div id="app_container" className="App">
      <Header score={score} />
      <Game setScore={setScore} score={score} />
      <Rules />
    </div>
  );
}

export default App;
