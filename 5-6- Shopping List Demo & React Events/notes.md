## Key Prop
Every LI in a list needs a unique identifier or you will get console / eslint errors. This ID can be anything, however it usually comes from the data you're receiving.

## Prop Types
Prop Types are good, but are fading in popularity due to things like TypeScript. To use prop types, you require the package and define an object with the types.
```
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
```
All proptypes can be found [here](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)

## Click Events
You connect click events to functions inline.
```
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
```