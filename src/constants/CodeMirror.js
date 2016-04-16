
export const options = {
  value: '',
  mode: 'jsx',
  indentUnit: 2,
  lineNumbers: true,
  dragDrop: false,
  matchTags: {
    bothTags: true,
  },
  // matchBrackets: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  addModeClass: true,
  showCursorWhenSelecting: true,
  highlightSelectionMatches: true,
  theme: 'base16-light',
  extraKeys: {
    'Cmd-/': (cm) => {
      cm.listSelections().forEach((selection) => {
        const mode = cm.getModeAt(selection.from())
        switch (mode.name) {
          case 'xml':
            cm.toggleComment({
              lineComment: '//',
            })
            break
          case 'javascript':
            cm.toggleComment({
              lineComment: '//',
            })
            break
          default:
            break
        }
      })
    },
  },
}

export const readOnlyOptions = Object.assign({}, options, {
  readOnly: true,
  theme: 'read-only',
})

export const requireAddons = () => {
  require('codemirror/mode/jsx/jsx')
  require('codemirror/addon/fold/xml-fold')
  require('codemirror/addon/edit/matchtags')
  require('codemirror/addon/edit/matchbrackets')
  require('codemirror/addon/edit/closetag')
  require('codemirror/addon/edit/closebrackets')
  require('codemirror/addon/search/searchcursor')
  require('codemirror/addon/search/search')
  require('codemirror/addon/search/match-highlighter.js')
  require('codemirror/addon/comment/comment')
  require('codemirror/addon/hint/show-hint')
  require('codemirror/addon/hint/anyword-hint')
  require('codemirror/addon/selection/active-line')
  require('codemirror/addon/display/panel.js')
}
