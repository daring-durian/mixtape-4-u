const router = require('express').Router()
const {Mixtape, Inventory, Song} = require('../db/models')
module.exports = router

// /api/cart
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      let order = await Mixtape.findOne({
        where: {
          userId: req.user.id,
          fulfilled: false
        },
        include: Song
      })
      res.send(order)
    } else if (!req.user) {
      res.send('Please, log in first')
      //once we have a login page, we should update this so user
    }
  } catch (err) {
    next(err)
  }
})
