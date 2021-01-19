const router = require('express').Router()
module.exports = router

const {User} = require('../db/models')

// api/admin
router.get('/', async (req, res, next) => {
  // gets all user information

  const isAdmin = req.user.role === 'admin'

  try {
    if (isAdmin) {
      const allUserData = await User.findAll()
      res.send(allUserData)
    } else {
      res.send(404)
    }
  } catch (error) {
    next(error)
  }
})
