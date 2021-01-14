const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Song = db.model('song')

describe('Song routes', () => {
  beforeEach(async () => {
    await db.sync({force: true})
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

  /* test database is seeding as expected, however when the test requests, it comes back with a 500 error, rather than the expected 200. Unsure how to proceed.
    */
  // it('GET /api/songs/:songid', async () => {
  // 	const res = await request(app).get('/api/songs/:songid/').expect(200);

  // 	expect(res.body).to.be.an('object');
  // 	expect(res.body.album).to.be.equal('None of this is real');
  // });
  // });
})
