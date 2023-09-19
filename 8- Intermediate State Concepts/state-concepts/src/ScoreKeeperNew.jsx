import { useState } from "react";

export default function ScoreKeeperNew ({players=2, target=3}) {
    const [scores, setScores] = useState(new Array(players).fill(0))

    const addPoint = (player) => {
        if (scores[player] >= target) {return}
        setScores(oldScores => {
            const newScores = [...oldScores]
            newScores[player] = newScores[player] +1
            return newScores
        })
    }

    const resetScores = () => {
        setScores(new Array(players).fill(0))
    }

    return (
        <div>
            <ul>
                {scores.map((p, i) => <li key={i}>
                    Player{i + 1} : {p}
                    <button onClick={() => addPoint(i)}>+1</button>
                    {p >= target ? "WINNER!" : ""}
                </li>)}
            </ul>
            
            <button onClick={resetScores}>Reset</button>
        </div>
    )
}