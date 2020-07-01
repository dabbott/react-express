import React, { useReducer } from 'react'
import { render } from 'react-dom'

const init = count => {
  return { count: count }
}

const reducer = ({ count }, action) => {
  switch (action.type) {
    case 'increment':
      return { count: count + 1 }
    case 'decrement':
      return { count: count - 1 }
    case '100':
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const CounterButton = () => {
  let initialCount = 0
  const [{ count }, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <React.Fragment>
      Count: {count}
      <br />
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: '100', payload: 100 })}>
        Set to 100
      </button>
      <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </React.Fragment>
  )
}

render(<CounterButton />, document.querySelector('#app'))
