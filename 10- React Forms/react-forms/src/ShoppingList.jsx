import { useState } from "react"
import ValidatedShoppingListForm from "./ValidatedShoppingListForm"
import { v4 as uuid } from 'uuid'

export default function ShoppingList () {
    const [list, setList] = useState([])

    const addItem = (item) => {
        setList(oldList => [...oldList, {...item, id: uuid()}])
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {list.map(i => <li key={i.id}>{i.quantity} {i.product}</li>)}
            </ul>
            <ValidatedShoppingListForm submitFunction={addItem} />
        </div>
    )
}