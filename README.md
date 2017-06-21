# React Express

## Why?

React has a problem. While the proliferation of JavaScript libraries, frameworks, and tools (JavaScript fatigue) is fantastic for the web development ecosystem, it can be extremely intimidating for beginners to get started.

I've created this all-in-one guide for beginners to get an opinionated walkthrough from start to finish: `create-react-app`, `npm`, `webpack`, `babel`, ES2015, ES2016, JSX, React, Redux, CSS-in-JS, and more.

Proudly presenting, [React Express!](http://www.react.express)

## Table of Contents

[Environment](http://www.react.express/environment)
* [Quick Start](http://www.react.express/quick_start)
* [Setup & Build Tools](http://www.react.express/setup)
  * [npm](http://www.react.express/npm)
  * [Webpack](http://www.react.express/webpack)
  * [Babel](http://www.react.express/babel)
  * [React](http://www.react.express/react_setup)

[Modern JavaScript](http://www.react.express/modern_javascript)
* [ES2015](http://www.react.express/es2015)
  * [Block Scoped Declarations](http://www.react.express/block_scoped_declarations)
  * [Fat Arrow Functions](http://www.react.express/fat_arrow_functions)
  * [Destructuring](http://www.react.express/destructuring)
  * [Imports and Exports](http://www.react.express/imports_and_exports)
  * [Default Parameters](http://www.react.express/default_parameters)
  * [Classes](http://www.react.express/classes)
  * [Dynamic Object Keys](http://www.react.express/dynamic_object_keys)
  * [Array Spread](http://www.react.express/array_spread)
* [ES2016 and More](http://www.react.express/es2016)
  * [Static Class Properties](http://www.react.express/static_class_properties)
  * [Class Instance Properties](http://www.react.express/class_instance_properties)
  * [Bound Instance Methods](http://www.react.express/bound_instance_methods)
  * [Object Spread](http://www.react.express/object_spread)
  * [Async and Await](http://www.react.express/async_await)
* [JSX](http://www.react.express/jsx)

[React Top-Level API](http://www.react.express/react_api)
* [React Components](http://www.react.express/components)
* [Component API](http://www.react.express/component_api)
* [Lifecycle API](http://www.react.express/lifecycle_api)

[Styling](http://www.react.express/styling)

[Fundamentals](http://www.react.express/fundamentals)
* [Performance Model](http://www.react.express/performance_model)
* [Event Handling](http://www.react.express/event_handling)
* [Input Handling](http://www.react.express/input_handling)
* [Conditional Rendering](http://www.react.express/conditional_rendering)
* [Lists and Keys](http://www.react.express/lists_and_keys)
* [Refs and the DOM](http://www.react.express/refs_and_the_dom)

[Data Management](http://www.react.express/data)
* [Component State](http://www.react.express/data_component_state)
* [Redux](http://www.react.express/redux)
  * [React Redux](http://www.react.express/react_redux)

## Contributing

If you'd like to contribute, follow along below to get the repo set up.

## Installation

```bash
yarn
```

OR

```bash
npm install
```

## Running Dev Server

#### Client development

For working on the client (new pages, etc):

```bash
npm run dev:client
```

This will run the webpack dev server with hot reload.

#### Server development

For working on the server:

```bash
npm run dev:server
```

This will build the server bundle for server-side rendering.

#### Both

For working on both client and server:

```bash
npm run dev
```

## Building and Running Production Server

```bash
npm run build
npm run start
```

## Contributing

Make sure to lint and prettify your code!

```bash
npm run format
npm run test
```

## License

MIT, Copyright (c) 2017 Devin Abbott

## Author

Devin Abbott, [@devinaabbott](http://twitter.com/devinaabbott)
