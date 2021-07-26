const { model, Schema } = require('mongoose')

const Note = new Schema({
  body: String,
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Note', Note)
