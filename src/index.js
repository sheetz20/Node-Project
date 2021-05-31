const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user.js')
const userRouter = require('./routers/user.js')


const app = express()

app.use(express.json()) //to print information from post request on console
app.use(userRouter)

module.exports = app