const router = require('express').Router()
const {Mixtape, Order, Song} = require('../db/models')
module.exports = router

// (/api/cart) get's the logged in customer's cart
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      let order = await Order.findOne({
        where: {
          userId: req.user.id,
          fulfilled: false
        }
      })
      let mixtape = await Mixtape.findOne({
        where: {
          orderId: order.id
        },
        include: Song
      })
      res.json(mixtape)
    } else if (!req.user) {
      res.send('Please, log in first')
      //once we have a login page, we should update this so user gets sent to our login route
    }
  } catch (err) {
    next(err)
  }
})
