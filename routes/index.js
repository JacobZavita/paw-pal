const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./petRoutes.js'))
router.use('/api', require('./noteRoutes.js'))
router.use('/api', require('./noiseRoutes.js'))
router.use('/api', require('./petfinderRoutes.js'))

module.exports = router
