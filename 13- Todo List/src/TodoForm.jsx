import ListItem from "@mui/material/ListItem"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import CreateIcon from '@mui/icons-material/Create';
import { useState } from "react"

export default function TodoForm({ submit }) {
    const [text, setText] = useState("")

    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <ListItem>
                <TextField id="outlined-basic" label="New Todo" variant="outlined" onChange={handleChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton aria-label="create new todo" onClick={handleSubmit}><CreateIcon /></IconButton>
                        </InputAdornment>,
                    }}
                />
            </ListItem>
        </form>

    )
}