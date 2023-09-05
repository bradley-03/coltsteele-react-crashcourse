import ShoppingListItem from "./ShoppingListItem"
import PropTypes from "prop-types"

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(i => <ShoppingListItem key={i.id} item={i} />)}
        </ul>
    )
}

ShoppingList.propTypes = {
    items: PropTypes.object
}