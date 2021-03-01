import { useState } from "react";
import ScreenOne from "./screenOne/ScreenOne";
import ScreenTwo from "./screenTwo/ScreenTwo";

const Game = ({ setScore, score }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const choices = [
    { name: "paper", image: "/images/icon-paper.svg", color: "#5671F5" },
    { name: "scissors", image: "/images/icon-scissors.svg", color: "#F2AB26" },
    { name: "rock", image: "/images/icon-rock.svg", color: "#DC2E4E" },
  ];

  const getGameResults = (choice1, choice2) => {
    const diff = choice1 - choice2;
    if (diff === 2) return -1;
    if (diff === -2) return 1;
    return diff;
  };

  const updateUserChoice = (choice) => {
    setUserChoice(choice);
    setTimeout(() => {
      var compchoice = Math.floor(Math.random() * choices.length);
      const result = getGameResults(choice, compchoice);
      setComputerChoice(compchoice);
      setGameResult(result);
      if (result > 0) {
        setScore(score + 1);
      }
    }, 500);
  };

  const startNewGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setGameResult(null);
  };

  const userChoiceObject =
    typeof userChoice === "number" ? choices[userChoice] : null;

  const computerChoiceObject =
    typeof computerChoice === "number" ? choices[computerChoice] : null;

  return userChoiceObject ? (
    <ScreenTwo
      gameResult={gameResult}
      userChoice={userChoiceObject}
      computerChoice={computerChoiceObject}
      startNewGame={startNewGame}
    />
  ) : (
    <ScreenOne choices={choices} updateUserChoice={updateUserChoice} />
  );
};

export default Game;
