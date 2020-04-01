const express = require('express')
const router = express.Router()

/**
 * Handles Index routing
 */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/home', (req, res, next) => {
  res.render('home')
})

module.exports = router
