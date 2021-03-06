'use strict'

const db = require('/app/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/users', require('./users'))
  // .use('/challenges', require('./challenges'))
  // .use('/missions', require('./missions'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
