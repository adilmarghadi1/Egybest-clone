const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 8000

app.use(cors())
app.use(express.json())

require('dotenv').config()