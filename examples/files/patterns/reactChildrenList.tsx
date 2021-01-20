import React, { Children } from 'react'

interface Props {
  children?: React.ReactNode
}

function List({ children }: Props) {
  const array = Children.toArray(children)

  const withSeparator = array.reduce(
    (result: React.ReactNode[], child: React.ReactNode, index) => {
      result.push(child)

      if (index < array.length - 1) {
        result.push(<hr key={`hr-${index}`} />)
      }

      return result
    },
    [] as React.ReactNode[]
  )

  return <>{withSeparator}</>
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
