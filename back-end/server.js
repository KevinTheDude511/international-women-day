const express = require('express')
const cors = require('cors')
const app = express()
const connectDatabase = require('./database/connect')
require('dotenv').config()

const message = require('./routes/message')

const port = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/v1', message)

const startServer = async () => {
    try {
        await connectDatabase(process.env.MONGO_URI)
        console.log('Database connection successful')
        app.listen(port, () => {
            console.log('Server is listening at port ' + port)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()