import "./Die.css"

export default function Dice ({value, colour="firebrick"}) {
    return <div className="Die" style={{backgroundColor: colour}}>{value}</div>
}