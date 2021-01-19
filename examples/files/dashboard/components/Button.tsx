import React, { memo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  // variant: "normal" | "primary";
}

export default memo(function Button({ children, disabled, onClick }: Props) {
  return (
    <button className={'button'} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
})
