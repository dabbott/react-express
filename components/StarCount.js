import React, { useState, useEffect } from 'react'

const addCommas = (n) => {
  if (n < 1000) return n.toString()

  return Math.floor(n / 1000).toString() + ',' + (n % 1000)
}

const cache = {}

export default ({ user, repo }) => {
  const cacheKey = `${user}/${repo}`
  const [count, setCount] = useState(cache[cacheKey])

  useEffect(() => {
    // Fetch doesn't exist in older browsers
    try {
      fetch(`https://api.github.com/repos/${user}/${repo}`)
        .then((response) => response.json())
        .then((json) => json.stargazers_count)
        .then((count) => {
          cache[cacheKey] = count
          setCount(count)
        })
    } catch (e) {
      // Do nothing
    }
  }, [cacheKey])

  if (!count) return null

  return addCommas(count)
}
