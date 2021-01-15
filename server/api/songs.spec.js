/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Song = db.model('song')

describe('Song routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/songs', () => {
    const dummyDataSong = 'Sample Test Song'

    beforeEach(() => {
      return Song.create({
        name: dummyDataSong,
        artist: 'Dummy Data',
        album: 'None of this is real',
        year: '2021'
      })
    })

    it('GET /api/songs', async () => {
      const res = await request(app)
        .get('/api/songs')
        .expect(200)
      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(dummyDataSong)
    })
  })
})
// it('GET /api/songs/:songid', async () => {
// 	const res = await request(app).get('/api/songs/:songId').expect(200);

// 	expect(res.body).to.be.an('object');
// 	expect(res.body.album).to.be.equal('None of this is real');
// });
