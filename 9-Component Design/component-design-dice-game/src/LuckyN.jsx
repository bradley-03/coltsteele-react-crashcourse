import { useState } from "react";
import { getRolls } from './utils'
import Dice from "./Dice";
import './LuckyN.css'

export default function LuckyN ({title="Dice Game", numDice=2, winCheck}) {
    const newRolls = () => getRolls(numDice)

    const [rolls, setRolls] = useState(newRolls)

    const rerollDice = () => setRolls(newRolls)
    const isWinner = winCheck(rolls)

    return (
        <div className="LuckyN">
            <h1>{title} {isWinner && "| You Win!"}</h1>
            <Dice dice={rolls} />
            <button onClick={rerollDice}>Re-Roll</button>
        </div>
    )
}