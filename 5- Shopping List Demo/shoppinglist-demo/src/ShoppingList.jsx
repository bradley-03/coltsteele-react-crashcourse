export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(i => <li key={i.id} style={{
                 color: i.completed && "grey",
                 textDecoration: i.completed && "line-through"
            }}>
                {i.quantity} {i.item}</li>)}
        </ul>
    )
}