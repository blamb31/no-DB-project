const express = require('express')
const app = express()
const port = 5000

const events = require('./controllers/events')
const categories = require('./controllers/categories')


app.use(express.json())

app.get('/api/events', events.read)
app.post('/api/events', events.create)
app.delete('/api/events/:id', events.delete)
app.put('/api/events/:id', events.update)


app.get('/api/categories', categories.read)
app.post('/api/categories', categories.create)
app.delete('/api/categories/:id', categories.delete)
app.put('/api/categories/:id', categories.update)




app.listen(port, () => console.log(`I'm listening on Port: ${port}`))