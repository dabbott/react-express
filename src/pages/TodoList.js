import React, { Component } from 'react'
import { Link } from 'react-router'

import Page from './Page'
import styles from './styles'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const contentStyle = {
  paddingRight: '30px',
  marginTop: '-15px',
}

export default class TodoList extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={contentStyle}>
              <div style={styles.h3}> Overview </div>
              <div style={styles.p}>
                Our first exercise will be a simple Todo List. If you get stuck at any point, you can look to the examples in this guide, as there will be a lot of overlap in code.
              </div>
              <div style={styles.p}>
                Let's build the app on the right. We'll break it down into smaller sections and build it piece-by-piece. Feel free to reference previous sections.
              </div>
              <div style={styles.h4}>Project Setup</div>
              <ol>
                <li>Download the basic project template <a href={'https://raw.githubusercontent.com/gabergg/ReactNativeTodoList/starting-point/boilerplate/TodoList.zip'}>here</a></li>
                <li>Unzip the project directory</li>
                <li>After downloading, <code>npm install</code> in the project directory</li>
                <li>Run <code>react-native run-ios</code> to build and launch the app</li>
              </ol>
              <div style={styles.h4}> Completed </div>
              <div style={styles.p}>
                You can view the completed project on github <a href={'https://github.com/gabergg/ReactNativeTodoList'}>here</a>.
              </div>
              <div style={styles.h4}> Sections </div>
              <ul>
                <li style={styles.li}> <Link to={'todo_list_1'}> Step 1 - App setup </Link> </li>
                <li style={styles.li}> <Link to={'todo_list_2'}> Step 2 - Input and ADD_ITEM </Link> </li>
                <li style={styles.li}> <Link to={'todo_list_3'}> Step 3 - List and Checkbox </Link> </li>
                <li style={styles.li}> <Link to={'todo_list_4'}> Step 4 - Remove completed items and styling </Link> </li>
              </ul>
            </div>
            <div style={{border: '1px solid black'}}>
              <img
                width={280}
                src={'todo-screenshot.png'}
              />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
