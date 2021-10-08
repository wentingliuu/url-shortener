const mongoose = require('Mongoose')

mongoose.connect('mongodb://localhost/url-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => { console.log('MongoDB error!') })
db.once('open', () => { console.log('MongoDB connected!') })
