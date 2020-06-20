import ReactGA from 'react-ga'

const dev = process.env.NODE_ENV === 'development'

if (typeof window !== 'undefined' && !dev) {
  ReactGA.initialize('UA-77053427-4')
}

export const pageView = () => {
  if (dev) return

  const page = window.location.pathname

  ReactGA.set({ page })
  ReactGA.pageview(page)
}
