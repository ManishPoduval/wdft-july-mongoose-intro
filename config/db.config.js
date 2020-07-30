const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bootcamp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Yayyyy! Database is connected')
    })
    .catch(() => {
        console.log('You\'re Dooomed!!')
    })
