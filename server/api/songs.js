const router = require('express').Router()
// const { Song } = require('../db');
router.get('/', (req, res, next) => {
  res.send('got here: GET /api/songs')
})
module.exports = router
