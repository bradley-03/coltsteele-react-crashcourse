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

## Validating Forms with react-hook-form
Start by installing the react-hook-form package.
```
npm install react-hook-form
```
Require it in the component
```
import { useForm } from "react-hook-form"
```
Use the initializer function for access to the functions we need.
```
const {register, handleSubmit, formState: {errors}} = useForm()
```
Store your validation options in an object.
```
const registerOptions = {
    username: {
        required: "Username cannot be empty",
        minLength: {
            value: 3,
            message: "Username must be at least 3 characters"
        }
    },
    password: {
        required: "Password cannot be empty",
        minLength: {
            value: 7,
            message: "Password must be at least 7 characters"
        }
    }
}
```
Register all your inputs using the register function, and use the handleSubmit to validate before you pass through to your actual form submit handler.
Example form using validation:
```
return (
    <form onSubmit={handleSubmit(handleRegistration)}>
        <input type="text" name="username" {...register("username", registerOptions.username)} />
        <p>{errors?.username && errors.username.message}</p>
        <input type="password" name="password" {...register("password", registerOptions.password)} />
        <p>{errors?.password && errors.password.message}</p>
        <button>Submit</button>
    </form>
)
```
Adding onChange mode to your function will live update your validation instead of waiting for submission.
```
const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"})
```