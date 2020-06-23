import { mediaQuery } from 'react-guidebook'

import colors from './colors'

const fonts = {
  normal: "'Helvetica Neue', Helvetica, sans-serif",
  monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
}

export default {
  fonts,
  title: {
    fontFamily: fonts.normal,
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: '100',
    color: colors.text,
    lineHeight: '1.4',
    [mediaQuery.small]: {
      fontSize: '36px',
      fontWeight: '300',
    },
  },
  subtitle: {
    fontFamily: fonts.normal,
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: '300',
    color: colors.text,
    lineHeight: '1.4',
    [mediaQuery.small]: {
      fontSize: '18px',
    },
  },
  heading1: {
    fontFamily: fonts.normal,
    fontSize: '24px',
    fontWeight: '300',
    color: colors.text,
    lineHeight: '1.5',
  },
  heading2: {
    fontFamily: fonts.normal,
    fontSize: '16px',
    fontWeight: '500',
    color: colors.text,
    lineHeight: '1.5',
  },
  heading3: {
    fontFamily: fonts.normal,
    fontSize: '14px',
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: '1.5',
  },
  body: {
    fontFamily: fonts.normal,
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.5',
    color: colors.text,
  },
  code: {
    fontFamily: fonts.monospace,
    fontSize: '13px',
    lineHeight: '1.5',
    color: colors.textMuted,
  },
}
