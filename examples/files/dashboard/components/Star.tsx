import React from 'react'

interface Props {
  fill?: string
  stroke?: string
  size?: number
}

export default function Star({ size = 24, fill, stroke = 'black' }: Props) {
  return (
    <svg
      style={{
        fill,
        stroke,
        width: `${size}px`,
        height: `${size * (23 / 24)}px`,
      }}
      viewBox="0 0 24 23"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z"></path>
    </svg>
  )
}
