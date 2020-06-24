import React, { useState } from 'react'

const App = () => {
  const [diceRolls, setDiceRolls] = useState([1, 2, 3])

  const addDiceRoll = () => {
    let newDiceRoll = Math.floor(Math.random() * 6) + 1
    setDiceRolls(diceRolls.concat(newDiceRoll))
  }

  return (
    <div>
      <button onClick={addDiceRoll}>Roll dice</button>
      <ul>
        {diceRolls.map((diceRoll, index) => (
          <li key={index}>{diceRoll}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
