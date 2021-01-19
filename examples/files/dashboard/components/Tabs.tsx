import React, { ReactNode } from 'react'
import { VerticalSpacer } from './Spacer'

const getTabButtonId = (prefix: string) => `${prefix}--tab`
const getTabPanelId = (prefix: string) => `${prefix}--tab-panel`

interface TabButtonProps {
  id: string
  title: string
  selected: boolean
  onClick: () => void
}

function TabButton({ id, title, selected, onClick }: TabButtonProps) {
  return (
    <button
      role="tab"
      id={getTabButtonId(id)}
      aria-controls={getTabPanelId(id)}
      aria-selected={selected}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

interface TabPanelProps {
  id: string
  children: ReactNode
}

function TabPanel({ id, children }: TabPanelProps) {
  return (
    <div
      className="column p"
      tab-index="0"
      role="tabpanel"
      id={getTabPanelId(id)}
      aria-labelledby={getTabButtonId(id)}
    >
      {children}
    </div>
  )
}

interface Tab {
  title: string
  content: ReactNode
}

interface Props {
  id: string
  tabs: Tab[]
  'aria-label': string
  selectedIndex: number
  onChangeSelectedIndex: (index: number) => void
}

export default function Tabs({
  id,
  'aria-label': ariaLabel,
  tabs,
  selectedIndex,
  onChangeSelectedIndex,
}: Props) {
  return (
    <div id={id} role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          id={`${id}-${index}`}
          title={tab.title}
          selected={index === selectedIndex}
          onClick={() => {
            onChangeSelectedIndex(index)
          }}
        />
      ))}
      <hr />
      <TabPanel id={`${id}-${selectedIndex}`}>
        <VerticalSpacer size={24} />
        {tabs[selectedIndex] && tabs[selectedIndex].content}
      </TabPanel>
    </div>
  )
}
