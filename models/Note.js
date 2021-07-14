const { model, Schema } = require('mongoose')

const User = new Schema({
  title: String,
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

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
