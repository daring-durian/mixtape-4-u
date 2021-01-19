const router = require('express').Router()

router.use('/admin', require('./admin'))
router.use('/users', require('./users'))
router.use('/cart', require('./cart'))
router.use('/songs', require('./songs'))
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
