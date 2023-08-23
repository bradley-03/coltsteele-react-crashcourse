import { useState } from 'react'
import Greeter from './Greeter.jsx'
import Die from './Die.jsx'
import ListPicker from './ListPicker.jsx'
import './App.css'


function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Greeter name="Bill" />
			<Die/>
			<ListPicker list={["red", "green", "blue", "yellow"]} />
		</div>
  	)
}

export default App
