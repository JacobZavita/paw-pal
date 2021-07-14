const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// register
router.post('/users/register', (req, res) => {
  const { name, email, username, phone } = req.body
  const favorites = []
  const notes = []
  // put dummy avatar url here
  const avatar = 'https://www.interstatedevelopment.com/wp-content/uploads/2019/04/generic-avatar-1-300x273.jpg'
  User.register(new User({ name, email, phone, username, avatar, favorites, notes }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// login
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

// get self with favs + notes
router.get('/users/me', passport.authenticate('jwt'), (req, res) => {
  User.findOne({ _id: req.user._id })
    .populate({
      path: 'favorites',
      model: 'Pet',
      populate: {
        path: 'notes',
        model: 'Note'
      }
    })
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

// no find other users, should only be able to see ur own data

// UPDATE the user
router.put('/users', passport.authenticate('jwt'), (req, res) => User.findByIdAndUpdate(req.user._id, { $set: req.body })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

// DELETE the user
router.put('/users', passport.authenticate('jwt'), (req, res) => User.findByIdAndDelete(req.user._id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
