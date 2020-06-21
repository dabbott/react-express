import React from 'react'
import { render } from 'react-dom'

class MyComponent extends React.Component {
  render() {
    return (
      <div style={{ padding: '30px', backgroundColor: 'lightblue' }}>
        <button>{this.props.text}</button>
      </div>
    )
  }
}

const myElement = <MyComponent text="Hello, world!" />

render(myElement, document.querySelector('#app'))
