## Updating State Depending on Old Value
If your state needs to use the old value, you need to write a function when you set the state. This is because the actual value of the state doesn't update until the component is re-rendered.
```
const increaseCount3 = () => {
    setCount(currentCount => currentCount + 1)
    setCount(currentCount => currentCount + 1)
    setCount(currentCount => currentCount + 1)
}
```