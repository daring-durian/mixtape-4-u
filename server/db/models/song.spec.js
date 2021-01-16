/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Song = db.model('song')

describe('SONG MODEL', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Basic Fields: name and artist', () => {
    describe('name', () => {
      it('name is a string', async () => {
        const lorelei = await Song.create({
          name: 'Lorelei',
          artist: 'Cocteau Twins',
          album: 'Treasure',
          year: '1984',
          tags: 'pop'
        })
        expect(lorelei.name).to.equal(
          'Lorelei',
          'Was not able to create song Lorelei'
        )
      })

      it('name cannot be null', async () => {
        await expect(
          Song.create({}),
          "We shouldn't be able to create a user with no name"
        ).to.be.rejected
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
