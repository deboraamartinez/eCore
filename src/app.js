const express = require('express')
const routes = require('./routes')
const db = require('../integrations/dbConnect')

const app = express()
const port = 8000


app.use(express.json())
app.use(routes)


db.on('error', console.log.bind(console, 'error of db connection'))
db.once('open', () => {
  console.log('The database is working')
})

app.listen(port, () => console.log(`The Server is running on ${port}`))

module.exports = app