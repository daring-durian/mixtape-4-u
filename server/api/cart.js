const router = require('express').Router()
const {Mixtape, Order, Song, User} = require('../db/models')
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
      })
      if (order) {
        const mixtape = await Mixtape.findAll({
          where: {
            orderId: order.id
          },
          include: Song
        })
        res.send(mixtape)
      } else if (!order) {
        res.status(100)
      }
    } else if (!req.user) {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    if (req.user) {
      const availablePricing = {
        vinyl: 30,
        cd: 10,
        cassette: 5
      }

      const mixtapeId = req.body.id
      const medium = req.body.medium
      const quantity = req.body.quantity
      const pricePerMediumType = availablePricing[medium]
      const totalPricePerMixtape = pricePerMediumType * quantity

      const updatedMixtape = await Mixtape.update(
        {
          medium: medium,
          price: totalPricePerMixtape
        },
        {
          where: {id: mixtapeId},
          return: true,
          plain: true
        }
      )
      res.send(updatedMixtape)
    } else {
      res.send(401)
    }
  } catch (error) {
    next(error)
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
