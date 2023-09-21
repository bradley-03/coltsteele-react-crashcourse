## Forms in React
In react, form elements use state to keep track of its value. When making a form element, react will control what is shown in the element and what its value is, which will be kept in state.
```
import { useState } from "react"

export default function UsernameForm () {
    const [username, setUsername] = useState("")
    const updateUsername = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={updateUsername} />
            <button>Submit</button>
        </div>
    )
}
```

## Labelling in React
"for" is a reserved keyword in javascript, so you have to use htmlFor instead.
```
<label htmlFor="username">Username: </label>
```