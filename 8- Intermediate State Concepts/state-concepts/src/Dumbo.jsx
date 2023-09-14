import { useState } from "react";

function generateGameboard () {
    console.log("Creating Gameboard")
    return Array(5000)
}
export default function Dumbo () {
    const [game, setBoard] = useState(generateGameboard)
    return <button onClick={() => setBoard("hello!")}>Change State</button>
}