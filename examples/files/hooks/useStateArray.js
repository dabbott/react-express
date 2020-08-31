import React, { useState } from 'react'
import { render } from 'react-dom'

const randomDiceRoll = () => {
  return Math.floor(Math.random() * 6) + 1
}

export default function App() {
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

render(<App />, document.querySelector('#app'))
