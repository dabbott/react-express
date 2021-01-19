import React, { useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState('')

  return (
    <>
      <label htmlFor="my-input">Enter text: </label>
      <input
        id="my-input"
        type="text"
        value={state}
        placeholder="Type here"
        onChange={(event) => {
          setState(event.target.value)
        }}
      />
    </>
  )
}
