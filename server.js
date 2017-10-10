const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const graphqlExpress = require('graphql-server-express').graphqlExpress
const graphiqlExpress = require('graphql-server-express').graphiqlExpress

const schema = require('./Schema').schema

const GraphQLServer = express().use('*', cors())

// healt det
