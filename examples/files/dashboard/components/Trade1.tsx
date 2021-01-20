import React, { useState } from 'react'
import Button from './Button'
import { VerticalSpacer } from './Spacer'
import Tabs from './Tabs'

interface ConvertProps {
  title: string
}

function Convert({ title }: ConvertProps) {
  const [text, setText] = useState('')

  return (
    <div className="column flex-center">
      <input
        className="input-large"
        type="text"
        placeholder="0"
        onChange={(event) => {
          // TODO: Validation
          setText(event.target.value)
        }}
      ></input>
      <p>Enter a value</p>
      <VerticalSpacer size={24} />
      <Button disabled={!text}>{title}</Button>
    </div>
  )
}

export default function Trade() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="block">
      <h2>Trade</h2>
      <VerticalSpacer size={12} />
      <Tabs
        id="trade-tabs"
        aria-label="Trade currencies"
        selectedIndex={selectedIndex}
        onChangeSelectedIndex={setSelectedIndex}
        tabs={[
          { title: 'Buy', content: <Convert title="Buy" /> },
          { title: 'Sell', content: <Convert title="Sell" /> },
          { title: 'Convert', content: <Convert title="Convert" /> },
        ]}
      />
    </section>
  )
}
