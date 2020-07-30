const mongoose = require('mongoose');

require('./config/db.config')

 const Student = require('./models/Student.model')  

 Student.create({name: 'Manish', age: 23})
     .then((res)=> {
         console.log('Data added', res)
     })


 Student.insertMany([{name: 'Juan'}, {name: 'Javier'}])    
    .then((res)=> {
        console.log('Many Data added', res)
    })

