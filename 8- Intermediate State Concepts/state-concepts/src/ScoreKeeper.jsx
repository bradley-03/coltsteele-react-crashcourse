import { useState } from "react";

export default function ScoreKeeper () {
    const [scores, setScore] = useState({player1: 0, player2: 0})
    const addP1 = () => {
        setScore(oldScores => {return {...oldScores, player1: oldScores.player1+1}})
    }
    const addP2 = () => {
        setScore(oldScores => {return {...oldScores, player2: oldScores.player2+1}})
    }
    return (
        <div>
            <p>Player 1: {scores.player1}</p>
            <p>Player 2: {scores.player2}</p>
            <button onClick={addP1}>+1 Player 1</button>
            <button onClick={addP2}>+1 Player 2</button>
        </div>
    )
}