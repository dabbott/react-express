import React from 'react'

import StarCount from './StarCount'
import { Anchor } from 'react-guidebook'

export default ({ user, repo, title, stars }) => {
  return (
    <Anchor href={`https://github.com/${user}/${repo}`}>
      {title}
      {stars && (
        <>
          {' ('}
          <StarCount user={user} repo={repo} />
          {' ★)'}
        </>
      )}
    </Anchor>
  )
}
