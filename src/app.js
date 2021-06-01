const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user.js')
const userRouter = require('./routers/user.js')


const app = express()
const port = process.env.PORT || 8000

app.use(express.json()) //to print information from post request on console
app.use(userRouter)

app.listen(port, () => {
    console.log("app is running on", port)
})