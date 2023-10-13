export default function DoubleDice () {
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1
    const isWinner = num1 === num2
    const styles = {color: isWinner ? "green" : "red"}

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You Win!</h3>}
            <p>First Number: {num1}</p>
            <p>Second Number: {num2}</p>
        </div>
    )
}