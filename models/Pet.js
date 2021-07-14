const { model, Schema } = require('mongoose')

const Pet = new Schema({
  id: Number,
  name: String,
  image: String,
  phone: String,
  email: String,
  address: String,
  city: String,
  state: String,
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = model('Pet', Pet)
