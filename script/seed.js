'use strict'
const {userData, songData, orderData, mixtapeData} = require('./dummyData')
const db = require('../server/db')
const {User, Song, Mixtape, Order} = require('../server/db/models')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const allUsers = await Promise.all(
    userData.map(user =>
      User.create({
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role
      })
    )
  )

  const allSongs = await Promise.all(
    songData.map(song =>
      Song.create({
        name: song.name,
        album: song.album,
        artist: song.artist,
        year: song.year,
        tags: song.tags,
        imageUrl: song.imageUrl,
        songUrl: song.songUrl
      })
    )
  )

  const allOrders = await Promise.all(
    orderData.map(order =>
      Order.create({
        fulfilled: order.fulfilled
      })
    )
  )

  const allMixtapes = await Promise.all(
    mixtapeData.map(mixtape =>
      Mixtape.create({
        medium: mixtape.medium,
        name: mixtape.name
      })
    )
  )

  await allOrders[0].setUser(allUsers[0])
  await allOrders[1].setUser(allUsers[1])
  await allOrders[2].setUser(allUsers[1])
  await allOrders[3].setUser(allUsers[2])
  await allOrders[4].setUser(allUsers[3]) //me
  await allOrders[5].setUser(allUsers[0])

  await allMixtapes[0].setOrder(allOrders[6])
  await allMixtapes[1].setOrder(allOrders[4]) //me
  await allMixtapes[2].setOrder(allOrders[2])
  await allMixtapes[5].setOrder(allOrders[0])

  await allMixtapes[0].addSong(allSongs[3])
  await allMixtapes[0].addSong(allSongs[6])
  await allMixtapes[1].addSong(allSongs[(9, 0)])
  await allMixtapes[2].addSong(allSongs[7])
  await allMixtapes[2].addSong(allSongs[8])
  await allMixtapes[3].addSong(allSongs[(5, 2)])
  await allMixtapes[4].addSong(allSongs[(1, 2)])
  await allMixtapes[5].addSong(allSongs[(4, 6)])
  await allMixtapes[6].addSong(allSongs[(6, 3, 2)])

  console.log(`seeded ${allUsers.length} users`)
  console.log(`seeded ${allSongs.length} songs`)
  console.log(`seeded ${allMixtapes.length} mixtapes`)
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
