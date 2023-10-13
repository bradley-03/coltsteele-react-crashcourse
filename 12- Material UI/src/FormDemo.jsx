import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import Box from '@mui/material/Box';

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
        <Box sx={{border: "1px solid black", p: 2, borderRadius: 5, width: 300, height: 300, m: "0 auto"}}>
            <h1>{name}</h1>
            <h1>Slider: {slider}</h1>
            <TextField id="filled-basic" label="Test Input" variant="filled" placeholder='Placeholder' onChange={updateName} />
            <Slider aria-label="Volume" value={slider} onChange={handleChange} />
        </Box>
    )
}