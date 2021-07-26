const { Client } = require('@petfinder/petfinder-js')
const router = require('express').Router()

const client = new Client({ apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET})

router.post('/petfinder/', (req, res) => {
  client.animal.search(req.body)
    .then(({ data }) => res.json(data.animals))
    .catch(err => console.log('error in petfinder backend route ', err))
})

module.exports = router
