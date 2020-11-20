import React, { useContext, createContext } from 'react'

const ThemeContext = React.createContext()

function Title() {
  const theme = useContext(ThemeContext)

  const style = {
    background: theme.primary,
    color: theme.text,
  }

  return <h1 style={style}>Title</h1>
}

function Nested() {
  return <Title />
}

function NestedTwice() {
  return <Nested />
}

export default function App() {
  const theme = {
    primary: 'dodgerblue',
    text: 'white',
  }

  return (
    <ThemeContext.Provider value={theme}>
      <NestedTwice />
    </ThemeContext.Provider>
  )
}
