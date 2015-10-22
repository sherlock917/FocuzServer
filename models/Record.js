var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var recordSchema = new Schema({
  tag : Number,
  startAt : Number,
  endAt : Number,
  rate : Number,
  attention : Number,
  meditation : Number,
  attentions : Array,
  meditations : Array,
  userId : {type : ObjectId, ref : 'User'}
})

module.exports = mongoose.model('Record', recordSchema)