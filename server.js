const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const graphqlExpress = require('graphql-server-express').graphqlExpress
const graphiqlExpress = require('graphql-server-express').graphiqlExpress

const schema = require('./Schema').schema

const GraphQLServer = express().use('*', cors())

// health determination
GraphQLServer.get('/health', (req, res) => {
  res.sendStatus(200)
})

// graphiql explorer
GraphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))


// graphql endpoint
GraphQLServer.use(
  '/',
  bodyParser.json(),
  graphqlExpress({ schema })
)


GraphQLServer.listen(3000, () => {
  console.log(`GraphQL Server listening on port 3000`)
})
