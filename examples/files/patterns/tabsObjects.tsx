import React, { ReactNode, useState } from 'react'

interface Props {
  tabs: { id: string; title: string; content: ReactNode }[]
}

function Tabs({ tabs }: Props) {
  const [selectedId, setSelectedId] = useState(tabs[0].id)

  return (
    <div>
      {tabs.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => {
            setSelectedId(id)
          }}
          style={{
            border: 'none',
            background: id === selectedId ? 'dodgerblue' : 'transparent',
          }}
        >
          {title}
        </button>
      ))}
      <hr />
      <div>{tabs.find((tab) => tab.id === selectedId).content}</div>
    </div>
  )
}

export default function App() {
  return (
    <Tabs
      tabs={[
        { id: 'a', title: 'Tab A', content: 'Tab content A' },
        { id: 'b', title: 'Tab B', content: 'Tab content B' },
        { id: 'c', title: 'Tab C', content: 'Tab content C' },
      ]}
    />
  )
}
