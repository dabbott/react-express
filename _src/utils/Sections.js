let sections = [
  { depth: 1, title: 'JSX', slug: 'jsx', componentName: 'JSX' },

  {
    depth: 0,
    title: 'React Top-Level API',
    slug: 'react_api',
    componentName: 'ReactTopLevelAPI',
  },
  {
    depth: 1,
    title: 'React Components',
    slug: 'components',
    componentName: 'Component',
  },
  {
    depth: 1,
    title: 'Component API',
    slug: 'component_api',
    componentName: 'ComponentAPI',
  },
  {
    depth: 1,
    title: 'Lifecycle API',
    slug: 'lifecycle_api',
    componentName: 'LifecycleAPI',
  },
  // {depth: 1, title: 'PropTypes', slug: 'lifecycle_api', componentName: 'PropTypes'},

  { depth: 0, title: 'Styling', slug: 'styling', componentName: 'Styling' },
  // {depth: 1, title: 'Inline Styles', slug: 'inline_styles', componentName: 'Inline Styles'},
  // {depth: 1, title: 'Flexbox', slug: 'flexbox', componentName: 'Flexbox'},

  {
    depth: 0,
    title: 'Fundamentals',
    slug: 'fundamentals',
    componentName: 'Fundamentals',
  },
  {
    depth: 1,
    title: 'Performance Model',
    slug: 'performance_model',
    componentName: 'PerformanceModel',
  },
  {
    depth: 1,
    title: 'Event Handling',
    slug: 'event_handling',
    componentName: 'EventHandling',
  },
  {
    depth: 1,
    title: 'Input Handling',
    slug: 'input_handling',
    componentName: 'InputHandling',
  },
  {
    depth: 1,
    title: 'Conditional Rendering',
    slug: 'conditional_rendering',
    componentName: 'ConditionalRendering',
  },
  {
    depth: 1,
    title: 'Lists and Keys',
    slug: 'lists_and_keys',
    componentName: 'ListsAndKeys',
  },
  // {depth: 1, title: 'Animation', slug: 'animation', componentName: 'Animation'},
  {
    depth: 1,
    title: 'Refs and the DOM',
    slug: 'refs_and_the_dom',
    componentName: 'RefsAndTheDOM',
  },
  // {depth: 1, title: 'Using non-React Libs', slug: 'using_non_react_libs', componentName: 'UsingNonReactLibs'},

  // {depth: 0, title: 'Common Patterns', slug: 'common_patterns', componentName: 'CommonPatterns'},
  // {depth: 1, title: 'Tabs', slug: 'tabs', componentName: 'Tabs'},
  // {depth: 1, title: 'Modals', slug: 'modals', componentName: 'Modals'},
  // {depth: 1, title: 'Loading Indicators', slug: 'loading_indicators', componentName: 'LoadingIndicators'},
  // {depth: 1, title: 'Infinite Scroll', slug: 'infinite_scroll', componentName: 'InfiniteScroll'},
  //
  // {depth: 0, title: 'Routing', slug: 'routing', componentName: 'Routing'},
  // {depth: 1, title: 'React Router', slug: 'react_router', componentName: 'React Router'},

  { depth: 0, title: 'Data Management', slug: 'data', componentName: 'Data' },
  {
    depth: 1,
    title: 'Component State',
    slug: 'data_component_state',
    componentName: 'ComponentState',
  },
  { depth: 1, title: 'Redux', slug: 'redux', componentName: 'Redux' },
  {
    depth: 2,
    title: 'React Redux',
    slug: 'react_redux',
    componentName: 'ReactRedux',
  },
  { depth: 1, title: 'GraphQL', slug: 'graphql', componentName: 'GraphQL' },
  {
    depth: 2,
    title: 'Communicating with a GraphQL API',
    slug: 'graphql_api',
    componentName: 'CommunicatingWithGraphQLAPI',
  },
  {
    depth: 2,
    title: 'The GraphQL Schema',
    slug: 'graphql_schema',
    componentName: 'GraphQLSchema',
  },
  {
    depth: 2,
    title: 'Getting Started with GraphQL',
    slug: 'graphql_getting_started',
    componentName: 'GettingStartedWithGraphQL',
  },

  // {depth: 0, title: 'Networking', slug: 'networking', componentName: 'Networking'},
  // {depth: 1, title: 'With Redux', slug: 'networking_redux', componentName: 'NetworkingRedux', fullTitle: 'Networking with Redux'},
]

// Add section numbers. I use semver naming, since it's easy to remember
// how the sections should be numbered and arranged: {major}.{minor}.{patch}.
sections = sections.reduce(
  (acc, section) => {
    let { major, minor, patch, sections } = acc
    const { depth } = section

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

    sections.push({ ...section, major, minor, patch })

    return { ...acc, major, minor, patch }
  },
  { sections: [], major: 0, minor: 0, patch: 0 }
).sections

// Add {parent} to patch sections
sections = sections.reduce(
  (acc, section) => {
    let { parent, sections } = acc
    const { depth } = section

    if (depth === 0) {
      sections.push(section)
      parent = null
    } else if (depth === 1) {
      sections.push(section)
      parent = section.slug
    } else {
      sections.push({ ...section, parent })
    }

    return { ...acc, parent }
  },
  { sections: [], parent: null }
).sections

export default sections

const matches = (path, section) => {
  let normalizedPath = path

  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.slice(1)
  }

  return normalizedPath === section.slug
}

export const getSection = (path, offset = 0) => {
  const index = sections.findIndex((section) => matches(path, section))

  if (index === -1) return null

  return sections[index + offset]
}

export const getNextSection = (path) => getSection(path, 1)

export const getPreviousSection = (path) => getSection(path, -1)

export const chapters = sections.reduce((ch, section) => {
  const { depth } = section

  if (depth === 0) {
    ch.push([])
  }

  ch[ch.length - 1].push(section)

  return ch
}, [])