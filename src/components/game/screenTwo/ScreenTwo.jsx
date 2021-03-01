import Choice from "../choice/Choice";
import "./ScreenTwo.scss";

const ScreenTwo = ({
  gameResult,
  userChoice,
  computerChoice,
  startNewGame,
}) => {
  const gameResultText =
    typeof gameResult == "number"
      ? gameResult > 0
        ? "You Win!"
        : gameResult == 0
        ? "No one won!"
        : "You loose"
      : null;
  return (
    <div class="results">
      <div>
        <Choice choice={userChoice} />
      </div>
      <div>{computerChoice && <Choice choice={computerChoice} />}</div>
      {computerChoice && (
        <div>
          <div>{gameResultText && gameResultText}</div>
          <button onClick={startNewGame}>play again</button>
        </div>
      )}
    </div>
  );
};

export default ScreenTwo;
