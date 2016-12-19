

let sections = [
  {depth: 0, title: 'Modern JavaScript', slug: 'modern_javascript', componentName: 'ModernJavascript'},
  {depth: 1, title: 'ES6', slug: 'es6', componentName: 'ES6'},

  {depth: 2, title: 'Block Scoped Declarations', slug: 'block_scoped_declarations', componentName: 'BlockScopedDeclarations'},
  {depth: 2, title: 'Fat Arrow Functions', slug: 'fat_arrow_functions', componentName: 'FatArrowFunctions'},
  {depth: 2, title: 'Destructuring', slug: 'destructuring', componentName: 'Destructuring'},
  {depth: 2, title: 'Imports and Exports', slug: 'imports_and_exports', componentName: 'ImportsAndExports'},
  {depth: 2, title: 'Default Parameters', slug: 'default_parameters', componentName: 'DefaultParameters'},
  {depth: 2, title: 'Classes', slug: 'classes', componentName: 'Classes'},
  {depth: 2, title: 'Dynamic Object Keys', slug: 'dynamic_object_keys', componentName: 'DynamicObjectKeys'},
  {depth: 2, title: 'Array Spread', slug: 'array_spread', componentName: 'ArraySpread'},

  {depth: 1, title: 'ES7 and Beyond', slug: 'es7_and_beyond', componentName: 'ES7AndBeyond'},
  {depth: 2, title: 'Static Class Properties', slug: 'static_class_properties', componentName: 'StaticClassProperties'},
  {depth: 2, title: 'Bound Instance Methods', slug: 'bound_instance_methods', componentName: 'BoundInstanceMethods'},
  {depth: 2, title: 'Object Spread', slug: 'object_spread', componentName: 'ObjectSpread'},
  {depth: 2, title: 'Async and Await', slug: 'async_await', componentName: 'AsyncAwait'},
  {depth: 1, title: 'JSX', slug: 'jsx', componentName: 'JSX'},

  {depth: 0, title: 'React Components', slug: 'components', componentName: 'Component'},
  {depth: 1, title: 'Component API', slug: 'componentName_api', componentName: 'ComponentAPI'},
  {depth: 1, title: 'Lifecycle API', slug: 'lifecycle_api', componentName: 'LifecycleAPI'},

  {depth: 0, title: 'Core Components', slug: 'core_components', componentName: 'CoreComponents'},
  {depth: 1, title: 'View', slug: 'view', componentName: 'View'},
  {depth: 1, title: 'Flexbox', slug: 'flexbox', componentName: 'Flexbox'},
  {depth: 1, title: 'Text', slug: 'text', componentName: 'Text'},
  {depth: 1, title: 'Image', slug: 'image', componentName: 'Image'},
  {depth: 1, title: 'ScrollView', slug: 'scrollview', componentName: 'ScrollView'},
  {depth: 1, title: 'ListView', slug: 'listview', componentName: 'ListView'},

  {depth: 0, title: 'Component Libraries', slug: 'component_libraries', componentName: 'ComponentLibraries'},
  {depth: 1, title: 'Shoutem UI', slug: 'shoutem_ui', componentName: 'ShoutemUI'},
  {depth: 2, title: 'Themes', slug: 'shoutem_ui_theme', componentName: 'ShoutemUITheme'},
  {depth: 2, title: 'Animation', slug: 'shoutem_ui_animation', componentName: 'ShoutemUIAnimation'},
  {depth: 0, title: 'Data Management', slug: 'data', componentName: 'Data'},
  {depth: 1, title: 'Component State', slug: 'data_component_state', componentName: 'ComponentState'},
  {depth: 1, title: 'Redux', slug: 'redux', componentName: 'Redux'},
  {depth: 2, title: 'React Redux', slug: 'react_redux', componentName: 'ReactRedux'},
  {depth: 1, title: 'Realm', slug: 'realm', componentName: 'Realm'},
  // {depth: 1, title: 'Firebase', slug: 'firebase_data'},

  {depth: 0, title: 'Persistence', slug: 'persistence', componentName: 'Persistence'},
  {depth: 1, title: 'AsyncStorage', slug: 'asyncstorage', componentName: 'AsyncStorage'},
  {depth: 1, title: 'Redux Persist', slug: 'redux_persist', componentName: 'ReduxPersist'},

  {depth: 0, title: 'Networking', slug: 'networking', componentName: 'Networking'},
  {depth: 1, title: 'With Redux', slug: 'networking_redux', componentName: 'NetworkingRedux'},

  {depth: 0, title: 'Animation', slug: 'animation', componentName: 'Animation'},
  {depth: 1, title: 'Animated', slug: 'animated', componentName: 'Animated'},
  {depth: 1, title: 'RN Animatable', slug: 'react_native_animatable', componentName: 'ReactNativeAnimatable'},
  {depth: 1, title: 'Gestures', slug: 'gestures', componentName: 'Gestures'},

  // {depth: 0, title: 'Navigation', slug: 'navigation'},
  // {depth: 1, title: 'React Native Router Flux', slug: 'react_native_router_flux'},
  // {depth: 1, title: 'React Native Navigation', slug: 'react_native_navigation'},

  {depth: 0, title: 'Boilerplates', slug: 'boilerplates', componentName: 'Boilerplates'},
  // {depth: 1, title: 'Ignite', slug: 'ignite'},

  {depth: 0, title: 'Exercises', slug: 'exercises', componentName: 'Exercises'},

  {depth: 1, title: 'Todo List', slug: 'todo_list', componentName: 'TodoList'},
  {depth: 2, title: 'App Layout', slug: 'todo_list_1', componentName: 'TodoList1'},
  {depth: 2, title: 'Input & Adding', slug: 'todo_list_2', componentName: 'TodoList2'},
  {depth: 2, title: 'List and Checkbox', slug: 'todo_list_3', componentName: 'TodoList3'},
  {depth: 2, title: 'Removal & Styling', slug: 'todo_list_4', componentName: 'TodoList4'},

  {depth: 1, title: 'Reddit', slug: 'reddit', componentName: 'Reddit'},
  {depth: 2, title: 'Router', slug: 'reddit_1', componentName: 'Reddit1'},
  {depth: 2, title: 'OAuth', slug: 'reddit_2', componentName: 'Reddit2'},
  {depth: 2, title: 'Persisting Token', slug: 'reddit_3', componentName: 'Reddit3'},
  {depth: 2, title: 'Fetch Posts', slug: 'reddit_4', componentName: 'Reddit4'},
  {depth: 2, title: 'Display Posts', slug: 'reddit_5', componentName: 'Reddit5'},

  {depth: 1, title: 'Uber', slug: 'uber', componentName: 'Uber'},
  {depth: 2, title: 'Search Header', slug: 'uber_1', componentName: 'Uber1'},
  {depth: 2, title: 'Results List', slug: 'uber_2', componentName: 'Uber2'},
  {depth: 2, title: 'Map & Geolocation', slug: 'uber_3', componentName: 'Uber3'},
  {depth: 2, title: 'UI Polish', slug: 'uber_4', componentName: 'Uber4'},
]

// Add section numbers. I use semver naming, since it's easy to remember
// how the sections should be numbered and arranged: {major}.{minor}.{patch}.
sections = sections.reduce((acc, section) => {
  let {major, minor, patch, sections} = acc
  const {depth} = section

  if (depth === 0) {
    major++
    minor = 0
    patch = 0
  } else if (depth === 1) {
    minor++
    patch = 0
  } else {
    patch++
  }

  sections.push({...section, major, minor, patch})

  return {...acc, major, minor, patch}
}, {sections: [], major: 0, minor: 0, patch: 0}).sections

// Add {parent} to patch sections
sections = sections.reduce((acc, section) => {
  let {parent, sections} = acc
  const {depth} = section

  if (depth === 0) {
    sections.push(section)
    parent = null
  } else if (depth === 1) {
    sections.push(section)
    parent = section.slug
  } else {
    sections.push({...section, parent})
  }

  return {...acc, parent}
}, {sections: [], parent: null}).sections

export default sections

const matches = (path, section) => {
  let normalizedPath = path

  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.slice(1)
  }

  return normalizedPath === section.slug
}

export const getSection = (path, offset = 0) => {
  const index = sections.findIndex(section => matches(path, section))

  if (index === -1) return null

  return sections[index + offset]
}

export const getNextSection = (path) => getSection(path, 1)

export const getPreviousSection = (path) => getSection(path, -1)

export const chapters = sections.reduce(
  (ch, section) => {
    const {depth} = section

    if (depth === 0) {
      ch.push([])
    }

    ch[ch.length - 1].push(section)

    return ch
  }, []
)
