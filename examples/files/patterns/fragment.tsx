import React, { Fragment, useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState('')

  return (
    <Fragment>
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
    </Fragment>
  )
}
