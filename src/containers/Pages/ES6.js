import React, { Component } from 'react';
import { EditorTranspiler } from '../../components'
import Page from './Page'
import styles from './styles'

export default class ES6 extends Component {
  render() {
    return (
      <Page
        title={'ES6'}>
        <div style={styles.well}>
          <div style={styles.h3}>What is ES6, anyway?</div>
          <div style={styles.p}>
            ECMAScript is the language specification used to implement the JavaScript language. ES6, or ECMAScript 6, is the first significant update to the language since ES5 was initially released in 2009.
          </div>
          <div style={styles.p}>
            Many ES6 features are already available in modern JavaScript engines. Using Babel, however, gives us access to many more features, while ensuring our JavaScript runs on more platforms. React Native uses Babel to enable ES6 features and ensure cross-platform consistency, as your JavaScript will run on Android, iOS, Windows, and other platforms.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>ES6 Highlights</div>
          <div style={styles.p}>
            Let's take a look at some of the new language features we'll be using, and how they get compiled through Babel.
          </div>
          <div style={styles.h4}>Variable Declarations: <code>const</code> and <code>let</code></div>
          <div style={styles.p}>
            Instead of using <code>var</code> to declare local variables, we use <code>const</code> and <code>let</code>. The main difference is that <code>var</code> is scoped to a function, while <code>const</code> and <code>let</code> are scoped to a block.
          </div>
          <div style={styles.p}>
            Additionally, variables declared with <code>const</code> can only be assigned a value once. Assigning another value to the same name will throw a compiler error. Note that if the value assigned to a <code>const</code> variable is an object or array, the object or array may still be modified. In other words, it's only the variable name that is bound permanently -- the value itself is still mutable.
          </div>
          <EditorTranspiler
            value={[
              `const a = 1`,
              `let b = 'foo'`,
              ``,
              `// a = 2 // Uncomment me!`,
              ``,
              `// b = 'bar'`,
              ``,
              `if (true) {`,
              `  const a = 3`,
              `}`,
            ]}
            inputHeader={
              <div>
                Using <code style={styles.cmHeaderCode}>const</code> and <code style={styles.cmHeaderCode}>let</code>
              </div>
            }
            outputHeader={'Output compiled with Babel'}
          />
          <div style={styles.p}>
            If you try uncommenting <code>a = 2</code> in the example above, Babel will throw a compiler error. This is because Babel prevents us from reassigning to a variable name declared with <code>const</code>. Assigning to <code>b</code> again is allowed, as the name was declared with <code>let</code>.
          </div>
          <div style={styles.p}>
            You'll notice that the compiled output replaces <code>const</code> and <code>let</code> with <code>var</code>. You'll also notice that Babel transforms <code>const a = 3</code> into <code>var _a = 3</code>. This is so that your code can run on older platforms that don't support the new block-scoped variable declarations. It's the Babel compiler that enforces proper usage and block-scoping, rather than the runtime JavaScript engine.
          </div>
          <div style={styles.h4}>Fat arrow functions</div>
          <EditorTranspiler
            value={[
              `const foo = () => 'bar'`,
              ``,
              `const baz = (x) => {`,
              `  return x + 1`,
              `}`,
            ]}
            inputHeader={'Fat arrow functions'}
            outputHeader={'Output compiled with Babel'}
          />
          <div style={styles.h4}>Destructuring</div>
          <div style={styles.h4}>Classes</div>
          <div style={styles.h4}>Imports and Exports</div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
