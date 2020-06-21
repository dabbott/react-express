import React, { useState } from 'react'
import { render } from 'react-dom'

const randomColor = () => '#' + Math.random().toString(16).substr(-6)

const Card = ({ color, children }) => {
  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  )
}

const App = () => {
  const [color, setColor] = useState('skyblue')

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <Card color={color}>
        <input
          type={'button'}
          value={'Randomize Color'}
          onClick={() => setColor(randomColor())}
        />
      </Card>
    </div>
  )
}

render(<App />, document.querySelector('#app'))
