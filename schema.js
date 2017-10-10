const GraphQLSchema = require('graphql').GraphQLSchema
const makeExecutableSchema = require('graph-tools').makeExecutableSchema

const resolver = require('./resolver').resolver

const typeDefs = `
  type User {
    id: String!
    name: String
    email: String
  }

  type Query {
    users: [User]!
  }
`

exports.schema = makeExecutableSchema({
  typeDefs,
  resolver
})
