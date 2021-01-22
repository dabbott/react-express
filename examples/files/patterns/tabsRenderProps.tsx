import React, { ReactNode, useState } from 'react'

interface Props {
  tabIds: string[]
  renderTitle: (id: string) => ReactNode
  renderContent: (id: string) => ReactNode
}

function Tabs({ tabIds, renderTitle, renderContent }: Props) {
  const [selectedId, setSelectedId] = useState(tabIds[0])

  return (
    <div>
      {tabIds.map((id) => (
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
          {renderTitle(id)}
        </button>
      ))}
      <hr />
      <div>{renderContent(selectedId)}</div>
    </div>
  )
}

export default function App() {
  return (
    <Tabs
      tabIds={['a', 'b', 'c']}
      renderTitle={(id) => `Tab ${id.toUpperCase()}`}
      renderContent={(id) => `Tab content ${id.toUpperCase()}`}
    />
  )
}
