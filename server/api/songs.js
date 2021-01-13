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

router.get('/:songid', async (req, res, next) => {
  try {
    const song = await Song.findByPk(req.params.songid)
    res.json(song)
  } catch (error) {
    next(error)
  }
})

module.exports = router
