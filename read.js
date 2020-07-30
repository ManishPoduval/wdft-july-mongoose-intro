
require('./config/db.config')

 const Student = require('./models/Student.model')  

Student.find()
    .then((result) => {
        console.log('Documents are ', result)
    })