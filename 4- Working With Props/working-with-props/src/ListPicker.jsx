export default function ListPicker({ list = ["Null"] }) {
    const randomItem = Math.floor(Math.random() * list.length)
    return (
        <div>
            <h2>Your random list item is: {list[randomItem]}</h2>
        </div>
    )
}