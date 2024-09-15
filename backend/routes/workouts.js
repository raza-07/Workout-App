

const express = require('express')
const Workout = require('../models/WorkoutModel')
const {createWorkout, getWorkouts,getworkout, deleteWorkout, updateWorkout} = require('../controlers/WorkoutContrler')

const router = express.Router()
const mongoose = require('mongoose')

// Get all workout
router.get('/', getWorkouts)

// Get a specific workout
router.get('/:id', getworkout)

// Create a specific workout
router.post('/', createWorkout)

// Delete a specific workout
router.delete('/:id', deleteWorkout)

// Update a specific workout
router.patch('/:id', updateWorkout)

module.exports = router