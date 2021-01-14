const router = require('express').Router()
const {Song} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const songs = await Song.findAll()
    res.json(songs)
  } catch (error) {
    next(error)
  }
})

router.get('/:songId', async (req, res, next) => {
  try {
    const song = await Song.findByPk(req.params.songId)
    res.json(song)
  } catch (error) {
    next(error)
  }
})

module.exports = router
