import React, { useState } from 'react'

interface Props {
  onSubmit: (value: string) => void
}

function TextInput({ onSubmit }: Props) {
  // The state of the `input` element is stored within
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={(event) => {
        onSubmit(value)
        setValue('')
        event.preventDefault()
      }}
    >
      <input
        name="input"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
    </form>
  )
}

export default function App() {
  const [submitted, setSubmitted] = useState('')

  return (
    <>
      Type something and press enter
      <TextInput onSubmit={setSubmitted} />
      You submitted: {submitted}
    </>
  )
}
