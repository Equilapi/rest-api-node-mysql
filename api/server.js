const express = require('express')
const morgan = require('morgan')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Const Global
global.__root = __dirname + '/'

// Url Principal
app.get('/', function (req, res) {
	res.json("Hello API");
})

// Routes
app.use('/api/v1', require(__root + 'routes/employees'))

module.exports = app