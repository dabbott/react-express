import React, { useState } from 'react'

interface Props {
  value: string
  setValue: (value: string) => void
  onSubmit: () => void
}

function TextInput({ value, setValue, onSubmit }: Props) {
  return (
    <form
      onSubmit={(event) => {
        onSubmit()
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
  // The state of the `input` element is stored here in the parent
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState('')

  return (
    <>
      Type something and press enter
      <TextInput
        value={value}
        setValue={setValue}
        onSubmit={() => setSubmitted(value)}
      />
      You submitted: {submitted}
    </>
  )
}
