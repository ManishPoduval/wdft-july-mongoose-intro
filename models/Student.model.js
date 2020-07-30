const mongoose = require('mongoose');


let StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }, 
    age: {
        type: Number,
        max: 60,
        min: [20, 'Hey Kiddo!!!']
    }, 
    bootcamp: String
})

const StudentModel = mongoose.model('student', StudentSchema) 


module.exports = StudentModel