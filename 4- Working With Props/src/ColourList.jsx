export default function ColourList({ colours }) {
    return (
        <div>
            <p>Colour List</p>
            <ul>
                {colours.map(c => <li style={{color: c}}>{c}</li>)}
            </ul>
        </div>
    )
}