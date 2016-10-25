//index.js
'use strict'

const env    = 'development'
const config = require('../knexfile.js')
const knex   = require('knex')(config[env])

module.exports = knex

