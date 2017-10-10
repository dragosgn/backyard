const pgPromise = require('pg-promise')

const connStr = 'postgresql://user@host:port/database'

const pgp = pgPromise({})
const psql = pgp(connStr)

exports.psql = psql
