require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'React Native Express',
    description: 'The fastest way to learn React Native.',
    head: {
      titleTemplate: 'React Native Express: %s',
      meta: [
        {name: 'description', content: 'The fastest way to learn React Native.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Native Express'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'React Native Express'},
        {property: 'og:description', content: 'The fastest way to learn React Native.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@devinaabbott'},
        {property: 'og:creator', content: '@devinaabbott'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);