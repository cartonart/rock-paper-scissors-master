import "./Header.scss"

const Header = ({score}) => {
  return <div className="header">
    <div>ROCK<br/>PAPER<br/>SCISSORS</div>
    <div>score
      <div>{score || 0}</div>
    </div>
  </div>;
};

export default Header;
