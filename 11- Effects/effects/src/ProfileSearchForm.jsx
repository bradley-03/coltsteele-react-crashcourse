import { useState } from "react"

export default function ProfileSearchForm ({search}) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        search(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={searchTerm} />
            <button>Submit</button>
        </form>
    )
}