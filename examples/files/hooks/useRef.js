import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom'

function App() {
  const intervalRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(() => setCount(count => count + 1), 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <>
      <div style={{ fontSize: 120 }}>{count}</div>
      <button
        onClick={() => {
          clearInterval(intervalRef.current)
        }}
      >
        Stop
      </button>
    </>
  )
}

render(<App />, document.querySelector('#app'))
