import { useState } from "react";

export default function ShoppingListForm ({submitFunction}) {
    const [formData, setFormData] = useState({product: "", quantity: 1})
    const handleChange = (event) => {
        setFormData(currentData => {
            return {...currentData, [event.target.name]: event.target.value}
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        submitFunction(formData)
        setFormData({product: "", quantity: 1})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name:</label>
            <input type="text" name="product" placeholder="product name" id="product" value={formData.product} onChange={handleChange} />
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" min={1} value={formData.quantity} onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}