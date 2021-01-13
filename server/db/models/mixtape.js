const Sequelize = require('sequelize')
const db = require('../db')

const Mixtape = db.define('mixtape', {
  medium: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: 'untitled mixtape'
  }
})

module.exports = Mixtape
