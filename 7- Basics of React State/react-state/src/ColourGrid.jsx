import ColourBox from "./ColourBox"
import './ColourGrid.css'

export default function ColourGrid({ colours }) {
    const randomColour = () => colours[Math.floor(Math.random() * colours.length)]
    return (
        <div className="ColourGrid">
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />
            <ColourBox defaultColour={randomColour} colours={colours} />

        </div>
    )
}