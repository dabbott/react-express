import React, { Component } from 'react';
import { Link } from 'react-router';

import Page from './Page'
import styles from './styles'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

export default class TodoList1 extends Component {
  render() {
    return (
      <Page title={'Todo List - Step 1'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={{paddingRight: '30px'}}>
              <div style={styles.h3}> App layout </div>
              <div style={styles.p}>
                The goal of this step is to get the header and footer in place, with a placeholder for the input and list content.
              </div>
              <div style={styles.h4}> Tasks </div>
              <ul>
                <li> Complete the Title.js component to render a given title as seen at the top of the app. </li>
                <li> Complete the Footer.js component with a clickable 'Remove completed items' element that shouldn't yet do anything. </li>
                <li> Write the <code>render</code> function of App.js to render the Title and Footer, with a placeholder List component in between. </li>
              </ul>
              <div style={styles.h4}> Hints </div>
              <ul>
                <li> <code>ScrollView</code> stretches to fill unused space on the screen. </li>
              </ul>
              <div style={styles.h4}> Sections </div>
              <ul>
                <li> <Link to={'todo_list_1'}> Step 1 - App setup </Link> </li>
                <li> <Link to={'todo_list_2'}> Step 2 - Input and first Redux action </Link> </li>
                <li> <Link to={'todo_list_3'}> Step 3 - List and Checkbox </Link> </li>
                <li> <Link to={'todo_list_4'}> Step 4 - Remove completed and styling </Link> </li>
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
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
