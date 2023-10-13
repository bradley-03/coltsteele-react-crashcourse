import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0)
    const increaseCount1 = () => setCount(count+1)
    const increaseCount3 = () => {
        setCount(currentCount => currentCount + 1)
        setCount(currentCount => currentCount + 1)
        setCount(currentCount => currentCount + 1)
    }

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={increaseCount1}>Increase by 1</button>
            <button onClick={increaseCount3}>Increase by 3</button>
        </div>
    )
}