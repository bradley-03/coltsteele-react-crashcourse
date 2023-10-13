export default function Heading ({color='white', text, fontSize='50px'}) {
    return <h1 style={{color: color, fontSize: fontSize}}>{text}</h1>
}