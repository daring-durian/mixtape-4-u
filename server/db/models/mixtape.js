const Sequelize = require('sequelize')
const db = require('../db')

const Mixtape = db.define('mixtape', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  medium: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: 'untitled mixtape'
  },
  songs: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Mixtape