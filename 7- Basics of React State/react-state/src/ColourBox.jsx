import './ColourBox.css'
import { useState } from 'react'

export default function ColourBox ({defaultColour, colours}) {
    const [colour, setColour] = useState(defaultColour)
    const newColour = () => setColour(colours[Math.floor(Math.random() * colours.length)]) 
    return (
        <div className="ColourBox" style={{backgroundColor: colour}} onClick={newColour} ></div>
    )
}