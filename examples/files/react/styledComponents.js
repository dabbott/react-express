import React, { useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const randomColor = () => '#' + Math.random().toString(16).substr(-6)

const Card = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${(props) => props.color};
`

const Container = styled.div`
  padding: 20px;
`

const App = () => {
  const [color, setColor] = useState('skyblue')

  return (
    <Container>
      <Card color={color}>
        <input
          type={'button'}
          value={'Randomize Color'}
          onClick={() => setColor(randomColor())}
        />
      </Card>
    </Container>
  )
}

render(<App />, document.querySelector('#app'))
