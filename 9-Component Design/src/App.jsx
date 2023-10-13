import LuckyN from "./LuckyN";
import {sum} from './utils'
import BoxGrid from "./BoxGrid";

function lessThan4 (rolls) {
	return sum(rolls) < 4
}

function sameNumbers (rolls) {
	return rolls.every((v) => v === rolls[0])
}

function App() {
	return (
		<>
			{/* <LuckyN title="Same Numbers" numDice={3} winCheck={sameNumbers} />
			<LuckyN title="Less than 4" numDice={2} winCheck={lessThan4} /> */}
			<BoxGrid />

		</>
	);
}

export default App;
