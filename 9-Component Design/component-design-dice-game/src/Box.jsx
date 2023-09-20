import './Box.css'

export default function Box ({isActive, onClick}) {
    return <div className="Box" onClick={onClick} style={{backgroundColor: isActive ? "red" : "black"}}></div>
}