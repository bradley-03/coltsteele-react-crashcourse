import './App.css'
import Counter from "./Counter"
import Toggler from './Toggler'
import ColourGrid from './ColourGrid'

function App() {

  return (
    <div>
		{/* <Counter/>
		<Toggler/> */}
		<ColourGrid colours={["red", "orange", "yellow", "green", "blue"]}/>
    </div>
  )
}

export default App
