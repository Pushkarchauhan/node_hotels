const mongoose = require('mongoose');

const mongoUrl = 'mongodb://0.0.0.0:27017/pushkar'




mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected')
})


