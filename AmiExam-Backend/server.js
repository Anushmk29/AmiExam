const express = require('express');
const dotenv = require('dotenv')
const CORS = require("cors")
const path = require("path")
const http = require('http');
const ExamRoutes = require('./routes/ExamRoute')
const UserInfoRoutes = require('./routes/UserInfoRoutes')
const connectDB = require('./config/db');

dotenv.config()
connectDB()

const app = express()
const server = http.createServer(app)

app.use(CORS({
     origin:"http://localhost:5173",
    methods: ["GET", "POST","PUT","PATCH"],

}))


app.use(express.json())

app.use('/admin',ExamRoutes)
app.use('/students',ExamRoutes)
app.use('/',UserInfoRoutes)

const PORT = process.env.PORT || 8000

server.listen(8000, console.log(`Server started on port ${PORT}`))
