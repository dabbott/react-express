import React from 'react'
import { render } from 'react-dom'

const MyComponent = (props) => {
  return (
    <div style={{ padding: '30px', backgroundColor: 'lightblue' }}>
      <button>{props.text}</button>
    </div>
  )
}

const myElement = <MyComponent text="Hello, world!" />

render(myElement, document.querySelector('#app'))
