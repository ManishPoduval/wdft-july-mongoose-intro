
require('./config/db.config')

 const Student = require('./models/Student.model') 
 
//  Student.updateOne({name: 'Manish'}, { $set: {bootcamp: 'Ironhack'}})
//     .then(() => {
//         Student.find()
//             .then((result) => {
//                 console.log('Documents are ', result)
//             })
//     })
  
 Student.findByIdAndDelete('5f229aa4c115932a6481f0fc')   
    .then(() => {
        Student.find()
        .then((result) => {
            console.log('Documents are ', result)
        })
    })

    


//  Student.findById('5f229ade331bb91fb89ee158')
//     .then((result) => {
//         console.log('Documents are ', result)
//     })

// Student.find({name: 'Manish'}, {age: 1})
//     .then((result) => {
//         console.log('Documents are ', result)
//     })

