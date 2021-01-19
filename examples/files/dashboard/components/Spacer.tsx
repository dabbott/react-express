import React from 'react'

interface Props {
  size?: number
}

export function VerticalSpacer({ size }: Props) {
  const style =
    typeof size === 'undefined'
      ? { flex: 1, display: 'block' }
      : { minHeight: size, display: 'block' }
  return <span style={style} />
}

export function HorizontalSpacer({ size }: Props) {
  const style =
    typeof size === 'undefined'
      ? { flex: 1, display: 'block' }
      : { minWidth: size, display: 'block' }
  return <span style={style} />
}
