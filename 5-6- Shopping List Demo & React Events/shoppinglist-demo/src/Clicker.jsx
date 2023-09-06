function handleClick () {
    console.log("Button Clicked!")
}

export default function Clicker () {
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}