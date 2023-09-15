## Updating State Depending on Old Value
If your state needs to use the old value, you need to write a function when you set the state. This is because the actual value of the state doesn't update until the component is re-rendered.
```
const increaseCount3 = () => {
    setCount(currentCount => currentCount + 1)
    setCount(currentCount => currentCount + 1)
    setCount(currentCount => currentCount + 1)
}
```

## Working with Objects in State
Objects need to be copied to a new object or the component will not re-render as the object is the same.
```
const [scores, setScore] = useState({player1: 0, player2: 0})
const addP1 = () => {
    setScore(oldScores => {return {...oldScores, player1: oldScores.player1+1}})
}
```

## Arrays In State
Similarly to objects, the best way to update an array is to use the spread operator to create a copy.
```
const [emojis, setEmojis] = useState(["🙂"])
const addEmoji = () => {
    setEmojis(oldEmojis => [...oldEmojis, "🙂"])
} 
```