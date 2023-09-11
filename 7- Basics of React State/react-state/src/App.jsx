import './App.css'
import Counter from "./Counter"
import Toggler from './Toggler'
import ColourGrid from './ColourGrid'

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51BF",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FF9800",
  "#FF5722",
];

function App() {

  return (
    <div>
		{/* <Counter/>
		<Toggler/> */}
		<ColourGrid colours={colors}/>
    </div>
  )
}

export default App
