import { useForm } from "react-hook-form"

export default function ValidatedForm () {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"})

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

    const handleRegistration = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
            <input type="text" name="username" {...register("username", registerOptions.username)} />
            <p>{errors?.username && errors.username.message}</p>
            <input type="password" name="password" {...register("password", registerOptions.password)} />
            <p>{errors?.password && errors.password.message}</p>
            <button>Submit</button>
        </form>
    )
}