import React, { useState, useEffect } from 'react'

const HealthApp = () => {
  const [steps, setSteps] = useState(25)
  const [waterDrank, setWaterDrank] = useState(0)
  const [ounces, setOunces] = useState(0)
  const [firstCount, setFirstCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)

  useEffect(() => {
    setOunces(waterDrank * 8)
    setFirstCount(firstCount + 1)
  }, [waterDrank])

  useEffect(() => {
    setSecondCount(secondCount + 1)
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          setSteps(steps + 25)
        }}
      >
        Current number of steps: {steps}
      </button>
      <button
        onClick={() => {
          setWaterDrank(waterDrank + 1)
        }}
      >
        Number of water bottles drank: {waterDrank}
      </button>
      <br />
      You've had {ounces} ounces of water today!
      <br />
      <br />
      This is how many times: <br />
      the first useEffect was called: {firstCount}
      <br />
      the second useEffect was called: {secondCount}
    </div>
  )
}

export default HealthApp
