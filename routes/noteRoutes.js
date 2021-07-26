const router = require('express').Router()
const { Pet, Note, User } = require('../models')
const passport = require('passport')

// GET Pet's notes
router.get('/notes/:petid', passport.authenticate('jwt'), (req, res) => {
  Note.find({
    pet: req.params.petid
  })
    .populate('pet')
    .then(notes => res.json(notes))
    .catch(err => console.log(err))
})

// POST one Note
router.post('/notes', passport.authenticate('jwt'), (req, res) => {
  Note.create({
    body: req.body.body,
    pet: req.body.pet_id,
    user: req.user._id
  })
    .then(note => {
      Pet.findByIdAndUpdate(req.body.pet_id, { $push: { notes: note._id } })
        .then(() => {
          User.findByIdAndUpdate(req.user._id, { $push: { notes: note._id } })
            .then(_ => {
              res.json({
                body: note.body,
                user: req.user,
                post_id: req.body.post_id
              })
            })
            .catch(err => console.log(err))
        })
    })
})

// UPDATE one Note
router.put('/notes/:id', passport.authenticate('jwt'), (req, res) => Note.findByIdAndUpdate(req.params.id, { $set: req.body })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

// DELETE one Note
router.delete('/notes/:id', passport.authenticate('jwt'), (req, res) => Note.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
