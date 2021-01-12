const User = require('./user')
const Mixtape = require('./mixtape')
const Inventory = require('./inventory')
const Song = require('./song')

User.hasMany(Mixtape)
Mixtape.belongsTo(User)
Mixtape.hasMany(Song)
Song.belongsToMany(Mixtape, {through: 'songs_mixtapes'})

module.exports = {
  User,
  Mixtape,
  Inventory,
  Song
}
