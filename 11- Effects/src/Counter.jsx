import { useState, useEffect } from "react";

export default function Counter () {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const increment = () => {
        setCount(oldCount => oldCount+1)
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }

    useEffect (function myEffect () {
        console.log("Effect was Called")
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Count</button>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}