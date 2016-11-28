const path = require('path')
const express = require('express')
const compression = require('compression')

const port = process.env.PORT || 3210

const paths = {
  index: path.resolve(__dirname, '..', 'dist', 'index.html'),
  dist: path.resolve(__dirname, '..', 'dist'),
}

const app = express()

app.use(compression())

app.use(express.static(paths.dist))

app.get('*', (req, res) => res.sendFile(paths.index))

app.listen(port, () => console.log(`Server started on port: ${port}`))
