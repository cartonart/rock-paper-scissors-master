import "./Choice.scss";

const Choice = ({ choice, onClick }) => {
  return (
    <button className="choice" onClick={onClick}>
      <div className="circle" style={{ backgroundColor: choice.color }}>
        <div
          className="inner-circle"
          style={{ backgroundImage: `url(${choice.image})` }}
        ></div>
      </div>
    </button>
  );
};

export default Choice;
