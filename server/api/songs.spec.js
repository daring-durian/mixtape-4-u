const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Song = db.model('song')

describe.only('Song routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/songs/:songid/', () => {
    beforeEach(() => {
      return Song.create({
        name: 'sample',
        artist: 'dummyData',
        album: 'None of this is real',
        year: '2021'
      })
    })

    /* test database is seeding as expected, however when the test requests, it comes back with a 500 error, rather than the expected 200. Unsure how to proceed.
    */
    it('GET /api/songs/:songid', async () => {
      const res = await request(app)
        .get('/api/songs/:songid/')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.album).to.be.equal('None of this is real')
    })
  })
})
