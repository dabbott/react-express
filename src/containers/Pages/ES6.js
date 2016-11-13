import React, { Component } from 'react';
import { EditorTranspiler } from '../../components'
import Page from './Page'
import styles from './styles'

const blockScopedExample = `const a = 1
let b = 'foo'

// a = 2 // Uncomment me!

// b = 'bar'

if (true) {
  const a = 3
}`

const fatArrowExample = `const foo = () => 'bar'

const baz = (x) => {
  return x + 1
}

const squareSum = (...args) => {
  const squared = args.map(x => Math.pow(x, 2))
  return squared.reduce((prev, curr) => prev + curr)
}

this.items.map(x => this.doSomethingWith(x))`

const destructuringExample = `const arr = ['one!', 'two!', 'three!', 'four!']
const [one, two, ...rest] = arr

const obj = {a: 'x', b: 'y', c: 'z'}
const {a, b, c} = obj`

const importExample = `// import the default export
import React from 'react-native'

// import other named exports
import {View, Text, Image} from 'react-native'

// import default and others simultaneously
// import React, {View, Text, Image} from 'react-native'`

const exportExample = `export default React
export {View, Text, Image}`

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
            value={blockScopedExample}
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
          <div style={styles.p}>
            The <b>fat arrow</b> <code>{'=>'}</code> is used to define anonymous functions. There are two important differences in the behavior of these functions, compared to functions defined with <code>function</code>.
          </div>
          <div style={styles.p}>
            First, the binding for the keyword <code>this</code> is the same outside and inside the fat arrow function. This is different than functions declared with <code>function</code>, which can bind <code>this</code> to another other object upon invocation. Maintaining the <code>this</code> binding is very convenient for operations like mapping: <code>{'this.items.map(x => this.doSomethingWith(x))'}</code>.
          </div>
          <div style={styles.p}>
            Second, fat arrow functions don't have an <code>arguments</code> object defined. You can achieve the same thing using the <b>spread operator</b>: <code>{'(...args) => doSomething(args[0], args[1])'}</code>.
          </div>
          <div style={styles.p}>
            The fat arrow function syntax can vary a bit. If the function takes exactly one parameter, the parentheses can be omitted: <code>{'x => Math.pow(x, 2)'}</code>. Any other number of arguments will need parentheses: <code>{'(x, y) => Math.pow(x, y)'}</code>. If the function body is not wrapped in curly braces (as in the previous sentences), it is executed as an <b>expression</b>, and the return value of the function is the value of the expression. The function body can be wrapped in curly braces to make it a <b>block</b>, in which case you will need to explicitly <code>return</code> a value, if you want something returned. You will likely use the curly braces and block version more frequently, as this allows the function body to include multiple lines of code.
          </div>
          <EditorTranspiler
            value={fatArrowExample}
            inputHeader={'Fat arrow functions'}
            outputHeader={'Output compiled with Babel'}
          />
          <div style={styles.h4}>Destructuring</div>
          <div style={styles.p}>
            Destructuring is a convenient way to extract multiple keys from an object or array simultaneously and assign the values to local variables.
          </div>
          <EditorTranspiler
            value={destructuringExample}
            inputHeader={'Destructuring'}
            outputHeader={'Output compiled with Babel'}
          />
          <div style={styles.h4}>Imports and Exports</div>
          <div style={styles.p}>
            ES6 provides a more advanced module importing/exporting pattern than the widely used CommonJS pattern. By contrast to the old <code>{'module.exports = {...}'}</code>, we can now export multiple named values. Similarly, we can import multiple named values.
          </div>
          <div style={styles.p}>
            There is one default export per file, and this exported value can be imported without refering to it by name. Every other import and export must be named.
          </div>
          <div style={styles.p}>
            If you attempt to import an older CommonJS module using the new import syntax, Babel will handle the difference in format automatically at runtime. An old-style module won't have the special <code>{'__esModule'}</code> property added by Babel upon export.
          </div>
          <EditorTranspiler
            value={importExample}
            inputHeader={'Importing'}
            outputHeader={'Output compiled with Babel'}
          />
          <div style={styles.p}>
            The imports in the previous example would be available if exported from the module <code>react-native</code> as in the next example.
          </div>
          <EditorTranspiler
            value={exportExample}
            inputHeader={'Exporting'}
            outputHeader={'Output compiled with Babel'}
          />
          <div style={styles.p}>
            For full details on the importing/exporting syntax, see the MDN reference for <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import'}>import</a> and <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export'}>export</a>.
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
