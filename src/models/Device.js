const mongoose = require('mongoose')

const Device = mongoose.model('Device',{
    name: String,
    description: String,
})

module.exports = Device;
