const mongoose = require('mongoose')

const connect = (uri) => {
    mongoose.connect(uri)
}

module.exports = connect