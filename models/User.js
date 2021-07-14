const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  phone: String,
  avatar: String,
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
