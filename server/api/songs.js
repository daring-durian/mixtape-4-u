const router = require('express').Router()
const {Song, Mixtape, Order} = require('../db/models')

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

// /api/songs/:songId Route to add song to cart
router.put('/:songId', async (req, res, next) => {
  try {
    const songId = req.params.songId
    const song = await Song.findByPk(songId)
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        fulfilled: false
      }
    })
    const mixtape = await Mixtape.findOne({
      where: {
        orderId: order.id
      },
      include: Song
    })
    await mixtape.addSong(song)

    res.send(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
