import React from 'react'
import { render } from 'react-dom'

const Card = ({ loading, error, title, subtitle }) => {
  let content

  if (error) {
    content = 'Error'
  } else if (loading) {
    content = <h3 style={styles.empty}>Loading...</h3>
  } else {
    content = (
      <div>
        <h1 style={styles.title}>{title}</h1>
        {subtitle ? (
          <h2 style={styles.subtitle}>{subtitle}</h2>
        ) : (
          <h3 style={styles.empty}>No subtitle</h3>
        )}
      </div>
    )
  }

  return <div style={styles.card}>{content}</div>
}

const App = () => (
  <div>
    <Card error={true} />
    <Card loading={true} />
    <Card loading={false} title={'Title'} subtitle={'Subtitle'} />
  </div>
)

const styles = {
  card: {
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'steelblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: '14px',
    lineHeight: '18px',
  },
  empty: {
    fontSize: '12px',
    lineHeight: '15px',
    opacity: '0.5',
  },
}

render(<App />, document.querySelector('#app'))
