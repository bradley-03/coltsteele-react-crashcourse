import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function FormDemo () {
    const [name, setName] = useState("")
    const updateName = (e) => {
        setName(e.target.value)
    }
    const [slider, setSlider] = useState(25)
    const handleChange = (e, newval) => {
        setSlider(newval)
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <h1>Slider: {slider}</h1>
            <TextField id="filled-basic" label="Test Input" variant="filled" placeholder='Placeholder' onChange={updateName} />
            <Slider aria-label="Volume" value={slider} onChange={handleChange} />
        </div>
    )
}