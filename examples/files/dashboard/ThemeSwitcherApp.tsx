import { useEffect, useState } from 'react'
import Button from './components/Button'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('theme--dark')
    } else {
      document.documentElement.classList.remove('theme--dark')
    }
  }, [isDarkMode])

  return (
    <div>
      <Button
        onClick={() => {
          setIsDarkMode(!isDarkMode)
        }}
      >
        Enable {isDarkMode ? 'light' : 'dark'} mode
      </Button>
    </div>
  )
}
