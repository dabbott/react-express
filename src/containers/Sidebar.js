import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import createStyles from 'react-styles-provider'

import { chapters } from '../utils/Sections'

@createStyles(({centered}) => ({
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 300,
    paddingLeft: centered ? 0 : 35,
    textAlign: centered ? 'center' : 'left',
    lineHeight: '60px',
    color: '#263053',
    margin: 0,
    borderBottom: '1px solid rgba(220,220,220,0.5)',
  },
  sidebarTitleLink: {
    flex: '0 0 auto',
  },
  rowsContainer: {
    overflowY: 'auto',
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: centered ? 'center' : 'stretch',
    backgroundColor: 'white',
  },
  row: {
    flex: '0 0 40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: centered ? 0 : 35,
    fontSize: 16,
    fontWeight: 300,
    lineHeight: '60px',
    color: '#263053',
    margin: 0,
  },
  numeral: {
    flex: '0 0 50px',
    display: centered ? 'none' : 'initial',
  },
  dotContainer: {
    flex: '0 0 60px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  dot: {
    flex: '0 0 auto',
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '#DEDFE8',
  },
  link: {
    textDecoration: 'underline',
    fontWeight: 500,
  },
  patchRow: [
    'row', {
      fontSize: 14,
      paddingLeft: centered ? 0 : 50,
    },
  ],
}))
export default class Sidebar extends Component {

  static propTypes = {
    style: PropTypes.object,
  }

  renderRow = ({title, slug, depth, major, minor, patch}) => {
    const {styles} = this.props

    let numeral = `${major}`

    if (depth >= 1) {
      numeral += `.${minor}`
    }

    if (depth >= 2) {
      numeral += `.${patch}`
    }

    const majorOrMinor = depth === 0 || depth === 1

    return (
      <div style={majorOrMinor ? styles.row : styles.patchRow}>
        <span style={styles.numeral}>
          {majorOrMinor ? numeral : ''}
        </span>
        <Link to={slug} activeStyle={styles.link}>
          <span style={{color: '#263053'}}>
            {title}
          </span>
        </Link>
      </div>
    )
  }

  render() {
    const {styles, style} = this.props
    return (
      <div style={style}>
        <IndexLink to={'/'} style={styles.sidebarTitleLink}>
          <h4 style={styles.sidebarTitle}>React Native Express</h4>
        </IndexLink>
        <div style={styles.rowsContainer}>
          {chapters.map(group => {
            const [first, ...rest] = group

            return [
              this.renderRow(first),
              rest.map(this.renderRow),
              <div style={styles.dotContainer}>
                <span style={styles.dot} />
              </div>,
            ]
          })}
        </div>
      </div>
    )
  }
}
