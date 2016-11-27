import React, { Component } from 'react'
import { Link } from 'react-router'
import createStyles from 'react-styles-provider'

@createStyles({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
  item: {
    flex: '0 0 auto',
    padding: '10px 15px',
    backgroundColor: 'rgb(210,210,210)',
    color: 'white',
    borderRadius: 3,
  },
  nextItem: [
    'item', {
      backgroundColor: 'rgb(54,203,170)',
    },
  ],
})
export default class extends Component {
  render() {
    const {styles, nextSection, previousSection} = this.props
    return (
      <div style={styles.container}>
        {previousSection ? (
          <Link to={previousSection.slug} style={styles.item}>
            Previous - {previousSection.title}
          </Link>
        ) : (
          <div />
        )}
        {nextSection && (
          <Link to={nextSection.slug} style={styles.nextItem}>
            Next - {nextSection.title}
          </Link>
        )}
      </div>
    )
  }
}
