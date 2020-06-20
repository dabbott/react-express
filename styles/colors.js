const colors = {
  text: 'rgb(38, 48, 83)',
  divider: 'rgba(220, 220, 220, 0.5)',
  primary: 'rgb(59, 108, 212)',
  neutralBackground: '#DEDFE8',
  banner: {
    top: 'rgba(104, 43, 255, 0.1)',
    bottom: 'rgba(104, 43, 255, 0.02)',
  },
  button: {
    primaryText: 'white',
    secondaryText: 'white',
    get primaryBackground() {
      return colors.primary
    },
    secondaryBackground: 'rgb(160,160,160)',
  },
}

export default colors
