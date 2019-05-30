const express = require('express')
const app = express()
const port = 5000

const events = require('./controllers/events')
const categories = require('./controllers/categories')


app.use(express.json())

app.get('/api/events', events.read)


app.get('/api/categories', categories.read)


app.listen(port, () => console.log(`I'm listening on Port: ${port}`))