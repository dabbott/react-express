import ReactGA from 'react-ga'

if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-77053427-1')
}

export const pageView = () => {
  const page = window.location.pathname

  ReactGA.set({page})
  ReactGA.pageview(page)
}
