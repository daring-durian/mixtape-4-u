const router = require('express').Router()
const {Mixtape, Order, Song} = require('../db/models')
module.exports = router

// (/api/cart) get's the logged in customer's cart
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findOne({
        where: {
          userId: req.user.id,
          fulfilled: false
        },
        include: {model: Mixtape, include: Song}
      }).then(result => {
        return result.mixtapes.map(mixtape => {
          return mixtape.get()
        })
      })
      res.send(order)
    } else if (!req.user) {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

// /api/cart/delete/:songId Route to delete song to cart
router.put('/delete/:songId', async (req, res, next) => {
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
    await mixtape.removeSong(song)

    res.send(204).end()
  } catch (err) {
    next(err)
  }
})
