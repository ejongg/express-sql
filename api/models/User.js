const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
})

User.sync()

module.exports = User
