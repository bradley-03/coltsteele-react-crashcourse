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

## Multiple Inputs
For multiple inputs, you can use an object to keep track of all your form data, and write your function to get the specific input name and value, which you can use to update the state.
```
const [formData, setFormData] = useState({firstName: "", lastName: ""})

const handleChange = (event) => {
    const fieldName = event.target.name
    const value = event.target.value

    setFormData(oldData => {
        return {...oldData, [fieldName]: value}
    })
}
```
Example of what an input would look like with this code:
```
<input name="firstName" id="firstname" type="text" placeholder="First name" value={formData.firstName} onChange={handleChange} />
```
Naming each form field is required for this method, and must match the name of the object field.