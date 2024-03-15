const express = require('express')
const mongoose = require('mongoose')
const movieRouter = require('./routes/movie-routes')

const PORT = 3000
const URL =
	'mongodb+srv://mixeys2008:User123@books-store.zaptjfx.mongodb.net/moviebox?retryWrites=true&w=majority&appName=books-store'

const app = express()
app.use(express.json())
app.use(movieRouter)

mongoose
	.connect(URL)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch((err) => {
		console.log(`DB connected error: ${err}`)
	})

app.listen(PORT, (err) => {
	err ? console.log('error: ', err) : console.log(`Listening port ${PORT}`)
})
