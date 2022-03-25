const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 8000

app.use(cors())
app.use(express.json())

require('dotenv').config()

app.use('/', require('./routes/user'))


mongoose.connect(process.env.MONGO_URI,
    err => {
        if(err) throw err

        console.log("Connected Successfully to MongoDB")
    });


    app.listen(PORT, () => {
        console.log(`server are run on ${PORT}`)
    })