const mongoose = require('mongoose');

require('./config/db.config')

 const Student = require('./models/Student.model')  

 Student.create({name: 'Manish', age: 12})
     .then((res)=> {
         console.log('Data added', res)
     })
     .catch((err) => {
         console.log('Some errror took place ', err)
     })


//  Student.insertMany([{name: 'Juan', company: 'Apple'}, {name: 'Javier'}])    
//     .then((res)=> {
//         console.log('Many Data added', res)
//     })

