import React from 'react'

interface Props {
  title: string
  onClick?: () => void
}

function Button({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>
}

export default function App() {
  return (
    <>
      <Button
        title="Hello, world!"
        onClick={() => {
          console.log('Clicked')
        }}
      />
    </>
  )
}
