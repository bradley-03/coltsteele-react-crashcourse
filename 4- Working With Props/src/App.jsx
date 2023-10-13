import Greeter from './Greeter.jsx'
import Die from './Die.jsx'
import ListPicker from './ListPicker.jsx'
import DoubleDice from './DoubleDice.jsx'
import Heading from './Heading.jsx'
import ColourList from './ColourList.jsx'
import Slots from './Slots.jsx'
import './App.css'


function App() {
	return (
		<div>
			<Greeter name="Bill" />
			<Die/>
			<ListPicker list={["red", "green", "blue", "yellow"]} />
			<DoubleDice/>
			<Heading color="green" text="Heading" fontSize="45px"/>
			<ColourList colours={["red", "pink", "green"]} />
			<Slots val1="🍒" val2="🍒" val3="🍒" />
		</div>
  	)
}

export default App
