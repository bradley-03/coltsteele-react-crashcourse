import { useState } from "react";
import Rating from '@mui/material/Rating';

export default function RatingDemo() {
    const [value, setValue] = useState(0)

    return (
        <div>
            <h1>Rating: {value}</h1>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                size="large"
                max={3}
                precision={0.5}
            />

        </div>

    )
}