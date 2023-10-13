import ColourBox from "./ColourBox"
import './ColourGrid.css'

export default function ColourGrid({ colours }) {
    const boxes = []
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColourBox colours={colours }/>)
    }
    return (
        <div className="ColourGrid">
            {boxes}
        </div>
    )
}