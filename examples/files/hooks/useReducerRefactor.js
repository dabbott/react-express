import React, { useReducer, useEffect } from 'react'

const reducer = (state, action) => {
  const { steps, waterDrank, _ } = state
  switch (action.type) {
    case 'take_steps':
      return { ...state, steps: steps + 25 }
    case 'drink_water':
      return { ...state, waterDrank: waterDrank + 1 }
    case 'calculate_ounces':
      return { ...state, ounces: waterDrank * 8 }
    default:
      throw new Error('Unexpected action!')
  }
}

const HealthApp = () => {
  const [{ steps, waterDrank, ounces }, dispatch] = useReducer(reducer, {
    steps: 25,
    waterDrank: 0,
    ounces: 0,
  })

  useEffect(() => {
    dispatch({ type: 'calculate_ounces' })
  }, [waterDrank])

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'take_steps' })
        }}
      >
        Current number of steps: {steps}
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'drink_water' })
        }}
      >
        Number of water bottles drank: {waterDrank}
      </button>
      <br />
      You've had {ounces} ounces of water today!
    </div>
  )
}

export default HealthApp
