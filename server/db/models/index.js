const User = require('./user')
const Mixtape = require('./mixtape')
const Song = require('./song')
const Order = require('./order')

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(Mixtape)
Mixtape.belongsTo(Order)

Song.belongsToMany(Mixtape, {through: 'songs_mixtapes'})
Mixtape.belongsToMany(Song, {through: 'songs_mixtapes'})

module.exports = {
  User,
  Mixtape,
  Song,
  Order
}
