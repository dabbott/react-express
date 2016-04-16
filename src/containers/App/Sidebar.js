import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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

const sections = [
  [
    ['Introduction', 'intro'], [
      ['Getting Started', 'start'],
      ['Environment', 'env'],
      ['Babel', 'babel'],
      ['ES6', 'es6'],
      ['JSX', 'jsx'],
    ]
  ],
  [
    ['Components', 'components'], [
      ['View', 'view'],
      ['Text', 'text'],
      ['Image', 'image'],
      ['ScrollView', 'scrollview'],
    ]
  ],
  [
    ['Organizing Data', 'data'], [
      ['Flux', 'flux'],
      ['Redux', 'redux'],
    ]
  ],
  [
    ['Persistence', 'persistence'], [
      ['AsyncStorage', 'asyncstorage'],
      ['Firebase', 'firebase'],
    ]
  ],
]

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

export default class Sidebar extends Component {
  static propTypes = {
    style: PropTypes.object,
  }

  renderRow(numeral, title) {
    return (
      <div style={rowStyle}>
        <span style={numeralStyle}>{numeral}</span>
        <Link to={title[1]}
          activeStyle={{
            textDecoration: 'underline',
            fontWeight: 500,
          }}>
          <span style={{color: '#263053'}}>
            {title[0]}
          </span>
        </Link>
      </div>
    )
  }
  render() {
    const {style} = this.props
    return (
      <div style={style}>
        <h4 style={sidebarTitleStyle}>Learn React Native</h4>
        <div style={{overflowY: 'auto', paddingTop: 30}}>
          {sections.map(([title, subsections], i) => {
            return [
              this.renderRow(i + 1, title),
              ...subsections.map((subtitle, j) => {
                return this.renderRow(`${i + 1}.${j + 1}`, subtitle)
              }),
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
