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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }]
})

module.exports = model('Pet', Pet)
