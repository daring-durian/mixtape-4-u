const router = require('express').Router()
const {Mixtape, Order, Song, User} = require('../db/models')
module.exports = router

// api/orders   - gets all orders
router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findAll()
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//  /api/orders/create  -creates new mixtape for order
router.post('/create', async (req, res, next) => {
  try {
    if (req.user) {
      const userId = req.user.id
      const currentUser = await User.findByPk(userId)
      const newOrderLoggedInUser = await Order.create()
      await newOrderLoggedInUser.setUser(currentUser)
      const newMixtape = await Mixtape.create({
        medium: 'cd'
      })
      await newMixtape.setOrder(newOrderLoggedInUser)
    } else if (!req.user) {
      const newOrder = await Order.create()

      const newMixtape = await Mixtape.create({
        medium: 'cd'
      })
      await newMixtape.setOrder(newOrder)
    }
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
