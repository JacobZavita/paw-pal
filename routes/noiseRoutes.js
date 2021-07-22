const router = require('express').Router()
const passport = require('passport')

router.get('/noises', passport.authenticate('jwt'), (req, res) => {
  const DogNoises = ['Bark bark!', 'Woof woof!', 'Bark bark bark!', 'Woof!', 'Wan wan!', 'Arf arf!', 'Arf!', 'Rruff!']
  res.json(DogNoises[Math.floor(Math.random() * DogNoises.length)])
})

router.get('/noises/dog', passport.authenticate('jwt'), (req, res) => {
  const DogNoises = ['Bark bark!', 'Woof woof!', 'Bark bark bark!', 'Woof!', 'Wan wan!', 'Arf arf!', 'Arf!', 'Rruff!']
  res.json(DogNoises[Math.floor(Math.random() * DogNoises.length)])
})

router.get('/noises/cat', passport.authenticate('jwt'), (req, res) => {
  const DogNoises = ['Meow!', 'Miaoo~', 'Mew', 'Nyaa!', 'Purrrr...', 'Mrrrrr...']
  res.json(DogNoises[Math.floor(Math.random() * DogNoises.length)])
})

router.get('/noises/rabbit', passport.authenticate('jwt'), (req, res) => {
  const DogNoises = ['Squeek squeek!', '...', 'Nibble nibble..', 'Squeek!', '...Nibble nibble...']
  res.json(DogNoises[Math.floor(Math.random() * DogNoises.length)])
})

router.get('/noises/bird', passport.authenticate('jwt'), (req, res) => {
  const DogNoises = ['Cheep cheep!', '♫', 'Chirp chirp!', 'Chirp chirp chirp!', 'Tweet tweet!', 'Twitter~']
  res.json(DogNoises[Math.floor(Math.random() * DogNoises.length)])
})

router.get('/noises/horse', passport.authenticate('jwt'), (req, res) => {
  const DogNoises = ['Neighh!', '!', 'Neigh!!!', 'Mrrr...']
  res.json(DogNoises[Math.floor(Math.random() * DogNoises.length)])
})

module.exports = router
