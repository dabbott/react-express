import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'

export default class extends Component {
  render() {
    return (
      <Page title={'Boilerplates'}>
        <div style={styles.well}>
          <div style={styles.h3}>Boilerplates</div>
          <div style={styles.p}>
            Setting up a new React Native project can be very time-consuming. Setting up a project typically takes 2-3 days, given that most projects need <i>at minimum</i>: Redux, routing/navigation, data persistence, network calls, and tests. This doesn't include other more use-case-specific packages like: Microsoft CodePush for updating the JavaScript bundle over the air (without submitting an update through the App Store), fastlane for automated deployment, redux sagas for complex state management, or internationalization.
          </div>
          <div>
            To save a lot of time, effort, and headaches, it's often helpful to start with a boilerplate React Native project. Boilerplates contain a specific set of packages for common needs such as network calls, which work out of the box and don't conflict with the other packages included in the project. Boilerplates are typically very opinionated about the packages they include, making most choices for you, while offering little customization.
          </div>
        </div>
        <table className={'table'}>
          <thead>
            <tr>
              <th style={{width: 145}}>Using a boilerplate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pros</td>
              <td>
                <ul>
                  <li>Boilerplates let you skip the project setup and get started with business logic and your app's UI immediately. This can be especially valuable on a team with many engineers, who would otherwise be blocked until the project setup is complete.<br /><br /></li>
                </ul>
                <ul>
                  <li>Boilerplates correctly configure many complex technologies, making sure they work together, and provide a good developer experience (hot reloading, etc).<br /><br /></li>
                </ul>
                <ul>
                  <li>It is typically faster and less error-prone to rip out code that isn't needed, rather than than building up from scratch.<br /><br /></li>
                </ul>
                <ul>
                  <li>Boilerplates often have a lot of people using and contributing, who can help answer questions when you get stuck. It's likely that these people have the exact same project setup as you, and will be able to offer better suggestions than those who have never seen your project setup.<br /><br /></li>
                </ul>
                <ul>
                  <li>When you want to update React Native (which can be difficult and time consuming if you have custom native modules), you can see how the boilerplate accomplished the update, and do the same in your project.<br /><br /></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Cons</td>
              <td>
                <ul>
                  <li>Hi<br /><br /></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
