var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
  account : String,
  password : String
})

module.exports = mongoose.model('User', userSchema)