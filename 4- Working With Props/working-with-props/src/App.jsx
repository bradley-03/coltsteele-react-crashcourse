import Greeter from './Greeter.jsx'
import Die from './Die.jsx'
import ListPicker from './ListPicker.jsx'
import DoubleDice from './DoubleDice.jsx'
import './App.css'


function App() {
	return (
		<div>
			<Greeter name="Bill" />
			<Die/>
			<ListPicker list={["red", "green", "blue", "yellow"]} />
			<DoubleDice/>
		</div>
  	)
}

export default App
