module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/pet_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
