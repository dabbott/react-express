import React, { Component } from 'react'

import { Author } from '../components'
import Page from './Page'
import styles from './styles'

export default class extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            Component Lifecycle API
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            Components have a lifecycle: they are instantiated, mounted, rendered, and eventually updated, unmounted, and destroyed. The lifecycle helps manage the complexity of different platform APIs (iOS, Android) by providing a simple, consistent abstraction layer. The lifecycle also allows you to optionally execute custom code at each step for more fine-grained control of the rendering.
          </div>
          <div style={styles.p}>
            Let's look at each phase of the component lifecycle.
          </div>
          <div style={styles.h4}>Mounting Cycle</div>
          <div style={styles.p}>
            <ul>
              <li><code>constructor(object props)</code><br />The component class is instantiated. The parameters to the constructor are the element's initial <code>props</code>, as specified by the parent element. You can optionally specify an initial state for the element by assigning an object to <code>this.state</code>. At this point, no native UI has been rendered yet for this element.<br /><br /></li>
              <li><code>componentWillMount()</code><br />This method is invoked only once, before rendering occurs for the first time. At this point, there is still no native UI rendered for this element.<br /><br /></li>
              <li><code>render() -> React Element</code><br />The render method must return a React Element to render (or null, to render nothing).<br /><br /></li>
              <li><code>componentDidMount()</code><br />This method is invoked only once, after rendering occurs for the first time. At this point, the native UI for this element has finished rendering, and may be accessed through <code>this.refs</code> for direct manipulation. If you need to make async API calls or execute delayed code with <code>setTimeout</code>, that should generally be done in this method.<br /><br /></li>
            </ul>
          </div>
          <div style={styles.h4}>Updating Cycle</div>
          <div style={styles.p}>
            <ul>
              <li><code>componentWillReceiveProps(object nextProps)</code><br />The parent of this component has passed a new set of <code>props</code>. This component will re-render. You may optionally call <code>this.setState()</code> to update this component's internal state before the <code>render</code> method is called.<br /><br /></li>
              <li><code>shouldComponentUpdate(object nextProps, object nextState) -> boolean</code><br />Based on the next set of <code>props</code> and <code>state</code>, a component may decide to re-render or not to re-render. The base class's implementation of this method always returns <code>true</code> (the component <i>should</i> re-render). For optimization, override this method and check if either <code>props</code> or <code>state</code> have been modified, e.g. run an equality test of each key/value in these objects. Returning <code>false</code> will prevent the <code>render</code> method from being called.<br /><br /></li>
              <li><code>componentWillUpdate(object nextProps, object nextState)</code><br />This method is invoked, after the decision has been made to re-render. You may not call <code>this.setState()</code> here, since an update is already in progress.<br /><br /></li>
              <li><code>render() -> React Element</code><br />This method is called, assuming <code>shouldComponentUpdate</code> returned <code>true</code>. The render method must return a React Element to render (or null, to render nothing).<br /><br /></li>
              <li><code>componentDidUpdate(object prevProps, object prevState)</code><br />This method is invoked after re-rendering occurs. At this point, the native UI for this component has been updated to reflect the React Element returned from the <code>render()</code> method.<br /><br /></li>
            </ul>
          </div>
        </div>
      </Page>
    )
  }
}
