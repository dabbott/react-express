import React, { Component } from 'react'

import { Author, GithubRepositoryLink } from '../components'
import Page from './Page'
import styles from './styles'

export default class extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            Beyond the React Native core components, there are many open source component libraries. Libraries vary in size and shape, from individual components that bridge native platform functionality (e.g. maps, video, etc) to large component collections (for web folks, think Bootstrap).
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Component Collections</div>
          <div style={styles.p}>
            When beginning a new app, it's worth considering using a component collection. These provide tens or potentially hundreds of consistently designed, cross-platform components out-of-the-box to accelerate your development process.
          </div>
          <div style={styles.p}>
            Component collections speed up development by letting you focus on the architecture and business logic of the app, without focusing on the nuances of layout and styling in React Native. If you aren't working with a dedicated designer or design team, these can be a great way to build an app with a highly polished look and feel.
          </div>
          <div style={styles.p}>
            However, component collections aren't for every app: they can add a lot of code and complexity, and you may not be able to customize them as much as you like. If you're working closely with a designer or design team, it's likely that starting from scratch will give you the flexibility you need to make the app look just right.
          </div>
          <div style={styles.p}>
            Currently, the three largest component collections are:
            <ul>
              <li>
                <GithubRepositoryLink
                  user={'shoutem'}
                  repo={'ui'}
                  title={'Shoutem UI'}
                />
              </li>
              <li>
                <GithubRepositoryLink
                  user={'react-native-community'}
                  repo={'react-native-elements'}
                  title={'React Native Elements'}
                />
              </li>
              <li>
                <GithubRepositoryLink
                  user={'GeekyAnts'}
                  repo={'NativeBase'}
                  title={'NativeBase'}
                />
              </li>
            </ul>
          </div>
          {/* <div style={styles.p}>
            Let's take a look at what these component collections have to offer.
          </div> */}
        </div>
      </Page>
    )
  }
}
