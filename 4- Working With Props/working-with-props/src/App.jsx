import { useState } from 'react'
import Greeter from './Greeter.jsx'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Greeter name="Bill" />
		</div>
  	)
}

export default App
