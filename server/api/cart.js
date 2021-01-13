const router = require('express').Router()
const {Mixtape, Inventory} = require('../db/models')
module.exports = router

// /api/cart
router.get('/', async (req, res, next) => {
  try {
    let order
    if (req.user) {
      order = await Mixtape.findOne({
        where: {
          userId: req.user.userId
          //we need to add a 'active' column in our mixtapes database. Once users have multiple mixtapes, we can use that column to determine which one will appear in their cart
        }
      })
    } else if (!req.user) {
      res.send('Please, log in first')
    }
    res.send(order)
  } catch (err) {
    next(err)
  }
})
