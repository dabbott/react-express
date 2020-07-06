import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0 && count % 5 == 0) {
      alert(`${count} is divisible by 5!`)
    }
    console.log(`I run only once: ${count}`)
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click HERE to increment: {count}
      </button>
    </div>
  )
}

export default App
