import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}

export default function Button({ children, disabled, onClick }: Props) {
  return (
    <button className={'button'} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
