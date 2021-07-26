const router = require('express').Router()
const { Pet, User } = require('../models')
const passport = require('passport')

// GET User favorites
router.get('/pets/my', passport.authenticate('jwt'), (req, res) => {
  Pet.find({
    user: req.user._id
  })
    .populate({
      path: 'notes',
      model: 'Note'
    })
    .then(pets => res.json(pets))
    .catch(err => console.log(err))
})

// GET Pet by ID
router.get('/pets/:id', (req, res) => {
  Pet.findById(req.params.id)
    .populate({
      path: 'notes',
      model: 'Note'
    })
    .then(pets => res.json(pets))
    .catch(err => console.log(err))
})

// ADD Pet to User favorites
router.post('/pets', passport.authenticate('jwt'), (req, res) => {
  Pet.create({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    user: req.user._id,
    notes: []
  })
    .then(pet => {
      User.findByIdAndUpdate(req.user._id, { $push: { favorites: pet._id } })
        .then(() => {
          res.json(pet)
        })
    })
})

// UPDATE Pet
router.put('/pets/:id', passport.authenticate('jwt'), (req, res) => Pet.findByIdAndUpdate(req.params.id, { $set: req.body })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

// DELETE one pet
router.delete('/pets/:id', passport.authenticate('jwt'), (req, res) => Pet.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
