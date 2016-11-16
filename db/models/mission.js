'use strict'

const Sequelize = require('sequelize')
const db = require('/app/db')

const Mission = db.define('missions', {
  title: Sequelize.STRING,
  summary: Sequelize.STRING
})

module.exports = Mission
