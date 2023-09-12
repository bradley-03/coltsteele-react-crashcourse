import './ColourBox.css'
import { useState } from 'react'

export default function ColourBox ({colours}) {
    const randomColour = () => colours[Math.floor(Math.random() * colours.length)]

    const [colour, setColour] = useState(randomColour)
    const newColour = () => setColour(randomColour) 

    return (
        <div className="ColourBox" style={{backgroundColor: colour}} onClick={newColour} ></div>
    )
}