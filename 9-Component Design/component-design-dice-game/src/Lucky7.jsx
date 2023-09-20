import { useState } from "react";
import { getRolls, sum } from "./utils";
import "./Lucky7.css";
import Die from './Die.jsx'

function Lucky7() {
	const [dice, setDice] = useState(getRolls(2));
	const won = sum(dice) === 7;

	function roll() {
		setDice(getRolls(2));
	}

	return (
		<main className="Lucky7">
			<h1>Lucky7 {won && "You won!"}</h1>
			<section className="Lucky7-dice">
				<Die value={dice[0]}/>
				<Die value={dice[1]}/>
			</section>
			<button onClick={roll}>Roll Again!</button>
		</main>
	);
}

export default Lucky7;
