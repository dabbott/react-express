import React, { Component, PropTypes } from 'react'

import styles from '../styles'
import Author from './Author'

export default class PageHeader extends Component {
  render() {
    const {title, author, authorURL} = this.props

    return (
      <div style={styles.pageHeader}>
        {title}
        <Author url={authorURL}>
          {author}
        </Author>
      </div>
    )
  }
}
