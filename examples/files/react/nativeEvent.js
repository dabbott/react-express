import React, { useState } from 'react'
import { render } from 'react-dom'

const CounterButton = () => {
  const [count, setCount] = useState(0)

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

render(<CounterButton />, document.querySelector('#app'))
