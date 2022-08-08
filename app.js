require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const { dbConect } = require('./config/mongo')

app.use(cors())
app.use(express.json())

app.use('/api',require('./routes'))

dbConect()

module.exports = app