import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  useEffect(() => {
    console.log(Math.random() * 50)
  })

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + increment)
        }}
      >
        Current count: {count}
      </button>
      <button
        onClick={() => {
          setIncrement(increment + 1)
        }}
      >
        Current increment: {increment}
      </button>
    </div>
  )
}

export default App
