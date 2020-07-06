import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    if (count > 0 && count % 5 == 0) {
      alert(`${count} is divisible by 5!`)
    }
    console.log(`I change every time something changes: ${count} ${text}`)
    console.log(Math.random())
  })

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click HERE to increment: {count}
      </button>
      <br />
      <label htmlFor={'my-input'}>Enter text: </label>
      <input
        id={'my-input'}
        type={'text'}
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}
      />
      <br />
      You entered: {text}
    </div>
  )
}

export default App
