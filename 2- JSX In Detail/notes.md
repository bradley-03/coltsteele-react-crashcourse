## Importing and Exporting Components

You can export in two ways:

The first method is for exporting a single 
```export default function Greeter() {
  return <h1>Hello!</h1>;
}```
Using this method, to import you would write
```import Greeter from "./Greeter.js"```

The second method is to export individual components (if you had multiple in the same file).
```function Greeter() {
  return <h1>Hello!</h1>;
}
export {Greeter}```
Using this method, to import you would write
```import {Greeter} from "./Greeter.js"```

