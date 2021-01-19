import React, { memo } from 'react'
import { WebPlayer, WebPlayerProps } from 'react-guidebook'
import { useTheme } from 'styled-components'

const paneNames = {
  editor: 'Code',
  player: 'Live Preview',
  transpiler: 'Babel Output',
  workspaces: 'Walkthrough',
  console: 'Console Output',
}

function getPaneType(pane: any): keyof typeof paneNames {
  return typeof pane === 'string' ? pane : pane.type
}

function countPlaygroundWidgets(code: string): number {
  return (code.match(/console\.log/g) || []).length
}

function codeHeight(code: string): number {
  const headerHeight = 40
  const footerHeight = 40
  const lineHeight = 20
  const padding = 4
  const visualSpacer = 20 // To make things look nicer
  const widgetHeight = 30
  const widgetsHeight = countPlaygroundWidgets(code) * widgetHeight
  const codeHeight = code.split('\n').length * lineHeight

  return (
    headerHeight +
    padding +
    codeHeight +
    widgetsHeight +
    visualSpacer +
    padding +
    footerHeight
  )
}

interface Props {
  variant?: 'slides'
  width?: number
  height?: number | string
  code?: string
  prelude?: string
  modules?: WebPlayerProps['modules']
  panes?: WebPlayerProps['panes']
  workspaces?: WebPlayerProps['workspaces']
  preset?: string
  playerOptions?: {
    css?: string
  }
  embeddedConsole: any
}

export default memo(
  function EditorConsole({
    variant,
    width,
    prelude,
    modules,
    panes = ['editor', 'player'],
    height,
    embeddedConsole,
    playerOptions = {},
    ...rest
  }: Props) {
    const theme = useTheme()

    const style = {
      minWidth: '0',
      minHeight: '0',
      ...(variant === 'slides'
        ? {
            flex: '1',
            height: '100%',
          }
        : {
            flex: '1 1 0%',
            height: height
              ? typeof height === 'number'
                ? `${height}px`
                : height
              : rest.code
              ? codeHeight(rest.code)
              : 700,
          }),
    }

    // Set up normal pane styles
    panes = panes.map((pane) =>
      pane === 'player'
        ? {
            id: 'player',
            type: 'player',
            // title: 'Live Preview',
            platform: 'web',
            prelude,
            modules,
            reloadable: true,
            ...playerOptions,
            css: [basePlayerCSS, playerOptions.css || ''].join('\n'),
            ...(embeddedConsole && { console: embeddedConsole }),
            style: {
              overflow: 'hidden',
              background: 'rgba(0,0,0,0.02)',
              height: '100%',
              paddingLeft: '0px',
              paddingRight: '0px',
              borderLeft: '4px solid rgba(238,238,238,1)',
              // backgroundColor: 'white',
              ...(panes.length === 1 && { flex: '1 1 auto' }),
            },
          }
        : pane
    )

    if (rest.workspaces && rest.workspaces.length > 0) {
      panes = ['workspaces', ...panes]
    }

    const baseStyles = {
      workspacesButtonWrapper: {
        backgroundColor: theme.colors.primary,
      },
      workspacesRowActive: {
        backgroundColor: theme.colors.primary,
        borderLeftColor: theme.colors.primary,
      },
      workspacesDescription: {
        backgroundColor: theme.colors.primary,
      },
      workspacesPane: {
        flex: '0 0 25%',
      },
      tabTextActive: {
        color: '#333',
        borderBottomColor: theme.colors.primary,
      },
    }

    const responsivePaneSets: WebPlayerProps['responsivePaneSets'] =
      panes.length > 1 && width !== 0
        ? [
            {
              maxWidth: 890,
              panes: [
                {
                  id: 'stack',
                  type: 'stack',
                  children: panes.map((pane, index) => {
                    const type = getPaneType(pane)

                    return {
                      id: `${type}-${index}`,
                      title: paneNames[type] || type,
                      ...(typeof pane === 'string' ? { type } : pane),
                      ...(type === 'workspaces' && {
                        style: {
                          flex: '1 1 0%',
                          width: 'inherit',
                        },
                      }),
                      // ...(pane === 'player' && {
                      //   style: {
                      //     height: '100%',
                      //     paddingLeft: '0px',
                      //     paddingRight: '0px',
                      //   },
                      // }),
                    } as any // Improve JavaScript Playgrounds exported types to make this easier to type
                  }),
                },
              ],
            },
          ]
        : []

    return (
      <WebPlayer
        preset="react-native"
        containerStyle={{
          marginTop: `${theme.sizes.spacing.medium}px`,
          marginBottom: `${theme.sizes.spacing.medium}px`,
          flex: '1',
          // border: `1px solid ${theme.colors.divider}`,
        }}
        css={variant === 'slides' ? slidesCSS : workspaceCSS}
        fullscreen={true}
        openInNewWindow={true}
        style={style}
        styles={{
          ...baseStyles,
          playerPane:
            width === 0
              ? {
                  display: 'none',
                }
              : {
                  overflow: 'hidden',
                  // background: 'rgba(0,0,0,0.02)',
                  background: 'rgb(250, 250, 250)',
                  marginLeft: '0',
                  marginRight: '0',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  // ...(panes.length === 1 &&
                  //   getPaneType(panes[0]) === 'player' && {
                  //     flex: 1,
                  //     paddingTop: '12px',
                  //   }),
                },
        }}
        panes={panes}
        responsivePaneSets={responsivePaneSets}
        {...rest}
      />
    )
  },
  () => true
)

const basePlayerCSS = `
#app {
  display: initial !important;
}
`

// const basePlayerCSS = `
// #app, #app > div, #app > div > div {
//   display: initial !important;
// }
// `

const workspaceCSS = `
.cm-s-react {
  color: #777;
}

.cm-s-react span.cm-def, .cm-s-react span.cm-attribute {
  color: #333;
}

.cm-s-react span.cm-keyword {
  color: rgb(59, 108, 212);
}

.cm-s-react span.cm-string, .cm-s-react span.cm-string-2, .cm-s-react span.cm-tag {
  color: #2e9f74;
}

.cm-s-react span.cm-bracket {
  color: #555;
}
`

const slidesCSS = `
.CodeMirror {
  background-color: rgb(250,250,250);
}

.CodeMirror-lines {
  padding-top: 20px;
  padding-bottom: 20px;
}

.cm-s-react {
  font-size: 18px;
  line-height: 26px;
}

.cm-s-react .CodeMirror-linenumber {
  display: none;
}

.cm-s-react .CodeMirror-gutters {
  background: rgb(250,250,250);
  padding-left: 12px;
  padding-right: 0px;
  border-left: 0px;
  border-right: 0px;
}
`
