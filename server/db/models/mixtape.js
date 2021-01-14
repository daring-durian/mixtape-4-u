const Sequelize = require('sequelize')
const db = require('../db')

const Mixtape = db.define('mixtape', {
  medium: {
    type: Sequelize.ENUM({values: ['vinyl', 'cd', 'cassette']}),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: 'untitled mixtape',
    validate: {
      len: [1, 150]
    }
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
})

module.exports = Mixtape
