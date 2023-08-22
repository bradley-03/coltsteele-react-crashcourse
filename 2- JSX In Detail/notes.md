## Importing and Exporting Components

You can export in two ways:

The first method is for exporting a single 
```
export default function Greeter() {
    return <h1>Hello!</h1>;
}
```
Using this method, to import you would write
```
import Greeter from "./Greeter.js"
```

The second method is to export individual components (if you had multiple in the same file).
```
function Greeter() {
    return <h1>Hello!</h1>;
}
export {Greeter}
```
Using this method, to import you would write
```
import {Greeter} from "./Greeter.js"
```

## JSX Rules

You must explicitly close self-closing tags like <br/>
Components can only return a single element.

## React Fragment

If you don't want a wrapper element like a div or a form but you want a component to have multiple elements, you can wrap it in a react fragment.
```
<>
    <h1>Hello World</h1>
    <h2>H2</h2>
</>
```

## Evaluating JS Expressions in JSX

You can use {} to escape the JSX and have Javascript evaluations, for example:
```
export default function Greeter() {
    const name = "John"
    return <h1>Hello, {name}!</h1>; // renders as "Hello, John!"
} 
```

## Styling Components in React

The conventional way of styling React is to give your top element a class that matches the name of the component. Class is a reserved word in Javascript so instead you add the class with className.
```
export default function Greeter() {
  return <h1 className="Greeter">Hello!</h1>;
}
```
Create a css file matching the name of your component, and import it to the component file. The scope is not limited to just the component, so any component with the same className can also use these styles.