import Box from "./Box";
import { useState } from "react";

export default function BoxGrid ({numBoxes=9}) {
    const [boxes, setBoxes] = useState(new Array(numBoxes).fill(false))

    const resetBoxes = () => setBoxes(new Array(numBoxes).fill(false))
    const toggleBox = (index) => {
        setBoxes(oldBoxes => oldBoxes.map((v, i) => {
            if (i === index) {
                return !v
            } 
            return v
        }))
    } 

    return (
        <div className="BoxGrid">
            {boxes.map((v, i) => <Box key={i} isActive={v} onClick={() => toggleBox(i)} />)}
            <button onClick={resetBoxes}>Reset</button>
        </div>
    )
}