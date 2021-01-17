import { NotFound } from 'react-guidebook'

export default function PageNotFound() {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <NotFound />
    </div>
  )
}

Object.assign(PageNotFound, {
  title: 'Not found',
})
