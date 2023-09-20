import './Dice.css'
import Die from './Die.jsx'

export default function Dice ({dice}) {
    return (
        <section className="Dice">
            {dice.map((d, i) => <Die key={i} value={d} />)}
        </section>
    )
}