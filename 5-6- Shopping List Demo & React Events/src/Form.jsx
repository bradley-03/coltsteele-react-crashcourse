function handleFormSubmit (event) {
    event.preventDefault()
    console.log("Form Submitted.")
}

export default function Form () {
    return (
        <form onSubmit={handleFormSubmit} >
            <button>Submit</button>
        </form>
    )
}