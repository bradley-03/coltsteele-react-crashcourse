import { useState } from 'react'
import Greeter from './Greeter.jsx'
import Die from './Die.jsx'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Greeter name="Bill" />
			<Die/>
		</div>
  	)
}

export default App
