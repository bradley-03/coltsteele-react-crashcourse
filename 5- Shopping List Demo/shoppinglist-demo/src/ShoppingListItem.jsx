import PropTypes from "prop-types"

export default function ShoppingListItem({ item }) {
    const styles = {
        color: item.completed && "grey",
        textDecoration: item.completed && "line-through"
    }
    return (
        <li style={{styles}}>{item.quantity} {item.item}</li>
    )
}

ShoppingListItem.propTypes = {
    item: PropTypes.object
}