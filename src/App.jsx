import { useState } from "react";
import "./app.css";
import Die from "./compnents/Die/Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

function App() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map((item) => ({
      id: nanoid(),
      number: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }
  const [dice, setDice] = useState(() => generateAllNewDice());
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.number == dice[0].number);

  function rollDice() {
    setDice((prev) =>
      prev.map((die) =>
        die.isHeld ? die : { ...die, number: Math.ceil(Math.random() * 6) }
      )
    );
  }

  const diceElement = dice.map((item) => (
    <Die
      hold={hold}
      id={item.id}
      key={item.id}
      value={item.number}
      isHeld={item.isHeld}
    />
  ));
  function hold(id) {
    setDice((prev) =>
      prev.map((item) => {
        return item.id != id ? item : { ...item, isHeld: !item.isHeld };
      })
    );
  }

  function stratNewgame() {
    setDice(generateAllNewDice());
  }

  return (
    <>
      <main className="Main">
        {gameWon ? <ReactConfetti /> : null}
        <div className="DieContainer">{diceElement}</div>

        {gameWon ? (
          <button className="roll-dice" onClick={stratNewgame}>
            New game
          </button>
        ) : (
          <button className="roll-dice" onClick={rollDice}>
            Roll
          </button>
        )}
      </main>
    </>
  );
}

export default App;
