import { useState } from "react";
import { getRolls, sum } from './utils'
import Dice from "./Dice";
import './LuckyN.css'

export default function LuckyN ({numDice=2, goal=7}) {
    const newRolls = () => getRolls(numDice)

    const [rolls, setRolls] = useState(newRolls)

    const rerollDice = () => setRolls(newRolls)
    const isWinner = sum(rolls) === goal

    return (
        <div className="LuckyN">
            <h1>Lucky {goal} {isWinner && "You Win!"}</h1>
            <Dice dice={rolls} />
            <button onClick={rerollDice}>Re-Roll</button>
        </div>
    )
}