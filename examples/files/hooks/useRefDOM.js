import React, { useRef, useEffect } from 'react'
import { render } from 'react-dom'

function App() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.fillStyle = 'rgba(59, 108, 212, 0.5)'
    context.fillRect(10, 10, 50, 50)

    context.fillStyle = 'rgb(59, 108, 212)'
    context.fillRect(30, 30, 50, 50)
  }, [])

  return <canvas ref={canvasRef} />
}

render(<App />, document.querySelector('#app'))
