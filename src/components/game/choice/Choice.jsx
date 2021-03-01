import "./Choice.scss"

const Choice = ({choice,onClick}) => {
    console.log({choice})
    return <button className="choice"
    onClick={onClick} >
        <div class="circle" style={{backgroundColor:choice.color}}>
            <div class="inner-circle">
                <img src={choice.image}/>
            </div>
        </div>
    </button>
}

export default Choice