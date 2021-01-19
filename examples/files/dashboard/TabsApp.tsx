import { useState } from 'react'
import Tabs from './components/Tabs'

export default function App() {
  const [selectedIndex, onChangeSelectedIndex] = useState(0)

  return (
    <div>
      <Tabs
        id="main-tabs"
        aria-label="Main tabs"
        selectedIndex={selectedIndex}
        onChangeSelectedIndex={onChangeSelectedIndex}
        tabs={[
          { title: 'Tab 1', content: 'Some content' },
          { title: 'Tab 2', content: 'Some more content' },
          { title: 'Tab 3', content: 'Some other content' },
        ]}
      />
    </div>
  )
}
