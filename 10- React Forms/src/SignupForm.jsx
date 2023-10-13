import { useState } from "react";

export default function SignupForm () {
    const [formData, setFormData] = useState({firstName: "", lastName: ""})

    const handleChange = (event) => {
        const fieldName = event.target.name
        const value = event.target.value

        setFormData(oldData => {
            return {...oldData, [fieldName]: value}
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <div>
            <label htmlFor="firstname">First Name: </label>
            <input name="firstName" id="firstname" type="text" placeholder="First name" value={formData.firstName} onChange={handleChange} />
            <label htmlFor="lastname">Last Name: </label>
            <input name="lastName" id="lastname" type="text" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}