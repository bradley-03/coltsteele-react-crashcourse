## What is React State?
State is data specific to an instance of a component that can change.

## What Goes in State?
* Data fetched from an API
* Form Information
* A variable that "decides" whether something is showing or hidden
* If something should change, it should go in state somewhere

## Using State
Create the state using the useState hook
```
const [count, setCount] = useState(0)
```
The first element of the array is the piece of state, the second is the function to change the piece of state.
You must call useState INSIDE a component.

Example of a component using state.
```
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
```