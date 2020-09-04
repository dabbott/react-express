import React, { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const isMultipleOf3 = Math.floor(count / 3)

  useEffect(() => {
    if (count > 0) {
      alert(`${count} is divisible by 3!`)
    }
  }, [isMultipleOf3])

  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      Click HERE to increment: {count}
    </button>
  )
}
