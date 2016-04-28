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
    description: 'Learn React Native with interactive examples.',
    head: {
      titleTemplate: 'React Native Express: %s',
      meta: [
        {name: 'description', content: 'Learn React Native with interactive examples.'},
        {charset: 'utf-8'},
        {property: 'og:type', content: 'article'},
        {property: 'og:url', content: 'http://www.reactnativeexpress.com/'},
        {property: 'og:site_name', content: 'React Native Express'},
        {property: 'og:image', content: 'https://www.reactnativeexpress.com/logo@2x.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'React Native Express'},
        {property: 'og:description', content: 'Learn React Native with interactive examples.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@devinaabbott'},
        {property: 'og:creator', content: '@devinaabbott'},
        {property: 'og:image:width', content: '256'},
        {property: 'og:image:height', content: '256'}
      ]
    }
  },

}, environment);
