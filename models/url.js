const mongoose = require('mongoose')

const Schema = mongoose.Schema
const urlSchema = new Schema({
  originalUrl: {
    type: String,
    unique: true,
    required: true
  },
  shortenUrl: {
    type: String,
    unique: true,
    required: true
  }
})

module.exports = mongoose.model('url', urlSchema)
