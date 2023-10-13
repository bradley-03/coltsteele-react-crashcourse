import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeperNew from './ScoreKeeperNew'
import './App.css'

function App() {
	return (
		<>
			<h1>State Demo</h1>
			{/* <Counter/> */}
			{/* <Dumbo/> */}
			{/* <ScoreKeeper/> */}
			{/* <EmojiClicker/> */}
			<ScoreKeeperNew players={4} />
		</>
	)
}

export default App
