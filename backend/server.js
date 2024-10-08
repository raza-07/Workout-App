// importing env
require('dotenv').config()

// import express
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()

// middleware
app.use(express.json())
 
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        // Listening to port
        app.listen(process.env.PORT, ()=>{
            console.log("Connecting to db & listening to the port", process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })
    

