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