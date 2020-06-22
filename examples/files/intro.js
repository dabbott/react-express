import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const style = {
    padding: '40px',
    textAlign: 'center',
  }

  return <div style={style}>Welcome to React!</div>
}

ReactDOM.render(<App />, document.querySelector('#app'))
