import { useEffect, useState } from 'react'

type FetchResult<T> =
  | {
      status: 'pending'
    }
  | {
      status: 'success'
      value: T
    }
  | {
      status: 'failure'
      value: Error
    }

export default function useFetch<T>(url?: string): FetchResult<T> {
  const [result, setResult] = useState<FetchResult<T>>({ status: 'pending' })

  useEffect(() => {
    let isStale = false

    async function fetchUrl() {
      if (!url) return

      setResult({ status: 'pending' })

      try {
        const response = await fetch(url)
        const json = await response.json()

        if (isStale) return

        setResult({ status: 'success', value: json })
      } catch (e) {
        setResult({ status: 'failure', value: e })
      }
    }

    fetchUrl()

    return () => {
      isStale = true
    }
  }, [url])

  return result
}
