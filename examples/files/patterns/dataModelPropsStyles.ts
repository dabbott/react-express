import { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  article: {
    margin: '10px 10px 0 10px',
    borderRadius: '4px',
    padding: '10px',
    display: 'flex',
    backgroundColor: '#EEE',
  },
  title: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '1.5',
  },
  content: { flex: '1' },
}

export default styles
