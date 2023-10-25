const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./src/routes')

let app = express()

app.use(cors())
app.use(express.json({ limit: '100mb'}))
app.use(morgan('dev'))

routes(app)

module.exports = app
