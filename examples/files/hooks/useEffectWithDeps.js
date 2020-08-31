import React, { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0 && count % 3 == 0) {
      alert(`${count} is divisible by 3!`)
    }
  }, [count])

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
