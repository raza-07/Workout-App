const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
})

//  Static User Signup method

userSchema.statics.login = async function (email, password) {

    if (!email || !password){
        throw Error('All fileds required')
    }

    const user = await this.findOne({email})
    if (!user){
        throw Error("Incorrect Email")
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect Password')
    }

    return user
}

//  Static User Signup method
userSchema.statics.signup = async function(email, password) {

    // Email & password validation
    if (!email || !password){
        throw Error('All fileds required')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Please use strong password')
    }

    // check if email already exist
    const exists = await this.findOne({email})
    if (exists){
        throw Error("Email already exist!")
    }

    // bcrypting password / hashing
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = this.create({email, password: hash})

    return user
    
}



module.exports = mongoose.model('User', userSchema)