import React, { useReducer } from 'react'

const App = () => {
  const reducer = (state, action) => {
    if (action.type === 'cat') {
      return 'You selected cat'
    } else if (action.type === 'dog') {
      return 'You selected dog'
    }
    return state
  }
  const [state, dispatch] = useReducer(reducer, 'No Pet Selected')
  return (
    <div>
      <input
        type="radio"
        name="pet"
        value="cat"
        onClick={() => {
          dispatch({ type: 'cat' })
        }}
      ></input>
      <label for="cat">Cat</label>
      <input
        type="radio"
        name="pet"
        value="dog"
        onClick={() => {
          dispatch({ type: 'dog' })
        }}
      ></input>
      <label for="dog">Dog</label>
      <br />
      <br />
      <br />
      {state}
    </div>
  )
}

export default App
