import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { chapters } from '../utils/Sections'

const sidebarTitleStyle = {
  fontSize: 18,
  fontWeight: 300,
  paddingLeft: 35,
  lineHeight: '60px',
  color: '#263053',
  margin: 0,
  borderBottom: '1px solid rgba(220,220,220,0.5)',
}

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 35,
  height: 40,
  fontSize: 16,
  fontWeight: 300,
  lineHeight: '60px',
  color: '#263053',
  margin: 0,
}

const patchRowStyle = {
  ...rowStyle,
  fontSize: 14,
  paddingLeft: 50,
}

const numeralStyle = {
  flex: '0 0 50px',
}

const dotStyle = {
  display: 'inline-block',
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: '#DEDFE8',
}

const linkStyle = {
  textDecoration: 'underline',
  fontWeight: 500,
}

export default class Sidebar extends Component {
  static propTypes = {
    style: PropTypes.object,
  }

  renderRow = ({title, slug, depth, major, minor, patch}) => {
    let numeral = `${major}`

    if (depth >= 1) {
      numeral += `.${minor}`
    }

    if (depth >= 2) {
      numeral += `.${patch}`
    }

    const majorOrMinor = depth === 0 || depth === 1

    return (
      <div style={majorOrMinor ? rowStyle : patchRowStyle}>
        <span style={numeralStyle}>
          {majorOrMinor ? numeral : ''}
        </span>
        <Link to={slug} activeStyle={linkStyle}>
          <span style={{color: '#263053'}}>
            {title}
          </span>
        </Link>
      </div>
    )
  }

  render() {
    const {style} = this.props
    return (
      <div style={style}>
        <IndexLink to={'/'}>
          <h4 style={sidebarTitleStyle}>React Native Express</h4>
        </IndexLink>
        <div style={{overflowY: 'auto', paddingTop: 30}}>
          {chapters.map(group => {
            const [first, ...rest] = group

            return [
              this.renderRow(first),
              rest.map(this.renderRow),
              <div style={{height: 60, alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                <span style={dotStyle} />
              </div>,
            ]
          })}
        </div>
      </div>
    )
  }
}
