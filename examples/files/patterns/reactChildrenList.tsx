import React, { Children } from 'react'

interface Props {
  children?: React.ReactNode
}

function List({ children }: Props) {
  return (
    <>
      {Children.toArray(children).map((child, index, array) => (
        <>
          {child}
          {index < array.length - 1 && <hr key={`hr-${index}`} />}
        </>
      ))}
    </>
  )
}

export default function App() {
  return (
    <List>
      <span>A</span>
      <span>B</span>
      <span>C</span>
    </List>
  )
}
