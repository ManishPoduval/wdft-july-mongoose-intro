const mongoose = require('mongoose');

const StudentModel = mongoose.model('student', {name: String, age: Number}) 


module.exports = StudentModel