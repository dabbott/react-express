import React, { useCallback, useState } from 'react'
import Button from './Button'
import Star from './Star'
import { HorizontalSpacer } from './Spacer'

interface Props {
  activeTitle: string
  inactiveTitle: string
}

const colors = {
  normal: {
    fill: 'white',
    stroke: '#becada',
  },
  active: {
    fill: '#f4c622',
    stroke: '#f4c622',
  },
}

export default function StarButton({ activeTitle, inactiveTitle }: Props) {
  const [active, setActive] = useState(false)

  const handleClick = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <Button onClick={handleClick}>
      <Star
        fill={active ? colors.active.fill : colors.normal.fill}
        stroke={active ? colors.active.stroke : colors.normal.stroke}
      />
      <HorizontalSpacer size={8}></HorizontalSpacer>
      {active ? activeTitle : inactiveTitle}
    </Button>
  )
}
