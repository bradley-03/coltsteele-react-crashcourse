import LuckyN from "./LuckyN";

function App() {
	return (
		<>
			<LuckyN goal={9} />
			<LuckyN numDice={3} goal={11} />
		</>
	);
}

export default App;
