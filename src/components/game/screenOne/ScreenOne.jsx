import Choice from "../choice/Choice";
import "./ScreenOne.scss";

const ScreenOne = ({ choices, updateUserChoice }) => {
  return (
    <div
      className="choices"
      style={{ backgroundImage: "url(/images/bg-triangle.svg)" }}
    >
      {choices.map((choice, i) => {
        const onClick = () => {
          updateUserChoice(i);
        };
        return (
          <div key={i}>
            <Choice choice={choice} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
};

export default ScreenOne;
