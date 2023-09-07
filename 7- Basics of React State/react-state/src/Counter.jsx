import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0)
    const incrementCount = () => setCount(count+1)
    
    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}