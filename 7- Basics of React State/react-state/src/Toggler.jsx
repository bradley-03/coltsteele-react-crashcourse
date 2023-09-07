import { useState } from "react"
import "./Toggler.css"

export default function Toggler () {
    const [isHappy, setIsHappy] = useState(true)
    const toggleHappiness = () => setIsHappy(!isHappy)
    return <p className="Toggler" onClick={toggleHappiness}>{isHappy ? "🙂" : "🙁"}</p>
}