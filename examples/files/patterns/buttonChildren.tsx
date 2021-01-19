import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>
}

export default function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log('Clicked')
        }}
      >
        Hello, <span style={{ color: '#2e9f74' }}>world!</span>
      </Button>
    </>
  )
}
