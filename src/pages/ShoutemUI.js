import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer, Author, GithubRepositoryLink } from '../components'

const code = `import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Examples } from '@shoutem/ui';

class App extends Component {
  render() {
    return (
      <Examples />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
`

const vendorComponents = [
  ['@shoutem/ui', 'https://cdn.rawgit.com/dabbott/ui/94452154ee788a632e3179c9ea56bedad073c775/dist/shoutem-ui.js'],
  // ['@shoutem/ui', '//localhost:8000/dist/shoutem-ui.js'],
]

export default class View extends Component {
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
            Shoutem UI is a themable, animatable component collection. Of the common component libraries available today, Shoutem likely prioritizes design the most. Apps built with these components tend to look beautiful and consistent without too much time spent pixel-pushing.
          </div>
          <div style={styles.p}>
            The components available thus far are more presentational than navigational. Shoutem focuses on cards with text, buttons, and rich media, which can then be combined into lists and grids. Shoutem doesn't provide drawers, tab bars, modals, etc. You would still want to use a navigation library for those components.
          </div>
          <div style={styles.p}>
            There are three distinct libraries:
          </div>
          <div style={styles.p}>
            <ul>
              <li>
                <GithubRepositoryLink
                  user={'shoutem'}
                  repo={'ui'}
                  title={'Shoutem Components'}
                />
                <br />
                A collection of ~100 UI components, including typography, buttons, lists, grids, etc.
                <br />
                <br />
              </li>
              <li>
                <GithubRepositoryLink
                  user={'shoutem'}
                  repo={'animation'}
                  title={'Shoutem Animation'}
                />
                <br />
                Declarative animations to apply to your components
                <br />
                <br />
              </li>
              <li>
                <GithubRepositoryLink
                  user={'shoutem'}
                  repo={'theme'}
                  title={'Shoutem Themes'}
                />
                <br />
                CSS-like theming for components
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Component Gallery</div>
          <div style={styles.p}>
            The <code>@shoutem/ui</code> library exposes the <code>{'<Examples />'}</code> component for you to experiment with. You can browse components by category by clicking the dropdown at the top of the screen.
          </div>
          <WebPlayer
            title={'Shoutem UI'}
            code={code}
            vendorComponents={vendorComponents}
            panes={['player']}
            width={350}
          />
        </div>
        <div style={styles.well}>
          <div style={styles.p}>
            Let's take a look at components, themes, and animation in-depth, to understand how these pieces fit together.
          </div>
        </div>
      </Page>
    )
  }
}
