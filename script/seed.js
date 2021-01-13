'use strict'

const db = require('../server/db')
const {User, Song, Inventory, Mixtape} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'Kathy@email.com', password: '123', userName: 'Kathy'}),
    User.create({
      email: 'Desiree@email.com',
      password: '456',
      userName: 'Desiree'
    }),
    User.create({
      email: 'Allyson@email.com',
      password: '789',
      userName: 'Allyson'
    }),
    User.create({
      email: 'Yuliya@email.com',
      password: '012',
      userName: 'Yulia'
    })
  ])

  const songs = await Promise.all([
    Song.create({
      name: 'The World At Large',
      artist: 'Modest Mouse',
      album: 'Good News for People Who Love Bad News',
      year: '2004',
      tags: ['indie', 'rock'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'This Year',
      artist: 'The Mountain Goats',
      album: 'The Sunset Tree',
      year: '2005',
      tags: ['rock'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'September',
      artist: 'Earth, Wind & Fire',
      album: 'The Best of Earth, Wind & Fire Vol. 1',
      year: '1978',
      tags: ['disco'],
      iimageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'Young Moses',
      artist: 'Josh Ritter',
      album: 'Sermon on the Rocks',
      year: '2015',
      tags: ['indie'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'Dissect the Bird(Live)',
      artist: 'John Craigie',
      album: 'Opening for Steinbeck(Live)',
      year: '2018',
      tags: ['acoustic'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'Tout doucement',
      artist: 'Feist',
      album: 'Let It Die',
      year: '2004',
      tags: ['indie'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'Brian Wilson',
      artist: 'Barenaked Ladies',
      album: 'Gordon',
      year: '1992',
      tags: ['pop'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'I Specialize In Love',
      artist: 'Sharon Brown',
      album: 'I Specialize In Love',
      year: '2010',
      tags: ['disco'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: "Don't Stop Me Now",
      artist: 'Queen',
      album: 'Jazz',
      year: '1978',
      tags: ['upbeat'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    }),
    Song.create({
      name: 'The Quiet Things That No One Ever Knows',
      artist: 'Brand New',
      album: 'Deja Entendu',
      year: '2003',
      tags: ['emo'],
      imageUrl:
        'https://static.wikia.nocookie.net/animalcrossing/images/1/1c/AMF-AlbumArt-Aloha_K.K..png/revision/latest?cb=20171113021005',
      songUrl: 'soundcloud.com'
    })
  ])

  const inventory = await Promise.all([
    Inventory.create({type: 'vinyl', quantity: '321'})
  ])

  const mixtapes = await Promise.all([
    Mixtape.create({medium: 'vinyl', name: 'Dance Mixtape'}),
    Mixtape.create({medium: 'vinyl', name: 'Work Mixtape'}),
    Mixtape.create({medium: 'vinyl', name: 'Sad Mixtape'}),
    Mixtape.create({medium: 'vinyl', name: 'Romantic Mixtape'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${songs.length} songs`)
  console.log(`seeded ${inventory.length} inventory`)
  console.log(`seeded ${mixtapes.length} mixtapes`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
