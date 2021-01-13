const router = require('express').Router()
const {Song} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const songs = await Song.findAll()
    res.json(songs)
  } catch (error) {
    next(error)
  }
})

module.exports = router
