const express = require('express')

// import the routes in routes/api.js
const apiRouter = require('./routes/api')

// create the web application
const app = express()

// serve files in the client directory directly to the user
app.use('/', express.static('client'))

// make the API routes in api.js available to the app
app.use('/api', apiRouter)

// start the server

const server = app.listen(process.env.PORT || 3000, function() {
console. log('Server running on port ', server.address().port)
})