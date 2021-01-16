/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Song = db.model('song')

describe('SONG ROUTES', () => {
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
  describe('/api/songs/:songId', () => {
    const newSong = {
      name: 'Ivo',
      artist: 'Cocteau Twins',
      album: 'Treasure',
      year: '1984',
      tags: 'pop'
    }

    beforeEach(() => {
      return Song.create(newSong)
    })
    it('GET /api/songs/:songId', async () => {
      let [song] = await Song.findAll({
        where: newSong
      })
      const res = request(app)
        .get(`/api/songs/${song.id}`)
        .expect(200)
      //it's getting here... seems close!
      // console.log('RES OVER HERE', res);
      // expect(res.body).to.be.an('object');
      // expect(res.body.album).to.be.equal('Ivo');
    })
  })
})
