import React, { ReactNode } from 'react'

interface Props {
  title: ReactNode
  onClick?: () => void
}

function Button({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>
}

export default function App() {
  return (
    <>
      <Button
        title={
          <>
            Hello, <span style={{ color: '#2e9f74' }}>world!</span>
          </>
        }
        onClick={() => {
          console.log('Clicked')
        }}
      />
    </>
  )
}
