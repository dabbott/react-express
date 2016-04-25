const sections = [
  [
    ['Getting Started', 'start'],
    ['Babel', 'babel'],
    ['ES6', 'es6'],
    ['JSX', 'jsx'],
  ],
  [
    ['Components', 'components'],
    ['Component API', 'component_api'],
    ['Lifecycle API', 'lifecycle_api'],
  ],
  [
    ['Core Components', 'core_components'],
    ['View', 'view'],
    ['Text', 'text'],
    ['Image', 'image'],
    ['ScrollView', 'scrollview'],
  ],
  // [
  //   ['Organizing Data', 'data'], [
  //     ['Flux', 'flux'],
  //     ['Redux', 'redux'],
  //   ]
  // ],
  // [
  //   ['Persistence', 'persistence'], [
  //     ['AsyncStorage', 'asyncstorage'],
  //     ['Firebase', 'firebase'],
  //   ]
  // ],
]

export default sections

const matches = (path, section) => {
  return path.endsWith(section[1])
}

const getSectionIndex = (path) => {
  let major = -1
  let minor = -1

  sections.forEach((subsections, i) => {
    subsections.forEach((subSection, j) => {
      if (matches(path, subSection)) {
        major = i
        minor = j
        return false
      }
    })
  })

  return [major, minor]
}

export const getSection = (path) => {
  const [major, minor] = getSectionIndex(path)

  if (major !== -1 && minor !== -1) {
    return sections[major][minor]
  }

  return null
}

export const getNextSection = (path) => {
  const [major, minor] = getSectionIndex(path)

  if (major === -1 || minor === -1) {
    return null
  }

  if (minor < sections[major].length - 1) {
    return sections[major][minor + 1]
  } else if (major < sections.length - 1) {
    return sections[major + 1][0]
  }

  return null
}

export const getPreviousSection = (path) => {
  const [major, minor] = getSectionIndex(path)

  if (major === -1 || minor === -1) {
    return null
  }

  if (minor > 0) {
    return sections[major][minor - 1]
  } else if (major > 0) {
    return sections[major - 1][sections[major - 1].length - 1]
  }

  return null
}
