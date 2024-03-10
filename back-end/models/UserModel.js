const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    msg1: String,
    msg2: String,
    gender: Boolean,
})

module.exports = mongoose.model('User', UserSchema)