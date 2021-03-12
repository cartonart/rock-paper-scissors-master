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
        ? "You Win"
        : gameResult == 0
        ? "No one won"
        : "You lose"
      : null;
  return (
    <div className="results">
      <div className={`selection ${gameResult > 0 ? "winner" : ""}`}>
        <div className="selection-text">You picked</div>
        <div className="selection-inner">
          <Choice choice={userChoice} />
        </div>
      </div>
      <div className={`selection ${gameResult < 0 ? "winner" : ""}`}>
        <div className="selection-text">The house picked</div>
        {computerChoice && (
          <div className="selection-inner">
            <Choice choice={computerChoice} />
          </div>
        )}
      </div>
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
