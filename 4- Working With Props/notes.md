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