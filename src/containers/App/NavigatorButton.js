import React, { Component } from 'react';
import { Link } from 'react-router';

const style = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
}

const itemStyle = {
  flex: '0 0 auto',
  padding: '10px 15px',
  backgroundColor: 'rgb(210,210,210)',
  color: 'white',
  borderRadius: 3,
}

const nextItemStyle = Object.assign({}, itemStyle, {
  backgroundColor: 'rgb(54,203,170)',
})

export default class extends Component {
  render() {
    const {nextSection, previousSection} = this.props
    return (
      <div style={style}>
        {
          previousSection ? (
            <Link to={previousSection.slug} style={itemStyle}>
              Previous - {previousSection.title}
            </Link>
          ) : (
            <div />
          )
        }
        {
          nextSection && (
            <Link to={nextSection.slug} style={nextItemStyle}>
              Next - {nextSection.title}
            </Link>
          )
        }
      </div>
    )
  }
}
