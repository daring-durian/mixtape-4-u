const router = require('express').Router()
const {User, Song} = require('../db/models')

// api/admin/users returns all user data
router.get('/users', async (req, res, next) => {
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

// api/admin/create/song enables admin to modify song data
// accepts following schema
// {
//   "name": "Don't You Want Me",
//   "artist": "The Human League",
//   "album": "Dare!",
//   "year": "1981",
//   "tags": "pop",
//   "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/ce/Dare-cover.png",
//   "songUrl": "https://open.spotify.com/embed/track/3L7RtEcu1Hw3OXrpnthngx?si=_ufp6czURLGFswoYFV52-Q"
// }

router.post('/create/song', async (req, res, next) => {
  const isAdmin = req.user.role === 'admin'
  const newSong = req.body

  try {
    if (isAdmin) {
      await Song.create(newSong)
      res.send(200).end()
    } else {
      res.send(404)
    }
  } catch (error) {
    next(error)
  }
})

// api/admin/edit/:songId
// router.patch('/edit/:songId', async (req, res, next) => {
// 	try {
// 		await Song.update(req.body.product, {
// 			where: {
// 				id: req.params.songId
// 			}
// 		});
// 		res.sendStatus(204);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// api/admin/delete/song/songId
// accepts just the ID of the song in request URL
router.delete('/delete/:songId', async (req, res, next) => {
  const isAdmin = req.user.role === 'admin'
  try {
    if (isAdmin) {
      await Song.destroy({
        where: {
          id: req.params.songId
        }
      })
      res.status(204).end()
    } else {
      res.send(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
