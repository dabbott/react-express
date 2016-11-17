let sections = [
  {depth: 0, title: 'Getting Started', slug: 'start'},
  {depth: 1, title: 'Babel', slug: 'babel'},
  {depth: 1, title: 'ES6', slug: 'es6'},
  {depth: 1, title: 'ES6 Continued', slug: 'es6_continued'},
  {depth: 1, title: 'ES7 and Beyond', slug: 'es7_and_beyond'},
  {depth: 1, title: 'JSX', slug: 'jsx'},

  {depth: 0, title: 'React Components', slug: 'components'},
  {depth: 1, title: 'Component API', slug: 'component_api'},
  {depth: 1, title: 'Lifecycle API', slug: 'lifecycle_api'},

  {depth: 0, title: 'Core Components', slug: 'core_components'},
  {depth: 1, title: 'View', slug: 'view'},
  {depth: 1, title: 'Flexbox', slug: 'flexbox'},
  {depth: 1, title: 'Text', slug: 'text'},
  {depth: 1, title: 'Image', slug: 'image'},
  {depth: 1, title: 'ScrollView', slug: 'scrollview'},
  {depth: 1, title: 'ListView', slug: 'listview'},

  {depth: 0, title: 'Data Management', slug: 'data'},
  {depth: 1, title: 'Component State', slug: 'data_component_state'},
  {depth: 1, title: 'Redux', slug: 'redux'},
  {depth: 2, title: 'React Redux', slug: 'react_redux'},
  // {depth: 2, title: 'Async Control Flow', slug: 'redux_async'},
  {depth: 1, title: 'Realm', slug: 'realm'},
  // {depth: 1, title: 'Firebase', slug: 'firebase_data'},
  //
  {depth: 0, title: 'Persistence', slug: 'persistence'},
  {depth: 1, title: 'AsyncStorage', slug: 'asyncstorage'},
  // {depth: 1, title: 'Redux Persist', slug: 'redux_persist'},

  // {depth: 0, title: 'Navigation', slug: 'navigation'},
  // {depth: 1, title: 'React Native Router Flux', slug: 'react_native_router_flux'},
  // {depth: 1, title: 'React Native Navigation', slug: 'react_native_navigation'},
  //
  {depth: 0, title: 'Animation', slug: 'animation'},
  {depth: 1, title: 'Animated', slug: 'animated'},
  {depth: 1, title: 'RN Animatable', slug: 'react_native_animatable'},
  {depth: 1, title: 'Gestures', slug: 'gestures'},

  {depth: 0, title: 'Exercises', slug: 'exercises'},

  {depth: 1, title: 'Todo List', slug: 'todo_list'},
  {depth: 2, title: 'App Layout', slug: 'todo_list_1'},
  {depth: 2, title: 'Input & Adding', slug: 'todo_list_2'},
  {depth: 2, title: 'List and Checkbox', slug: 'todo_list_3'},
  {depth: 2, title: 'Removal & Styling', slug: 'todo_list_4'},

  // {depth: 1, title: 'Reddit', slug: 'reddit'},

  {depth: 1, title: 'Uber', slug: 'uber'},
  {depth: 2, title: 'Search Header', slug: 'uber_1'},
  {depth: 2, title: 'Results List', slug: 'uber_2'},
  {depth: 2, title: 'Map & Geolocation', slug: 'uber_3'},
  {depth: 2, title: 'UI Polish', slug: 'uber_4'},
  //
  // {depth: 0, title: 'Boilerplates', slug: 'boilerplates'},
  // {depth: 1, title: 'Ignite', slug: 'ignite'},
  //
  // {depth: 0, title: 'Projects', slug: 'boilerplates'},
  // {depth: 1, title: 'Twitter Clone', slug: 'project_twitter'},
  // {depth: 2, title: 'Project Setup', slug: 'project_twitter_setup'},
  // {depth: 2, title: 'Item Component', slug: 'project_twitter_list_item'},
  // {depth: 2, title: 'List Component', slug: 'project_twitter_list'},
  // {depth: 2, title: 'Images', slug: 'project_twitter_images'},
  // {depth: 2, title: 'Video', slug: 'project_twitter_video'},
  // {depth: 2, title: 'Performance', slug: 'project_twitter_performance'},
  // {depth: 2, title: 'Bonus: Compose', slug: 'project_twitter_compose'},
  // {depth: 1, title: 'Uber Clone', slug: 'project_uber'},
  // {depth: 2, title: 'Project Setup', slug: 'project_uber'},
  // {depth: 2, title: 'Item Component', slug: 'project_uber'},
  // {depth: 2, title: 'List Component', slug: 'project_uber'},
  // {depth: 2, title: 'Images', slug: 'project_uber'},
  // {depth: 2, title: 'Video', slug: 'project_uber'},
  // {depth: 2, title: 'Performance', slug: 'project_uber'},
  // {depth: 2, title: 'Bonus: Compose', slug: 'project_uber'},
]

sections = sections.reduce((acc, section) => {
  let {major, minor, patch} = acc
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

  acc.sections.push({...section, major, minor, patch})

  return {...acc, major, minor, patch}
}, {sections: [], major: 0, minor: 0, patch: 0}).sections

export default sections

const matches = (path, section) => {
  let normalizedPath = path

  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.slice(1)
  }

  return normalizedPath === section.slug
}

export const getSection = (path, offset) => {
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
