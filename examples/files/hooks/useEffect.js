import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState('Devin')

  const greet = name => {
    console.log(`Hello! ${name}`)
  }

  useEffect(() => {
    greet(name)
  })

  return (
    <div>
      <label htmlFor={'my-input'}>Enter text: </label>
      <input
        id={'my-input'}
        type={'text'}
        value={name}
        placeholder={'Type here'}
        onChange={event => {
          setName(event.target.value)
        }}
      />
      <br />
      <br />
      You entered: {name}
    </div>
  )
}

export default App
