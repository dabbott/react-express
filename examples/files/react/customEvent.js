import React, { useState } from 'react'
import { render } from 'react-dom'

const CounterButton = ({ title, onPress }) => {
  return <button onClick={onPress}>{title}</button>
}

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <CounterButton
      title={`Click HERE to increment: ${count}`}
      onPress={() => setCount(count + 1)}
    />
  )
}

render(<App />, document.querySelector('#app'))
