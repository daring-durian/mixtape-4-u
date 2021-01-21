const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Mixtape = db.model('mixtape')
const User = db.model('user')

describe('CART ROUTES', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/cart/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(async () => {
      let codyUser = await User.create({
        id: 1,
        email: codysEmail,
        password: '1234',
        name: 'Cody'
      })
      let coolMixtape = Mixtape.create({
        medium: 'cd',
        name: 'Super Cool Mixtape',
        fulfilled: false
      })
      // await coolMixtape.setUser(codyUser)
    })

    it('GET /api/cart', async () => {
      const res = await request(app)
        .get('/api/cart')
        .expect(200)

      expect(res.body).to.be.an('object')
    })
  })
})
