const { response } = require('express')
const Workout = require('../models/WorkoutModel')
const { default: mongoose } = require('mongoose')

// Get all workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1})
    
    res.status(200).json(workout)
}

// Get specific workout
const getworkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
       return res.status(404).json({error: "Not such workout"})
    }
    res.status(200).json(workout)
}


// Create new Workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    let emptyField = []

    if (!title){
        emptyField.push('title')
    }
    if (!load){
        emptyField.push('load')
    } 
    if (!reps){
        emptyField.push('reps')
    }
    if (emptyField.length > 0) {
        return res.status(400).json({error: 'Please fill all fields!', emptyFields: emptyField})
      }
    // connect doc to db
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }  catch(error){
        res.status(400).json({error: "Error"})
    }
}


// Delete specific workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such Workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if (!workout){
        return res.status(404).json({error: "No such workout"})
    }
    
    res.status(200).json(workout)
}


// Update specific workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }
    res.status(200).json(workout)

}



module.exports = {
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateWorkout
}