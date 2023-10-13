## Presentational and Logical Components
A presentational component doesn't have any state, and is primarily just about appearance / UI.
A logical component has state or related logic and isn't about specific UI.

## Component Structure
You cannot pass state upwards, so you have to push the state as high as possible. State flows downwards, so it can be passed to components below it. Functions can also be sent to a child as a prop. 