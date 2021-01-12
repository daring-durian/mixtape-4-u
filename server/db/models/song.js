const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 50]
    }
  },

  artist: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 50]
    }
  },

  album: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 50]
    }
  },

  year: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAfter: '1900-1-1'
    }
  },

  tags: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    unique: true,
    allowNull: false,
    validate: {
      len: [1, 10]
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 200]
    }
  },

  songUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 200]
    }
  }
})

module.exports = Song
