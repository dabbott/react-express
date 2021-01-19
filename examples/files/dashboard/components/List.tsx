import React, { Children } from 'react'
import Block from './Block'
import { VerticalSpacer } from './Spacer'

interface Props {
  children: React.ReactNode
}

export default function List({ children }: Props) {
  const array = Children.toArray(children)

  const withSeparator = array.reduce(
    (result: React.ReactNode[], child: React.ReactNode, index) => {
      result.push(child)

      if (index < array.length - 1) {
        result.push(
          <React.Fragment key={`hr-${index}`}>
            <VerticalSpacer size={20} />
            <hr />
            <VerticalSpacer size={20} />
          </React.Fragment>
        )
      }

      return result
    },
    [] as React.ReactNode[]
  )

  return <Block>{withSeparator}</Block>
}
