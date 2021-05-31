const app = require('./index')
const port = process.env.PORT || 3000

app.listen(3000, () => {
    console.log("app is running on 3000")
})