const router = require('express').Router()
const {Song, Mixtape, Order} = require('../db/models')
//api/songs/
router.get('/', async (req, res, next) => {
  try {
    const songs = await Song.findAll()
    res.json(songs)
  } catch (error) {
    next(error)
  }
})
//api/songs/:songId
router.get('/:songId', async (req, res, next) => {
  try {
    const song = await Song.findByPk(req.params.songId)
    res.json(song)
  } catch (error) {
    next(error)
  }
})

router.patch('/:songId', async (req, res, next) => {
  try {
    await Song.update(req.body.product, {
      where: {
        id: req.params.songId
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

// /api/songs/add/:songId Route to add song to cart
router.put('/add/:songId', async (req, res, next) => {
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
