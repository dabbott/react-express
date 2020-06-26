import React, { useState } from 'react'

const randomDiceRoll = () => {
  return Math.floor(Math.random() * 6) + 1
}

const App = () => {
  const [diceRolls, setDiceRolls] = useState([1, 2, 3])

  return (
    <div>
      <button
        onClick={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()])
        }}
      >
        Roll dice
      </button>
      <ul>
        {diceRolls.map((diceRoll, index) => (
          <li key={index}>{diceRoll}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
