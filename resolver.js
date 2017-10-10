const psql = require('./psqlAdapter').psql


exports.resolver = {
  Query: {
    users(_, args, ctx) {
      const usersQuery = 'select id, name, email from users'
      return psql.manyOrNone(usersQuery)
    }
  }
}
