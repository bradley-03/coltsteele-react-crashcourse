## Props
Props are like arguments that we can provide to our components. We use props to make configurable components.
You can define a prop like a html attribute.
```
<Greeter name="Bill"/>
```
To use the props in the function, pass an argument into the function and you will have an object with the prop names and their respective values.
```
export default function Greeter (props) {
    return <h1 className="Greeter">Hello, {props.name}!</h1>
}
```

## Non-String Props
To pass non-string props you simply surround your value with {}
```
<Die sides={20} />
<ListPicker list={["red", "green", "blue", "yellow"]} />
```

## Default Prop Values
When destructuring, add an = to your variable to set the default value.
```
export default function Die ({sides=6}) {
```

## Conditionals
If you want something to render based on a condition, you can use a turnary operator like this.
```
{num1 === num2 && <h3>You Win!</h3>}
```

## Dynamic Styles
You can pass your dynamic styles as an object using the same turnary operator logic as conditionals.
```
const styles = {color: isWinner ? "green" : "red"}
<div style={styles}>
```

## Rendering Arrays with Map
You can use the map method to turn an array into multiple LIs that can be rendered into a UL.
```
<p>Colour List</p>
<ul>
    {colours.map(c => <li style={{color: c}}>{c}</li>)}
</ul>
```