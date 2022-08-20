const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000
app.use(express.json())
app.use(routes)


app.listen(port, () => console.log(`The Server is running on ${port}`))

module.exports = app