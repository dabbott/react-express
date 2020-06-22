import React from 'react'
import { render } from 'react-dom'

const Card = ({ title, subtitle }) => (
  <div style={styles.card}>
    <h1 style={styles.title}>{title}</h1>
    {subtitle ? (
      <h2 style={styles.subtitle}>{subtitle}</h2>
    ) : (
      <h3 style={styles.empty}>No subtitle</h3>
    )}
  </div>
)

const App = () => (
  <div>
    <Card title={'Title'} />
    <Card title={'Title'} subtitle={'Subtitle'} />
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
