import Choice from "../choice/Choice"
import "./ScreenOne.scss"

const ScreenOne = ({choices, updateUserChoice}) => {
return <div className="choices" style={{backgroundImage:"url(/images/bg-triangle.svg)"}}>
    {choices.map((choice, i )=> {
    const onClick = ()=>{updateUserChoice(i)}
    return <Choice choice={choice} onClick={onClick}/>
    })}
</div>
}

export default ScreenOne