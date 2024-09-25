const express = require('express')
const {userLogin, userSignup} = require ('../controlers/userController')
const router = express.Router()


// Login
router.post('/login', userLogin)


// Signup
router.post('/signup', userSignup)

module.exports = router