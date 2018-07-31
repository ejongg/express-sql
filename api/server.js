const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(compression())
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(logger('dev'))
app.use(helmet())

app.set('x-powered-by', false)

app.use(routes)

app.listen(3000, () => {
  console.log(`Server running at: ${process.env.PORT}`)
})

module.exports = app
