module.exports = (env) => {
  return {
    mode: env,
    entry: './index.js',
    output: {
      filename: 'bundle.js',
    },
  }
}
