import React from 'react'

interface Props {
  children?: React.ReactNode
}

export default function Block({ children }: Props) {
  return <div className="block">{children}</div>
}
