import './Button.css'

export default function Button ({text="Button", onClick}) {
    return <button className="Button" onClick={onClick}>{text}</button>
}