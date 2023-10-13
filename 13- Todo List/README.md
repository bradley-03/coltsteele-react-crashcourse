## Local Storage

useEffect will update when the todos array changes, so you can save the new data to localstorage.
```
useEffect(() => {
    localStorage.setItem(
        'todos',
        JSON.stringify(todos)
    )
}, [todos])
```
Then initialize the localStorage with a simple function.
```
const initData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) return []
    return data
}

const [todos, setTodos] = useState(initData)
```