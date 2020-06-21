import React, { useState } from 'react'
import { render } from 'react-dom'

const TextInput = () => {
  const [state, setState] = useState('')

  return (
    <div>
      <label htmlFor={'my-input'}>Enter text: </label>
      <input
        id={'my-input'}
        type={'text'}
        value={state}
        placeholder={'Type here'}
        onChange={(event) => {
          setState(event.target.value)
        }}
      />
      <br />
      <br />
      You entered: {state}
    </div>
  )
}

render(<TextInput />, document.querySelector('#app'))
